(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),b=function(e){var t=s.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?s.a.createElement(m,l(l({ref:t},c),{},{components:n})):s.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},118:function(e,t,n){"use strict";function r(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}t.a=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(s&&(s+=" "),s+=t);return s}},120:function(e,t,n){"use strict";var r=n(0),s=n(121);t.a=function(){const e=Object(r.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},121:function(e,t,n){"use strict";var r=n(0);const s=Object(r.createContext)(void 0);t.a=s},122:function(e,t,n){"use strict";var r=n(0),s=n.n(r),a=n(120),i=n(118),l=n(55),o=n.n(l);const c=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:u,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(a.a)(),[g,h]=Object(r.useState)(l),O=r.Children.toArray(e.children);if(null!=p){const e=m[p];null!=e&&e!==g&&u.some((t=>t.value===e))&&h(e)}const j=e=>{h(e),null!=p&&f(p,e)},y=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(r.cloneElement)(O.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},123:function(e,t,n){"use strict";var r=n(0),s=n.n(r);t.a=function({children:e,hidden:t,className:n}){return s.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),s=n(7),a=(n(0),n(117)),i=n(122),l=n(123),o={id:"tests",title:"Tests",sidebar_label:"Tests",slug:"/tests"},c={unversionedId:"tests",id:"tests",isDocsHomePage:!1,title:"Tests",description:"A Betterer test is a programmatic definition of something that you want to improve in your codebase. Typically this will either be something that is measured across the entire codebase (e.g. code coverage, or number of tests, or a specific performance metric), or something that is measured on a per-file basis (e.g. type checking, or linting).",source:"@site/docs/tests.md",slug:"/tests",permalink:"/betterer/docs/tests",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/tests.md",version:"current",lastUpdatedBy:"Craig Spence",lastUpdatedAt:1614393388,sidebar_label:"Tests",sidebar:"docs",previous:{title:"Test definition file",permalink:"/betterer/docs/test-definition-file"},next:{title:"Results file",permalink:"/betterer/docs/results-file"}},b=[{value:"Basic test",id:"basic-test",children:[]},{value:"Test goal",id:"test-goal",children:[]},{value:"Test deadline",id:"test-deadline",children:[]},{value:"File test",id:"file-test",children:[]},{value:"Complex test",id:"complex-test",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A ",Object(a.b)("strong",{parentName:"p"},"Betterer")," test is a programmatic definition of something that you want to improve in your codebase. Typically this will either be something that is measured ",Object(a.b)("em",{parentName:"p"},"across the entire codebase")," (e.g. code coverage, or number of tests, or a specific performance metric), or something that is measured ",Object(a.b)("em",{parentName:"p"},"on a per-file basis")," (e.g. type checking, or linting)."),Object(a.b)("p",null,"Tests are defined as code and can be re-used and shared with other projects. ",Object(a.b)("strong",{parentName:"p"},"Betterer")," even comes with a few ",Object(a.b)("a",{parentName:"p",href:"./built-in-tests"},"built-in tests"),"."),Object(a.b)("h2",{id:"basic-test"},"Basic test"),Object(a.b)("p",null,"The most basic test you can write checks if a number grows or shrinks:"),Object(a.b)(i.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nimport { bigger, smaller } from '@betterer/constraints';\n\nexport default {\n  'should grow': {\n    test: () => getNumberOfTests(),\n    constraint: bigger\n  },\n  'should shrink': {\n    test: () => getBundleSize(),\n    constraint: smaller\n  }\n};\n\nfunction getNumberOfTests(): number {\n  // ...\n}\n\nfunction getBundleSize(): number {\n  // ...\n}\n"))),Object(a.b)(l.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// .betterer.js\nconst { bigger, smaller } = require('@betterer/constraints');\n\nmodule.exports = {\n  'should grow': {\n    test: () => getNumberOfTests(),\n    constraint: bigger\n  },\n  'should shrink': {\n    test: () => getBundleSize(),\n    constraint: smaller\n  }\n};\n\nfunction getNumberOfTests() {\n  // ...\n}\n\nfunction getBundleSize() {\n  // ...\n}\n")))),Object(a.b)("p",null,"Most of the time you should wrap your test in a ",Object(a.b)("a",{parentName:"p",href:"./betterer-test#betterertest"},Object(a.b)("inlineCode",{parentName:"a"},"BettererTest")),". This adds a few nice helpers like ",Object(a.b)("inlineCode",{parentName:"p"},"only()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"skip()"),"."),Object(a.b)(i.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nimport { BettererTest } from '@betterer/betterer';\nimport { bigger, smaller } from '@betterer/constraints';\n\nexport default {\n  'should grow': new BettererTest({\n    test: () => getNumberOfTests(),\n    constraint: bigger\n  }).only(),\n  'should shrink': new BettererTest({\n    test: () => getBundleSize(),\n    constraint: smaller\n  }).skip()\n};\n\nfunction getNumberOfTests(): number {\n  // ...\n}\n\nfunction getBundleSize(): number {\n  // ...\n}\n"))),Object(a.b)(l.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// .betterer.js\nconst { BettererTest } = require('@betterer/betterer');\nconst { bigger, smaller } = require('@betterer/constraints');\n\nmodule.exports = {\n  'should grow': new BettererTest({\n    test: () => getNumberOfTests(),\n    constraint: bigger\n  }).only(),\n  'should shrink': new BettererTest({\n    test: () => getBundleSize(),\n    constraint: smaller\n  }).skip()\n};\n\nfunction getNumberOfTests() {\n  // ...\n}\n\nfunction getBundleSize() {\n  // ...\n}\n")))),Object(a.b)("h2",{id:"test-goal"},"Test goal"),Object(a.b)("p",null,'You can add a goal to your test, which can be a function or a value. Once the goal is met, the test will be marked as "completed":'),Object(a.b)(i.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nimport { BettererTest } from '@betterer/betterer';\nimport { bigger, smaller } from '@betterer/constraints';\n\nexport default {\n  'should grow': new BettererTest({\n    test: () => getNumberOfTests(),\n    constraint: bigger,\n    goal: (value: number) => value > 1000\n  }).only(),\n  'should shrink': new BettererTest({\n    test: () => getBundleSize(),\n    constraint: smaller,\n    goal: 5\n  }).skip()\n};\n\nfunction getNumberOfTests(): number {\n  // ...\n}\n\nfunction getBundleSize(): number {\n  // ...\n}\n"))),Object(a.b)(l.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// .betterer.js\nconst { BettererTest } = require('@betterer/betterer');\nconst { bigger, smaller } = require('@betterer/constraints');\n\nmodule.exports = {\n  'should grow': new BettererTest({\n    test: () => getNumberOfTests(),\n    constraint: bigger,\n    goal: (value) => value > 1000\n  }).only(),\n  'should shrink': new BettererTest({\n    test: () => getBundleSize(),\n    constraint: smaller,\n    goal: 5\n  }).skip()\n};\n\nfunction getNumberOfTests() {\n  // ...\n}\n\nfunction getBundleSize() {\n  // ...\n}\n")))),Object(a.b)("h2",{id:"test-deadline"},"Test deadline"),Object(a.b)("p",null,"You can add a deadline to your test, which can be a ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},Object(a.b)("inlineCode",{parentName:"a"},"Date")," object"),", or a valid ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#parameters"},Object(a.b)("inlineCode",{parentName:"a"},"Date")," string"),'. Once the deadline is passed, the test will be marked as "expired":'),Object(a.b)(i.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nimport { BettererTest } from '@betterer/betterer';\nimport { bigger, smaller } from '@betterer/constraints';\n\nexport default {\n  'should grow': new BettererTest({\n    test: () => getNumberOfTests(),\n    constraint: bigger,\n    deadline: new Date('2021/07/03')\n  }),\n  'should shrink': new BettererTest({\n    test: () => getBundleSize(),\n    constraint: smaller,\n    deadline: '2021/07/03'\n  })\n};\n\nfunction getNumberOfTests(): number {\n  // ...\n}\n\nfunction getBundleSize(): number {\n  // ...\n}\n"))),Object(a.b)(l.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// .betterer.js\nconst { BettererTest } = require('@betterer/betterer');\nconst { bigger, smaller } = require('@betterer/constraints');\n\nmodule.exports = {\n  'should grow': new BettererTest({\n    test: () => getNumberOfTests(),\n    constraint: bigger,\n    deadline: new Date('2021/07/03')\n  }).only(),\n  'should shrink': new BettererTest({\n    test: () => getBundleSize(),\n    constraint: smaller,\n    deadline: '2021/07/03'\n  }).skip()\n};\n\nfunction getNumberOfTests() {\n  // ...\n}\n\nfunction getBundleSize() {\n  // ...\n}\n")))),Object(a.b)("h2",{id:"file-test"},"File test"),Object(a.b)("p",null,"If you want to write a test that checks individual files, you can write a ",Object(a.b)("a",{parentName:"p",href:"./betterer-file-test#bettererfiletest"},Object(a.b)("inlineCode",{parentName:"a"},"BettererFileTest")),":"),Object(a.b)(i.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nimport { BettererFileResolver, BettererFileTest } from '@betterer/betterer';\n\nexport default {\n  'no more JavaScript files': countFiles('no more JavaScript files!').include('**/*.js')\n};\n\nfunction countFiles(issue: string) {\n  const resolver = new BettererFileResolver();\n  return new BettererFileTest(resolver, async (filePaths, fileTestResult) => {\n    filePaths.forEach((filePath) => {\n      // In this case the file contents don't matter:\n      const file = fileTestResult.addFile(filePath, '');\n      // Add the issue to the first character of the file:\n      file.addIssue(0, 0, issue);\n    });\n  });\n}\n"))),Object(a.b)(l.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// .betterer.js\nconst { BettererFileResolver, BettererFileTest } = require('@betterer/betterer');\n\nmodule.exports = {\n  'no more JavaScript': countFiles('no more JavaScript files!').include('**/*.js')\n};\n\nfunction countFiles(issue) {\n  const resolver = new BettererFileResolver();\n  return new BettererFileTest(resolver, async (filePaths, fileTestResult) => {\n    filePaths.forEach((filePath) => {\n      // In this case the file contents don't matter:\n      const file = fileTestResult.addFile(filePath, '');\n      // Add the issue to the first character of the file:\n      file.addIssue(0, 0, issue);\n    });\n  });\n}\n")))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./betterer-file-test"},"Full ",Object(a.b)("inlineCode",{parentName:"a"},"BettererFileTest")," API"))),Object(a.b)("h2",{id:"complex-test"},"Complex test"),Object(a.b)("p",null,"If you want to do more fancy custom things, you can have complete control over ",Object(a.b)("a",{parentName:"p",href:"./betterer-test#betterertestconstraint"},"constraints"),", ",Object(a.b)("a",{parentName:"p",href:"./betterer-test#bettererdiffer"},"diffing"),", ",Object(a.b)("a",{parentName:"p",href:"./betterer-test#bettererserialiser"},"serialising/deserialising")," and ",Object(a.b)("a",{parentName:"p",href:"./betterer-test#bettererprinter"},"printing"),"."),Object(a.b)(i.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nimport { BettererTest } from '@betterer/betterer';\nimport { BettererConstraintResult } from '@betterer/constraints';\n\ntype AccessibilityReport = {\n  warnings: Array<string>;\n  errors: Array<string>;\n};\n\nexport default {\n  'should be accessible': new BettererTest<AccessibilityReport>({\n    test: accessibilityTest,\n    constraint: accessibilityConstraint\n  })\n};\n\nfunction accessibilityTest(): AccessibilityReport {\n  // ...\n}\n\nfunction accessibilityConstraint(result: AccessibilityReport, expected: AccessibilityReport): BettererConstraintResult {\n  if (result.errors > expected.errors || result.warnings > expected.warnings) {\n    return BettererConstraintResult.worse;\n  }\n  if (result.errors < expected.errors || result.warnings < expected.warnings) {\n    return BettererConstraintResult.better;\n  }\n  return BettererConstraintResult.same;\n}\n"))),Object(a.b)(l.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// .betterer.js\nconst { BettererTest } = require('@betterer/betterer');\nconst { BettererConstraintResult } = require('@betterer/constraints');\n\nmodule.exports = {\n  'should be accessible': new BettererTest({\n    test: accessibilityTest,\n    constraint: accessibilityConstraint\n  })\n};\n\nfunction accessibilityTest() {\n  // ...\n}\n\nfunction accessibilityConstraint(result, expected) {\n  if (result.errors > expected.errors || result.warnings > expected.warnings) {\n    return BettererConstraintResult.worse;\n  }\n  if (result.errors < expected.errors || result.warnings < expected.warnings) {\n    return BettererConstraintResult.better;\n  }\n  return BettererConstraintResult.same;\n}\n")))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./betterer-test"},"Full ",Object(a.b)("inlineCode",{parentName:"a"},"BettererTest")," API"))))}p.isMDXComponent=!0}}]);