"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,h=c["".concat(p,".").concat(g)]||c[g]||d[g]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={id:"overview",title:"Overview",sidebar_label:"Overview",sidebar_position:0,description:"A quick overview of how to use the library"},o=void 0,l={unversionedId:"quick/overview",id:"quick/overview",title:"Overview",description:"A quick overview of how to use the library",source:"@site/docs/quick/overview.md",sourceDirName:"quick",slug:"/quick/overview",permalink:"/docs/quick/overview",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",sidebar_position:0,description:"A quick overview of how to use the library"},sidebar:"tutorialSidebar",next:{title:"Code Examples",permalink:"/docs/quick/code-examples"}},p={},u=[{value:"Documentation",id:"documentation",level:2},{value:"Helpful Pages",id:"helpful-pages",level:2},{value:"Building Your First Application",id:"building-your-first-application",level:2},{value:"Create a new Web API Project",id:"create-a-new-web-api-project",level:3},{value:"Add the Package From Nuget",id:"add-the-package-from-nuget",level:3},{value:"Create a Controller",id:"create-a-controller",level:3},{value:"Configure Startup",id:"configure-startup",level:3},{value:"Execute a Query",id:"execute-a-query",level:3},{value:"Results:",id:"results",level:4}],s={toc:u};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Install The Library"',title:'"Install',The:!0,'Library"':!0},"# Using the dotnet CLI\n> dotnet add package GraphQL.AspNet --prerelease\n\n# using Package Manager Console\n> Install-Package GraphQL.AspNet -IncludePrerelease\n")),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"This documentation should can be used as a reference for various aspects of the library or read to discover the various features of the library.  If you have questions don't hesitate to ask over on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql-aspnet/graphql-aspnet"},"Github"),"."),(0,a.kt)("h2",{id:"helpful-pages"},"Helpful Pages"),(0,a.kt)("span",{style:{fontSize:"1.2em"}},(0,a.kt)("p",null,"\ud83d\udccc ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/demo-projects"},"Demo Projects")," : A number of downloadable sample projects covering a wide range of topics"),(0,a.kt)("p",null,"\ud83d\udca1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/controllers/actions"},"Controllers")," : Everything you need to know about ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphController")," and defining action methods."),(0,a.kt)("p",null,"\ud83d\udcdc ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/attributes"},"Attributes")," : A reference list of the various ",(0,a.kt)("inlineCode",{parentName:"p"},"[Attributes]")," used by GraphQL ASP.NET to create your schema."),(0,a.kt)("p",null,"\ud83d\udcd0 ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/schema-configuration"},"Schema Configuration")," : A reference list of the various configuration options available at application startup.")),(0,a.kt)("h2",{id:"building-your-first-application"},"Building Your First Application"),(0,a.kt)("h3",{id:"create-a-new-web-api-project"},"Create a new Web API Project"),(0,a.kt)("p",null,"\ud83d\udcbb Setup a new ",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET Core Web API")," project:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"web api project",src:r(890).Z,width:"1518",height:"1012"})),(0,a.kt)("h3",{id:"add-the-package-from-nuget"},"Add the Package From Nuget"),(0,a.kt)("p",null,"\ud83d\udcbb Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQL.AspNet")," nuget package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# Powershell terminal, Package Manager in Visual Studio, Developer Command Prompt etc.\n> dotnet add package GraphQL.AspNet --prerelease\n")),(0,a.kt)("h3",{id:"create-a-controller"},"Create a Controller"),(0,a.kt)("p",null,"\ud83d\udcbb Create your first Graph Controller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="BakeryController.cs"',title:'"BakeryController.cs"'},'using GraphQL.AspNet.Attributes;\nusing GraphQL.AspNet.Controllers;\n\npublic class BakeryController : GraphController\n{\n    [QueryRoot("donut")]\n    public Donut RetrieveDonut()\n    {\n        return new Donut()\n        {\n            Id = 3,\n            Name = "Snowy Dream",\n            Flavor = "Vanilla"\n        };\n    }\n}\n\npublic class Donut\n{\n    public int Id { get; set; }\n    public string Name { get; set; }\n    public string Flavor { get; set; }\n}\n')),(0,a.kt)("h3",{id:"configure-startup"},"Configure Startup"),(0,a.kt)("p",null,"\ud83d\udcbb Register GraphQL with your services collection and your application pipeline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using GraphQL.AspNet.Configuration;\n\nvar builder = WebApplication.CreateBuilder(args);\n\n// Add services to the container.\n// highlight-next-line\nbuilder.Services.AddGraphQL();\n\nvar app = builder.Build();\n\n// Configure the HTTP request pipeline.\n// highlight-next-line\napp.UseGraphQL();\napp.Run();\n")),(0,a.kt)("h3",{id:"execute-a-query"},"Execute a Query"),(0,a.kt)("p",null,"\ud83d\udcbb Start the application and using your favorite tool, execute a query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Sample Query"',title:'"Sample','Query"':!0},"query {\n    donut {\n        id\n        name\n        flavor\n    }\n}\n")),(0,a.kt)("h4",{id:"results"},"Results:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"query results",src:r(9138).Z,width:"1137",height:"888"})))}c.isMDXComponent=!0},890:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-new-web-api-project-a1ba563f0b34a497c87ac932bb147914.png"},9138:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview-sample-query-results-1425298ea533b77850b7c923c8d97983.png"}}]);