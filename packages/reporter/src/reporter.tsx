import React from 'react';

import {
  BettererContext,
  BettererFilePaths,
  BettererReporter,
  BettererRuns,
  BettererSummaries,
  BettererSummary
} from '@betterer/betterer';
import { BettererError } from '@betterer/errors';
import { Instance, render } from 'ink';

import { Error, Reporter } from './components';

export const reporter: BettererReporter = createReporter();

function createReporter(): BettererReporter {
  const RENDER_OPTIONS = {
    debug: process.env.NODE_ENV === 'test'
  };

  let context: BettererContext;
  let app: Instance;

  return {
    async configError(_: unknown, error: BettererError): Promise<void> {
      await renderError(error);
    },
    async contextStart(c: BettererContext, lifecycle: Promise<BettererSummaries>): Promise<void> {
      context = c;
      app = render(<Reporter context={context} />, RENDER_OPTIONS);
      try {
        const summaries = await lifecycle;
        if (summaries.length > 1) {
          app.rerender(<Reporter context={context} summaries={summaries} />);
        }
      } catch (error) {
        await renderError(error);
      }
    },
    async runsStart(
      runs: BettererRuns,
      filePaths: BettererFilePaths,
      lifecycle: Promise<BettererSummary>
    ): Promise<void> {
      app.rerender(<Reporter context={context} filePaths={filePaths} runs={runs} />);
      const summary = await lifecycle;
      app.rerender(<Reporter context={context} filePaths={filePaths} runs={summary.runs} summary={summary} />);
    }
  };

  async function renderError(error: BettererError): Promise<void> {
    const errorApp = render(<Error error={error} />, RENDER_OPTIONS);
    await errorApp.waitUntilExit();
  }
}
