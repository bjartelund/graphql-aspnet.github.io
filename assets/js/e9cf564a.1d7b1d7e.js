"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5699],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,y=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"query-cache",title:"Query Caching",sidebar_label:"Query Caching",sidebar_position:8},o=void 0,c={unversionedId:"reference/query-cache",id:"reference/query-cache",title:"Query Caching",description:"When GraphQL ASP.NET parses a query, it generates a query plan that contains all the required data needed to execute the requested operation. For most queries this process is near instantaneous but in some particularly large queries it may take an extra moment to generate a full query plan. The query cache will help alleviate this bottleneck by caching a plan for a set period of time to skip the parsing and generation phases when completing a request.",source:"@site/docs/reference/query-caching.md",sourceDirName:"reference",slug:"/reference/query-cache",permalink:"/docs/reference/query-cache",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"query-cache",title:"Query Caching",sidebar_label:"Query Caching",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Pipelines & Middleware",permalink:"/docs/reference/middleware"},next:{title:"Demo Projects",permalink:"/docs/reference/demo-projects"}},l={},s=[{value:"Enabling the Query Cache",id:"enabling-the-query-cache",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When GraphQL ASP.NET parses a query, it generates a query plan that contains all the required data needed to execute the requested operation. For most queries this process is near instantaneous but in some particularly large queries it may take an extra moment to generate a full query plan. The query cache will help alleviate this bottleneck by caching a plan for a set period of time to skip the parsing and generation phases when completing a request."),(0,a.kt)("p",null,"The query cache makes a concerted effort to only cache plans that are truly unique and thus it will take a moment to analyze the incoming query to see if it identical to one that is already cached. For small queries the amount of time it takes to scrub the query text and look up a plan in the cache could be ",(0,a.kt)("em",{parentName:"p"},"as long")," as reparsing the query (200-300\u03bcs)."),(0,a.kt)("p",null,"Consider using the Query Cache only if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your application's individual query size is regularly more than 1000 characters in length"),(0,a.kt)("li",{parentName:"ul"},"You make use of a lot of interface graph types and a lot of object graph types for each of those interfaces."),(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("a",{parentName:"li",href:"../execution/metrics"},"Profiling")," reveals a bottleneck in the ",(0,a.kt)("inlineCode",{parentName:"li"},"parsing")," phase of any given query.")),(0,a.kt)("h2",{id:"enabling-the-query-cache"},"Enabling the Query Cache"),(0,a.kt)("p",null,"At startup, inject the query cache into the service collection. The cache itself is schema agnostic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup Code"',title:'"Startup','Code"':!0},"// Register the query cache BEFORE calling .AddGraphQL\n// highlight-next-line\nservices.AddGraphQLLocalQueryCache();\n\nservices.AddGraphQL();\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'Because a query plan contains function pointers and references to local graph types, the default query cache is restricted to being "in process" for a single server instance and does not scale out to reddis or other similar technologies. ')))}p.isMDXComponent=!0}}]);