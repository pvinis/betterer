(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{117:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),s=n,m=d["".concat(i,".").concat(s)]||d[s]||u[s]||o;return r?a.a.createElement(m,b(b({ref:t},l),{},{components:r})):a.a.createElement(m,b({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(117)),i={id:"reporter",title:"Betterer Reporter",sidebar_label:"Betterer Reporter",slug:"/reporter"},b={unversionedId:"api/reporter",id:"api/reporter",isDocsHomePage:!1,title:"Betterer Reporter",description:"BettererReporter",source:"@site/docs/api/reporter.md",slug:"/reporter",permalink:"/betterer/docs/reporter",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/reporter.md",version:"current",lastUpdatedBy:"Craig Spence",lastUpdatedAt:1614393388,sidebar_label:"Betterer Reporter",sidebar:"api",previous:{title:"Betterer Context",permalink:"/betterer/docs/context"},next:{title:"Betterer Result",permalink:"/betterer/docs/results"}},c=[{value:"<code>BettererReporter</code>",id:"bettererreporter",children:[]},{value:"Config hooks",id:"config-hooks",children:[{value:"<code>configError()</code>",id:"configerror",children:[]}]},{value:"Context hooks",id:"context-hooks",children:[{value:"<code>contextStart()</code>",id:"contextstart",children:[]},{value:"<code>contextEnd()</code>",id:"contextend",children:[]},{value:"<code>contextError()</code>",id:"contexterror",children:[]}]},{value:"Runs hooks",id:"runs-hooks",children:[{value:"<code>runsStart()</code>",id:"runsstart",children:[]},{value:"<code>runsEnd()</code>",id:"runsend",children:[]}]},{value:"Run hooks",id:"run-hooks",children:[{value:"<code>runStart()</code>",id:"runstart",children:[]},{value:"<code>runEnd()</code>",id:"runend",children:[]},{value:"<code>runError()</code>",id:"runerror",children:[]}]}],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"bettererreporter"},Object(o.b)("inlineCode",{parentName:"h2"},"BettererReporter")),Object(o.b)("p",null,"The interface to the ",Object(o.b)("strong",{parentName:"p"},"Betterer")," ",Object(o.b)("a",{parentName:"p",href:"./reporters"},"reporter system")," for hooking into the test runner."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"type BettererReporter = {\n  configError?(config: unknown, error: BettererError): Promise<void> | void;\n  contextStart?(context: BettererContext, lifecycle: Promise<BettererSummaries>): Promise<void> | void;\n  contextEnd?(context: BettererContext, summaries: BettererSummaries): Promise<void> | void;\n  contextError?(context: BettererContext, error: BettererError): Promise<void> | void;\n  runsStart?(runs: BettererRuns, filePaths: BettererFilePaths): Promise<void> | void;\n  runsEnd?(summary: BettererSummary, filePaths: BettererFilePaths): Promise<void> | void;\n  runStart?(run: BettererRun, lifecycle: Promise<void>): Promise<void> | void;\n  runEnd?(run: BettererRun): Promise<void> | void;\n  runError?(run: BettererRun, error: BettererError): Promise<void> | void;\n};\n")),Object(o.b)("h2",{id:"config-hooks"},"Config hooks"),Object(o.b)("h3",{id:"configerror"},Object(o.b)("inlineCode",{parentName:"h3"},"configError()")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"configError()")," hook is called when there is an error while validating and instantiating a ",Object(o.b)("a",{parentName:"p",href:"./config#bettererconfig"},Object(o.b)("inlineCode",{parentName:"a"},"BettererConfig")),"."),Object(o.b)("p",null,"Args:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"config"),": ","[",Object(o.b)("inlineCode",{parentName:"li"},"unknown"),"]"," - The invalid config object."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"error"),": ",Object(o.b)("a",{parentName:"li",href:"./errors#betterererror"},Object(o.b)("inlineCode",{parentName:"a"},"BettererError"))," - The error thrown while validating and instantiating the ",Object(o.b)("a",{parentName:"li",href:"./config#bettererconfig"},Object(o.b)("inlineCode",{parentName:"a"},"BettererConfig")),".")),Object(o.b)("p",null,"Returns: ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<void> | void")),Object(o.b)("h2",{id:"context-hooks"},"Context hooks"),Object(o.b)("h3",{id:"contextstart"},Object(o.b)("inlineCode",{parentName:"h3"},"contextStart()")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"contextStart()")," hook is called when a ",Object(o.b)("a",{parentName:"p",href:"./context#betterercontext"},Object(o.b)("inlineCode",{parentName:"a"},"BettererContext"))," starts. The ",Object(o.b)("inlineCode",{parentName:"p"},"lifecycle")," promise will resolve when the context ends or reject when the context errors, so it can be used instead of the ",Object(o.b)("a",{parentName:"p",href:"#contextend"},Object(o.b)("inlineCode",{parentName:"a"},"contextEnd()"))," and ",Object(o.b)("a",{parentName:"p",href:"#contexterror"},Object(o.b)("inlineCode",{parentName:"a"},"contextError()"))," hooks."),Object(o.b)("p",null,"Args:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context"),": ",Object(o.b)("a",{parentName:"li",href:"./context#betterercontext"},Object(o.b)("inlineCode",{parentName:"a"},"BettererContext"))," - The current test context."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lifecycle"),": ",Object(o.b)("a",{parentName:"li",href:"./context#betterersummaries"},Object(o.b)("inlineCode",{parentName:"a"},"Promise<BettererSummaries>"))," - A promise that will resolve when the context ends or reject when the context errors.")),Object(o.b)("p",null,"Returns: ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<void> | void")),Object(o.b)("h3",{id:"contextend"},Object(o.b)("inlineCode",{parentName:"h3"},"contextEnd()")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"contextEnd()")," hook is called when a ",Object(o.b)("a",{parentName:"p",href:"./context#betterercontext"},Object(o.b)("inlineCode",{parentName:"a"},"BettererContext"))," ends."),Object(o.b)("p",null,"Args:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context"),": ",Object(o.b)("a",{parentName:"li",href:"./context#betterercontext"},Object(o.b)("inlineCode",{parentName:"a"},"BettererContext"))," - The current test context."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"summaries"),": ",Object(o.b)("a",{parentName:"li",href:"./context#betterersummaries"},Object(o.b)("inlineCode",{parentName:"a"},"BettererSummaries"))," - A list of ",Object(o.b)("a",{parentName:"li",href:"./context#betterersummaries"},Object(o.b)("inlineCode",{parentName:"a"},"BettererSummaries")),", one for each run completed by the context.")),Object(o.b)("p",null,"Returns: ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<void> | void")),Object(o.b)("h3",{id:"contexterror"},Object(o.b)("inlineCode",{parentName:"h3"},"contextError()")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"contextError()")," hook is called when there is an error running a context."),Object(o.b)("p",null,"Args:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context"),": ",Object(o.b)("a",{parentName:"li",href:"./context#betterercontext"},Object(o.b)("inlineCode",{parentName:"a"},"BettererContext"))," - The current test context."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"error"),": ",Object(o.b)("a",{parentName:"li",href:"./errors#betterererror"},Object(o.b)("inlineCode",{parentName:"a"},"BettererError"))," - The error thrown while running the context.")),Object(o.b)("h2",{id:"runs-hooks"},"Runs hooks"),Object(o.b)("h3",{id:"runsstart"},Object(o.b)("inlineCode",{parentName:"h3"},"runsStart()")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"runsStart()")," hook is called when a ",Object(o.b)("a",{parentName:"p",href:"./context#betterercontext"},Object(o.b)("inlineCode",{parentName:"a"},"BettererContext"))," starts a new set of test runs."),Object(o.b)("p",null,"Args:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"runs"),": ",Object(o.b)("a",{parentName:"li",href:"./context#bettererruns"},Object(o.b)("inlineCode",{parentName:"a"},"BettererRuns"))," - A list of ",Object(o.b)("a",{parentName:"li",href:"./context#bettererruns"},Object(o.b)("inlineCode",{parentName:"a"},"BettererRuns"))," that will be run."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"filePaths"),": ",Object(o.b)("a",{parentName:"li",href:"./runner#bettererfilepaths"},Object(o.b)("inlineCode",{parentName:"a"},"BettererFilePaths"))," - A list of ",Object(o.b)("a",{parentName:"li",href:"./runner#bettererfilepaths"},Object(o.b)("inlineCode",{parentName:"a"},"BettererFilePaths"))," that will be checked.")),Object(o.b)("p",null,"Returns: ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<void> | void")),Object(o.b)("h3",{id:"runsend"},Object(o.b)("inlineCode",{parentName:"h3"},"runsEnd()")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"runsEnd()")," hook is called when a ",Object(o.b)("a",{parentName:"p",href:"./context#betterercontext"},Object(o.b)("inlineCode",{parentName:"a"},"BettererContext"))," ends a set of test runs."),Object(o.b)("p",null,"Args:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"summary"),": ",Object(o.b)("a",{parentName:"li",href:"./context#betterersummary"},Object(o.b)("inlineCode",{parentName:"a"},"BettererSummary"))," - A ",Object(o.b)("a",{parentName:"li",href:"./context#betterersummary"},Object(o.b)("inlineCode",{parentName:"a"},"BettererSummary"))," for the completed test run."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"filePaths"),": ",Object(o.b)("a",{parentName:"li",href:"./runner#bettererfilepaths"},Object(o.b)("inlineCode",{parentName:"a"},"BettererFilePaths"))," - A list of ",Object(o.b)("a",{parentName:"li",href:"./runner#bettererfilepaths"},Object(o.b)("inlineCode",{parentName:"a"},"BettererFilePaths"))," that were checked.")),Object(o.b)("p",null,"Returns: ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<void> | void")),Object(o.b)("h2",{id:"run-hooks"},"Run hooks"),Object(o.b)("h3",{id:"runstart"},Object(o.b)("inlineCode",{parentName:"h3"},"runStart()")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"runStart()")," hook is called when a ",Object(o.b)("a",{parentName:"p",href:"./context#bettererrun"},Object(o.b)("inlineCode",{parentName:"a"},"BettererRun"))," starts. The ",Object(o.b)("inlineCode",{parentName:"p"},"lifecycle")," promise will resolve when the test run ends or reject when the test run throws, so it can be used instead of the ",Object(o.b)("a",{parentName:"p",href:"#runend"},Object(o.b)("inlineCode",{parentName:"a"},"runEnd()"))," and ",Object(o.b)("a",{parentName:"p",href:"#runerror"},Object(o.b)("inlineCode",{parentName:"a"},"runError()"))," hooks."),Object(o.b)("p",null,"Args:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"run"),": ",Object(o.b)("a",{parentName:"li",href:"./context#bettererrun"},Object(o.b)("inlineCode",{parentName:"a"},"BettererRun"))," - The current test run."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lifecycle"),": ",Object(o.b)("inlineCode",{parentName:"li"},"Promise<void>")," - A promise that will resolve when the test run ends, or reject when the test run throws.")),Object(o.b)("p",null,"Returns: ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<void> | void")),Object(o.b)("h3",{id:"runend"},Object(o.b)("inlineCode",{parentName:"h3"},"runEnd()")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"runEnd()")," hook is called when a ",Object(o.b)("a",{parentName:"p",href:"./context#bettererrun"},Object(o.b)("inlineCode",{parentName:"a"},"BettererRun"))," ends."),Object(o.b)("p",null,"Args:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"run"),": ",Object(o.b)("a",{parentName:"li",href:"./context#bettererrun"},Object(o.b)("inlineCode",{parentName:"a"},"BettererRun"))," - The current test run.")),Object(o.b)("p",null,"Returns: ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<void> | void")),Object(o.b)("h3",{id:"runerror"},Object(o.b)("inlineCode",{parentName:"h3"},"runError()")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"runError()")," hook is called when there is an error running a test."),Object(o.b)("p",null,"Args:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"run"),": ",Object(o.b)("a",{parentName:"li",href:"./context#bettererrun"},Object(o.b)("inlineCode",{parentName:"a"},"BettererRun"))," - The current test run."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"error"),": ",Object(o.b)("a",{parentName:"li",href:"./errors#betterererror"},Object(o.b)("inlineCode",{parentName:"a"},"BettererError"))," - The error thrown while running the test.")))}p.isMDXComponent=!0}}]);