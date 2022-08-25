"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2778],{6243:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7378),o=t(8944);const i="tabItem_lLGn";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:t},n)}},637:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(5773),o=t(7378),i=t(6457),l=t(784),r=t(9947),s=t(3457),p=t(8944);const u="tabList_lSCs",c="tabItem_WhCL";function d(e){var n,t,i;const{lazy:d,block:m,defaultValue:g,values:h,groupId:f,className:k}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,l.l)(b,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===g?g:null!=(n=null!=g?g:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(i=v[0])?void 0:i.props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:j}=(0,r.U)(),[x,E]=(0,o.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&b.some((n=>n.value===e))&&E(e)}const T=e=>{const n=e.currentTarget,t=S.indexOf(n),a=b[t].value;a!==x&&(C(n),E(a),null!=f&&j(f,a))},L=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;t=S[n]||S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;t=S[n]||S[S.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,p.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},k)},b.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:e=>S.push(e),onKeyDown:L,onFocus:T,onClick:T},i,{className:(0,p.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),d?(0,o.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function m(e){const n=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},6642:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(7378),o=t(9589),i=t(6243),l=t(637);function r(e,n,t){let a=e.package?"yarn workspace "+e.package+" add ":"yarn add ";return e.dev?a+="--dev ":e.peer&&(a+="--peer "),t&&n&&!e.package&&(a+="-W "),a+=e.dep,a}function s(e,n){let t="pnpm add ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package?t+="--filter "+e.package+" ":n&&(t+="-w "),t+=e.dep,t}function p(e){let n=r(e,!1,!0),t=s(e,!1);return e.package||(n+="\n\n# If using workspaces\n",t+="\n\n# If using workspaces\n",n+=r(e,!0,!0),t+=s(e,!0)),a.createElement(l.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(i.Z,{value:"yarn"},a.createElement(o.Z,{language:"shell"},r(e,!1,!1))),a.createElement(i.Z,{value:"yarn1"},a.createElement(o.Z,{language:"shell"},n)),a.createElement(i.Z,{value:"npm"},a.createElement(o.Z,{language:"shell"},function(e){let n="npm install ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package&&(n+="--workspace "+e.package+" "),n+=e.dep,n}(e))),a.createElement(i.Z,{value:"pnpm"},a.createElement(o.Z,{language:"shell"},t)))}},4496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=t(5773),o=(t(7378),t(5318)),i=t(6642);const l={title:"ESLint example",sidebar_label:"ESLint"},r=void 0,s={unversionedId:"guides/examples/eslint",id:"guides/examples/eslint",title:"ESLint example",description:"ESLint has been prototyped in our",source:"@site/docs/guides/examples/eslint.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/eslint",permalink:"/docs/guides/examples/eslint",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/eslint.mdx",tags:[],version:"current",frontMatter:{title:"ESLint example",sidebar_label:"ESLint"},sidebar:"docs",previous:{title:"Astro",permalink:"/docs/guides/examples/astro"},next:{title:"Jest",permalink:"/docs/guides/examples/jest"}},p={},u=[{value:"Setup",id:"setup",level:2},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3},{value:"Sharing",id:"sharing",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to lint a single file or folder?",id:"how-to-lint-a-single-file-or-folder",level:3},{value:"Should we use <code>overrides</code>?",id:"should-we-use-overrides",level:3}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ESLint has been prototyped in our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/examples/blob/master/.moon/project.yml#L59"},"examples repository"),",\ncheck it out!")),(0,o.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," into moon."),(0,o.kt)("p",null,"Begin by installing ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint")," and any plugins in your root. We suggest using the same version across\nthe entire repository."),(0,o.kt)(i.Z,{dep:"eslint eslint-config-moon",dev:!0,mdxType:"AddDepsTabs"}),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Since linting is a universal workflow, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"lint")," task to\n",(0,o.kt)("a",{parentName:"p",href:"../../config/global-project"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/project.yml"))," with the following parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"tasks:\n    lint:\n        command:\n            - 'eslint'\n            # Support other extensions\n            - '--ext'\n            - '.js,.jsx,.ts,.tsx'\n            # Always fix and run extra checks\n            - '--fix'\n            - '--report-unused-disable-directives'\n            # Dont fail if a project has nothing to lint\n            - '--no-error-on-unmatched-pattern'\n            # Do fail if we encounter a fatal error\n            - '--exit-on-fatal-error'\n            # Only 1 ignore file is supported, so use the root\n            - '--ignore-path'\n            - '@in(4)'\n            # Run in current dir\n            - '.'\n        inputs:\n            # Source and test files\n            - 'src/**/*'\n            - 'tests/**/*'\n            # Other config files\n            - '*.config.*'\n            # Project configs, any format, any depth\n            - '**/.eslintrc.*'\n            # Root configs, any format\n            - '/.eslintignore'\n            - '/.eslintrc.*'\n")),(0,o.kt)("p",null,"Projects can extend this task and provide additional parameters if need be, for example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n    lint:\n        args:\n            # Enable caching for this project\n            - '--cache'\n")),(0,o.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,o.kt)("p",null,"If you're using the ",(0,o.kt)("a",{parentName:"p",href:"https://typescript-eslint.io"},(0,o.kt)("inlineCode",{parentName:"a"},"@typescript-eslint"))," packages, and want to\nenable type-safety based lint rules, we suggest something similar to the official\n",(0,o.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/docs/linting/monorepo"},"monorepo configuration"),"."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.eslint.json")," in your repository root, extend your shared compiler options (we use\n",(0,o.kt)("a",{parentName:"p",href:"./typescript"},(0,o.kt)("inlineCode",{parentName:"a"},"tsconfig.options.json")),"), and include all your project files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.eslint.json"',title:'"tsconfig.eslint.json"'},'{\n    "extends": "./tsconfig.options.json",\n    "compilerOptions": {\n        "emitDeclarationOnly": false,\n        "noEmit": true\n    },\n    "include": [\n        "apps/**/*"\n        "packages/**/*"\n    ]\n}\n')),(0,o.kt)("p",null,"Append the following inputs to your ",(0,o.kt)("inlineCode",{parentName:"p"},"lint")," task."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"tasks:\n    lint:\n        # ...\n        inputs:\n            # TypeScript support\n            - 'types/**/*'\n            - 'tsconfig.json'\n            - '/tsconfig.eslint.json'\n            - '/tsconfig.options.json'\n")),(0,o.kt)("p",null,"And lastly, add ",(0,o.kt)("inlineCode",{parentName:"p"},"parserOptions")," to your ",(0,o.kt)("a",{parentName:"p",href:"#root-level"},"root-level config"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"root-level"},"Root-level"),(0,o.kt)("p",null,"The root-level ESLint config is ",(0,o.kt)("em",{parentName:"p"},"required"),", as ESLint traverses upwards from each file to find\nconfigurations, and this denotes the stopping point. It's also used to define rules for the ",(0,o.kt)("em",{parentName:"p"},"entire"),"\nrepository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n  root: true, // Required!\n  extends: ['moon'],\n  rules: {\n    'no-console': 'error',\n  },\n\n  // TypeScript support\n  parser: '@typescript-eslint/parser',\n  parserOptions: {\n    project: 'tsconfig.eslint.json',\n    tsconfigRootDir: __dirname,\n  },\n};\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintignore")," file must also be defined at the root, as\n",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file"},"only 1 ignore file"),"\ncan exist in a repository. We ensure this ignore file is used by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"--ignore-path")," above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".eslintignore"',title:'".eslintignore"'},"node_modules/\n*.min.js\n*.map\n*.snap\n")),(0,o.kt)("h3",{id:"project-level"},"Project-level"),(0,o.kt)("p",null,"A project-level ESLint config can be utilized by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc.<json|js|cjs|yml>")," in the\nproject root. This is optional, but necessary when defining rules and ignore patterns unique to the\nproject."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/.eslintrc.js"',title:'"<project>/.eslintrc.js"'},"module.exports = {\n  // Patterns to ignore (alongside the root .eslintignore)\n  ignorePatterns: ['build', 'lib'],\n  // Project specific rules\n  rules: {\n    'no-console': 'off',\n  },\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The\n",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files"},(0,o.kt)("inlineCode",{parentName:"a"},"extends")),"\nsetting should ",(0,o.kt)("strong",{parentName:"p"},"not")," extend the root-level config, as ESLint will automatically merge configs\nwhile traversing upwards!")),(0,o.kt)("h3",{id:"sharing"},"Sharing"),(0,o.kt)("p",null,"To share configuration across projects, you have 3 options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define settings in the ",(0,o.kt)("a",{parentName:"li",href:"#root-level"},"root-level config"),". This only applies to the parent\nrepository."),(0,o.kt)("li",{parentName:"ul"},"Create and publish an\n",(0,o.kt)("a",{parentName:"li",href:"https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config"},(0,o.kt)("inlineCode",{parentName:"a"},"eslint-config")),"\nor ",(0,o.kt)("a",{parentName:"li",href:"https://eslint.org/docs/developer-guide/working-with-plugins"},(0,o.kt)("inlineCode",{parentName:"a"},"eslint-plugin"))," npm package.\nThis can be used in any repository."),(0,o.kt)("li",{parentName:"ul"},"A combination of 1 and 2.")),(0,o.kt)("p",null,"For options 2 and 3, if you're utilizing package workspaces, create a local package with the\nfollowing content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="packages/eslint-config-company/index.js"',title:'"packages/eslint-config-company/index.js"'},"module.exports = {\n  extends: ['airbnb'],\n};\n")),(0,o.kt)("p",null,"Within your root-level ESLint config, you can extend this package to inherit the settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n  extends: 'eslint-config-company',\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When using this approach, the package must be built and symlinked into ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," ",(0,o.kt)("em",{parentName:"p"},"before")," the\nlinter will run correctly. Take this into account when going down this path!")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"how-to-lint-a-single-file-or-folder"},"How to lint a single file or folder?"),(0,o.kt)("p",null,"Unfortunately, this isn't currently possible, as the ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint")," binary itself requires a file or\nfolder path to operate on, and in the task above we pass ",(0,o.kt)("inlineCode",{parentName:"p"},".")," (current directory). If this was not\npassed, then nothing would be linted."),(0,o.kt)("p",null,"This has the unintended side-effect of not being able to filter down lintable targets by passing\narbitrary file paths. This is something we hope to resolve in the future."),(0,o.kt)("p",null,"To work around this limitation, you can create another lint task."),(0,o.kt)("h3",{id:"should-we-use-overrides"},"Should we use ",(0,o.kt)("inlineCode",{parentName:"h3"},"overrides"),"?"),(0,o.kt)("p",null,"Projects should define their own rules using an ESLint config in their project root. However, if you\nwant to avoid touching many ESLint configs (think migrations), then\n",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns"},"overrides in the root"),"\nare a viable option. Otherwise, we highly encourage project-level configs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n  // ...\n  overrides: [\n    // Only apply to apps \"foo\" and \"bar\", but not others\n    {\n      files: ['apps/foo/**/*', 'apps/bar/**/*'],\n      rules: {\n        'no-magic-numbers': 'off',\n      },\n    },\n  ],\n};\n")))}d.isMDXComponent=!0}}]);