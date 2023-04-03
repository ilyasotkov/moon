"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8751],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(25773),r=(n(27378),n(35318));const i={title:"run"},l=void 0,o={unversionedId:"commands/run",id:"commands/run",title:"run",description:"The moon run (or moon r) command will run one or many targets (a task",source:"@site/docs/commands/run.mdx",sourceDirName:"commands",slug:"/commands/run",permalink:"/docs/commands/run",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/run.mdx",tags:[],version:"current",frontMatter:{title:"run"},sidebar:"docs",previous:{title:"touched-files",permalink:"/docs/commands/query/touched-files"},next:{title:"setup",permalink:"/docs/commands/setup"}},p={},m=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"Affected",id:"affected",level:4}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"moon run")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"moon r"),") command will run one or many ",(0,r.kt)("a",{parentName:"p",href:"../concepts/target"},"targets")," (a task\nwithin a project) and all of its dependencies in topological order. Each run will incrementally\ncache each task, improving speed and development times... over time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Run `lint` in project `app`\n$ moon run app:lint\n\n# Run `lint` in project `app` and `server`\n$ moon run app:lint server:lint\n\n# Run `lint` in all projects\n$ moon run :lint\n\n# Run `lint` in closest project (`client`)\n$ cd apps/client\n$ moon run lint\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"View the official ",(0,r.kt)("a",{parentName:"p",href:"../run-task"},"Run a task")," article for more information!")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"...<target>")," - ",(0,r.kt)("a",{parentName:"li",href:"../concepts/target"},"Targets")," or project relative tasks to run."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[-- <args>]")," - Additional arguments to\n",(0,r.kt)("a",{parentName:"li",href:"../run-task#passing-arguments-to-the-underlying-command"},"pass to the underlying command"),".")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--force")," - Force run and ignore touched files and affected status. Will not query VCS."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--dependents")," - Run downstream dependent targets (of the same task name) as well."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-i"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--interactive")," - Run the target in an interactive mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--profile <type>")," - Record and ",(0,r.kt)("a",{parentName:"li",href:"../guides/profile"},"generate a profile")," for ran tasks.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Types: ",(0,r.kt)("inlineCode",{parentName:"li"},"cpu"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"heap")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-u"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--updateCache")," - Bypass cache and force update any existing items.")),(0,r.kt)("h4",{id:"affected"},"Affected"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--affected")," - Only run target if affected by changed files, ",(0,r.kt)("em",{parentName:"li"},"otherwise")," will always run."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--remote")," - Determine affected against remote by comparing ",(0,r.kt)("inlineCode",{parentName:"li"},"HEAD")," against a base revision\n(default branch), ",(0,r.kt)("em",{parentName:"li"},"otherwise")," uses local changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--status <type>")," - Filter affected based on a change status. Can be passed multiple times.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Types: ",(0,r.kt)("inlineCode",{parentName:"li"},"all")," (default), ",(0,r.kt)("inlineCode",{parentName:"li"},"added"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"deleted"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"modified"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"staged"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"unstaged"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"untracked"))))))}c.isMDXComponent=!0}}]);