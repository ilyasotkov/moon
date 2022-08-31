"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9817,2108],{777:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(7378),r=n(1123),i=n(5161),l=n(8948),s=n(8944),c=n(1884),o=n(5626),m=n(9213);const d="cardContainer_H47c",u="cardTitle_tTnA",h="cardDescription_rTl4";function v(e){let{href:t,children:n}=e;return a.createElement(c.default,{href:t,className:(0,s.Z)("card padding--lg",d)},n)}function g(e){let{href:t,icon:n,title:r,description:i}=e;return a.createElement(v,{href:t},a.createElement("h2",{className:(0,s.Z)("text--truncate",u),title:r},n," ",r),i&&a.createElement("p",{className:(0,s.Z)("text--truncate",h),title:i},i))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function E(e){var t;let{item:n}=e;const r=(0,o.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(g,{href:n.href,icon:r,title:n.label,description:null==l?void 0:l.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(E,{item:t});case"category":return a.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{items:t,className:n}=e;return a.createElement("section",{className:(0,s.Z)("row",n)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(t).map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(p,{item:e})))))}var N=n(8274),Z=n(4506),k=n(5069),x=n(8372),L=n(1999);const T="generatedIndexPage_cf3v",y="list_qoTc",w="title_Ww3I";function V(e){let{categoryGeneratedIndex:t}=e;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function I(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.jA)();return a.createElement("div",{className:T},a.createElement(Z.Z,null),a.createElement(x.default,null),a.createElement(k.default,null),a.createElement("header",null,a.createElement(L.default,{as:"h1",className:w},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(b,{items:n.items,className:y})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(N.default,{previous:t.navigation.previous,next:t.navigation.next})))}function S(e){return a.createElement(a.Fragment,null,a.createElement(V,e),a.createElement(I,e))}},8274:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(5773),r=n(7378),i=n(9213),l=n(4022);function s(e){const{previous:t,next:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.Z,(0,a.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(l.Z,(0,a.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},5069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7378),r=n(8944),i=n(9213),l=n(5484),s=n(5611);function c(e){let{className:t}=e;const n=(0,s.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},4506:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7378),r=n(8944),i=n(353),l=n(1884),s=n(9213),c=n(2935),o=n(5484),m=n(4453),d=n(5611);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function v(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(l.default,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,i.default)(),{pluginId:s}=(0,c.useActivePlugin)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:g}=(0,c.useDocVersionSuggestions)(s),f=null!=u?u:(E=g).docs.find((e=>e.id===E.mainDocId));var E;return a.createElement("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(h,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(v,{versionLabel:g.label,to:f.path,onClick:()=>d(g.name)})))}function f(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(g,{className:t,versionMetadata:n}):null}},1999:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(5773),r=n(7378),i=n(8944),l=n(9213),s=n(624);const c="anchorWithStickyNavbar_JmGV",o="anchorWithHideOnScrollNavbar_pMLv";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();return"h1"!==t&&n?r.createElement(t,(0,a.Z)({},m,{className:(0,i.Z)("anchor",d?o:c),id:n}),m.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,a.Z)({},m,{id:void 0}))}},8372:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(7378),r=n(5161),i=n(8862),l=n(8948),s=n(5268),c=n(8896),o=n(728),m=n(658);function d(e){let{active:t,children:n,href:r}=e;return r?a.createElement(o.Z,{"aria-current":t?"page":void 0,href:r,itemProp:"item",size:"sm",variant:"muted",weight:"medium"},a.createElement("span",{itemProp:"name"},n)):a.createElement(m.ZP,{"aria-current":t?"page":void 0,as:"span",itemProp:"item name",size:"sm",variant:"muted",weight:"medium"},n)}function u(e){let{children:t,index:n}=e;return a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},a.createElement("div",{className:"flex items-center"},a.createElement(c.Z,{icon:s.yOZ,className:"flex-shrink-0 text-gray-600 mr-2","aria-hidden":"true"}),t,a.createElement("meta",{itemProp:"position",content:String(n+1)})))}function h(){const e=(0,l.Z)("/");return a.createElement("li",null,a.createElement(o.Z,{href:e,variant:"muted"},a.createElement(c.Z,{icon:s.yGT,className:"flex-shrink-0","aria-hidden":"true"}),a.createElement("span",{className:"sr-only"},"Home")))}function v(){const e=(0,r.s1)(),t=(0,i.Ns)();return e?a.createElement("nav",{className:"flex pl-1 mb-2","aria-label":"Breadcrumb"},a.createElement("ol",{role:"list",className:"list-none p-0 m-0 flex items-center space-x-2",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(h,null),e.map(((t,n)=>a.createElement(u,{key:n,index:n},a.createElement(d,{href:n<e.length?t.href:void 0,active:n===e.length-1},t.label)))))):null}},4022:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7378),r=n(8944),i=n(5268),l=n(8896),s=n(728);function c(e){let{permalink:t,title:n,isNext:c}=e;return a.createElement(s.Z,{className:(0,r.Z)("grow",c&&"text-right"),weight:"bold",to:t},!c&&a.createElement(l.Z,{className:"mr-1 icon-previous",icon:i.A35}),n,c&&a.createElement(l.Z,{className:"ml-1 icon-next",icon:i._tD}))}}}]);