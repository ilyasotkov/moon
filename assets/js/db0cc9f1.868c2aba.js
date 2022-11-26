"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4065],{5318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=o,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var n=a(5773),o=a(7378),r=a(5318),i=a(8944);function l(e){let{label:t,name:a,value:n,onChange:r,type:i="text"}=e;return o.createElement(o.Fragment,null,o.createElement("label",{htmlFor:a,className:"font-bold mb-0.5 block"},t),o.createElement("input",{type:i,name:a,id:a,required:!0,className:"appearance-none outline-none min-w-0 w-full bg-white border border-solid border-gray-400 dark:border-transparent rounded-md px-1 py-1 text-base text-gray-800 placeholder-gray-600 h-full font-sans w-5/6",onChange:r,value:n}))}function c(){const[e,t]=(0,o.useState)(""),[a,n]=(0,o.useState)(""),[r,c]=(0,o.useState)(""),[s,u]=(0,o.useState)(""),[m,p]=(0,o.useState)(""),[d,h]=(0,o.useState)(!1),g=!(e&&a&&r&&s&&m),f=(0,o.useCallback)((e=>{t(e.target.value)}),[]),b=(0,o.useCallback)((e=>{n(e.target.value)}),[]),y=(0,o.useCallback)((e=>{c(e.target.value)}),[]),v=(0,o.useCallback)((e=>{u(e.target.value)}),[]),k=(0,o.useCallback)((e=>{p(e.target.value)}),[]),w=(0,o.useCallback)((t=>{t.preventDefault(),fetch("https://formspree.io/f/xeqdnjqr",{body:JSON.stringify({email:a,name:e,org:r,region:m,repo:s}),headers:{Accept:"application/json"},method:"post"}).catch(console.error).finally((()=>{h(!0)}))}),[a,e,r,m,s]);return d?o.createElement("div",{className:"mt-2 mb-4 font-bold"},"Thank you for signing up for the remote caching beta!"):o.createElement("form",{method:"post",className:"grid grid-cols-2 gap-3 mt-2 mb-4",onSubmit:w},o.createElement("div",{className:"col-span-1"},o.createElement("div",null,o.createElement(l,{label:"Name",name:"name",onChange:f,value:e})),o.createElement("div",{className:"mt-2"},o.createElement(l,{label:"Email",name:"email",onChange:b,value:a,type:"email"})),o.createElement("div",{className:"mt-2"},o.createElement("label",{htmlFor:"region",className:"font-bold mb-0.5 block"},"Region"),o.createElement("select",{id:"region",name:"region",required:!0,className:"outline-none min-w-0 w-full bg-white border border-solid border-gray-400 dark:border-transparent rounded-md px-1 py-1 text-base text-gray-800 placeholder-gray-600 h-full font-sans w-5/6",onChange:k,value:m},o.createElement("option",{value:"",disabled:!0}),o.createElement("option",{value:"north-america"},"North America"),o.createElement("option",{value:"south-america"},"South America"),o.createElement("option",{value:"europe"},"Europe"),o.createElement("option",{value:"africa"},"Africa"),o.createElement("option",{value:"asia"},"Asia"),o.createElement("option",{value:"southeast-asia"},"Southeast Asia")))),o.createElement("div",{className:"col-span-1"},o.createElement("div",null,o.createElement(l,{label:"Organization",name:"org",onChange:y,value:r})),o.createElement("div",{className:"mt-2"},o.createElement(l,{label:"Repository URL",name:"repo",onChange:v,value:s,type:"url"})),o.createElement("div",{className:"mt-2 pt-3"},o.createElement("button",{type:"submit",className:(0,i.Z)("w-1/4 border border-transparent rounded-md px-2 py-1 flex items-center justify-center text-base font-bold text-white bg-blurple-400 dark:bg-purple-600 mt-0.5",g?"opacity-60":"hover:text-white hover:bg-blurple-500 dark:hover:bg-purple-500 cursor-pointer"),disabled:g},"Sign up"))))}const s={title:"Remote caching (experimental)",toc_max_heading_level:6},u=void 0,m={unversionedId:"guides/remote-cache",id:"guides/remote-cache",title:"Remote caching (experimental)",description:"Is your CI pipeline running slower than usual? Are you tired of running the same build over and over",source:"@site/docs/guides/remote-cache.mdx",sourceDirName:"guides",slug:"/guides/remote-cache",permalink:"/docs/guides/remote-cache",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/remote-cache.mdx",tags:[],version:"current",frontMatter:{title:"Remote caching (experimental)",toc_max_heading_level:6},sidebar:"guides",previous:{title:"Task profiling",permalink:"/docs/guides/profile"},next:{title:"Root-level project",permalink:"/docs/guides/root-project"}},p={},d=[{value:"Beta sign up",id:"beta-sign-up",level:2},{value:"Enabling remote caching",id:"enabling-remote-caching",level:2},{value:"FAQ",id:"faq",level:2},{value:"What is an artifact?",id:"what-is-an-artifact",level:4},{value:"Do I have to use remote caching?",id:"do-i-have-to-use-remote-caching",level:4},{value:"Does remote caching store source code?",id:"does-remote-caching-store-source-code",level:4},{value:"Does moon collect any personally identifiable information?",id:"does-moon-collect-any-personally-identifiable-information",level:4},{value:"What is an artifacts lifetime / retention policy?",id:"what-is-an-artifacts-lifetime--retention-policy",level:4}],h={toc:d};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Is your CI pipeline running slower than usual? Are you tired of running the same build over and over\nalthough nothing has changed? Do you wish to reuse the same local cache across other machines and\nenvironments? These are just a few scenarios that remote caching aims to solve."),(0,r.kt)("p",null,"Remote caching is a system that shares artifacts to improve performance, reduce unnecessary\ncomputation time, and alleviate resources. It achieves this by uploading hashed artifacts to a cloud\nstorage provider, like AWS S3 or Google Cloud, and downloading them on demand when a build matches a\nderived hash."),(0,r.kt)("h2",{id:"beta-sign-up"},"Beta sign up"),(0,r.kt)("p",null,"Remote caching ",(0,r.kt)("em",{parentName:"p"},"is not yet")," available for general use and is currently in beta while we iron out the\nsystems. However, you may sign up for the beta and we'll notify you once you've been accepted!"),(0,r.kt)(c,{mdxType:"RemoteCacheBeta"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We are only accepting beta sign ups for open source or public facing projects at this time!")),(0,r.kt)("h2",{id:"enabling-remote-caching"},"Enabling remote caching"),(0,r.kt)("p",null,"Once your beta signup has been accepted, you'll be granted 2 API keys. The first is the secret key\nfor your entire organization, and the second is an access key specific to the repository you signed\nup for."),(0,r.kt)("p",null,"In that repositories CI environment, set the following environment variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MOONBASE_SECRET_KEY=<secret key>\nMOONBASE_API_KEY=<api key>\n")),(0,r.kt)("p",null,"moon will automatically authenticate the remote caching service when all credentials in the\nenvironment exist."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h4",{id:"what-is-an-artifact"},"What is an artifact?"),(0,r.kt)("p",null,"In the context of moon and remote caching, an artifact is a tar archive (",(0,r.kt)("inlineCode",{parentName:"p"},".tar.gz"),") that contains\nall ",(0,r.kt)("a",{parentName:"p",href:"../config/project#outputs"},"outputs of a task"),", as well as the stdout and stderr of the task\nthat generated the outputs. Artifacts are uniquely identified by the\n",(0,r.kt)("a",{parentName:"p",href:"../concepts/cache#hashing"},"moon generated hash"),"."),(0,r.kt)("h4",{id:"do-i-have-to-use-remote-caching"},"Do I have to use remote caching?"),(0,r.kt)("p",null,"No, remote caching is ",(0,r.kt)("em",{parentName:"p"},"optional"),". It's intended purpose is to store long lived build artifacts to\nspeed up CI pipelines, and optionally local development. For the most part,\n",(0,r.kt)("a",{parentName:"p",href:"../commands/ci"},(0,r.kt)("inlineCode",{parentName:"a"},"moon ci"))," does a great job of only running what's affected in pull requests, and\nis a great starting point."),(0,r.kt)("h4",{id:"does-remote-caching-store-source-code"},"Does remote caching store source code?"),(0,r.kt)("p",null,"No, remote caching ",(0,r.kt)("em",{parentName:"p"},"does not")," store source code. It stores the\n",(0,r.kt)("a",{parentName:"p",href:"../config/project#outputs"},"outputs of a task"),", which is typically built and compiled code. To\nverify this, you can inspect the tar archives in ",(0,r.kt)("inlineCode",{parentName:"p"},".moon/cache/outputs"),"."),(0,r.kt)("h4",{id:"does-moon-collect-any-personally-identifiable-information"},"Does moon collect any personally identifiable information?"),(0,r.kt)("p",null,"No, moon does not collect any PII as part of the remote caching process."),(0,r.kt)("p",null,"However, to use remote caching, you must create a moonrepo account in which we require an email\naddress, and information about your organization and repository."),(0,r.kt)("h4",{id:"what-is-an-artifacts-lifetime--retention-policy"},"What is an artifacts lifetime / retention policy?"),(0,r.kt)("p",null,"Public artifacts are stored for 1 month. Private artifacts are stored for 3 months."))}g.isMDXComponent=!0}}]);