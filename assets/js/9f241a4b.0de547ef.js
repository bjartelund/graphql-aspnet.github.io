"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"interfaces",title:"Interfaces",sidebar_label:"Interfaces",sidebar_position:2},o=void 0,s={unversionedId:"types/interfaces",id:"types/interfaces",title:"Interfaces",description:"Interfaces in GraphQL work like interfaces in C#. They provide a contract for a set of common fields amongst different objects. When it comes to declaring them, the INTERFACE graph type works exactly like object types.",source:"@site/docs/types/interfaces.md",sourceDirName:"types",slug:"/types/interfaces",permalink:"/docs/types/interfaces",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"interfaces",title:"Interfaces",sidebar_label:"Interfaces",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Input Objects",permalink:"/docs/types/input-objects"},next:{title:"Unions",permalink:"/docs/types/unions"}},l={},p=[{value:"Object Graph Types Must be Known",id:"object-graph-types-must-be-known",level:2},{value:"Use It To Include It",id:"use-it-to-include-it",level:2},{value:"Interfaces are not Input Objects",id:"interfaces-are-not-input-objects",level:2},{value:"Interface Names",id:"interface-names",level:2},{value:"Inheritance",id:"inheritance",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Interfaces in GraphQL work like interfaces in C#. They provide a contract for a set of common fields amongst different objects. When it comes to declaring them, the ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERFACE")," graph type works exactly like ",(0,r.kt)("a",{parentName:"p",href:"./objects"},"object types"),"."),(0,r.kt)("p",null,"By default, when creating an interface graph type GraphQL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will name the interface the same as its C# type name."),(0,r.kt)("li",{parentName:"ul"},"Will include all properties that have a getter."),(0,r.kt)("li",{parentName:"ul"},"Will ignore any methods.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="IPastry.cs"',title:'"IPastry.cs"'},"public interface IPastry\n{\n    int Id { get; set; }\n    string Name { get; set; }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="IPastry Type Definition"',title:'"IPastry',Type:!0,'Definition"':!0},"interface IPastry {\n  id: Int!\n  name: String\n}\n")),(0,r.kt)("h2",{id:"object-graph-types-must-be-known"},"Object Graph Types Must be Known"),(0,r.kt)("p",null,"The section on working with interfaces with ",(0,r.kt)("a",{parentName:"p",href:"../controllers/actions#working-with-interfaces"},"action methods")," provides a great discussion on proper usage but its worth pointing out here as well."),(0,r.kt)("p",null,"You must let GraphQL know of the possible object types you intend to return as the interface. If your action method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"IPastry")," and you return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Donut"),", but didn't let GraphQL know about the ",(0,r.kt)("inlineCode",{parentName:"p"},"Donut")," class, it won't be able to continue to resolve the requested fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="BakeryController.cs"',title:'"BakeryController.cs"'},"public class BakeryController : GraphController\n{\n    // highlight-next-line\n    [QueryRoot(typeof(Donut), typeof(Cake))]\n    public IPastry SearchPastries(string name)\n    {/* ... */}\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Sample Query"',title:'"Sample','Query"':!0},'query {\n    searchPastries(name: "chocolate*") {\n        id\n        name\n\n        ...on Donut {\n            isFilled\n        }\n\n        ...on Cake {\n            icingFlavor\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"use-it-to-include-it"},"Use It To Include It"),(0,r.kt)("p",null,"When GraphQL starts building a schema it will read the interfaces attached to any model classes it finds and stage them in a special holding area. However, unless an interface is actually referenced as a return value of a field, be it from an action method or a model property, it won't be added to your schema and won't be visible to introspection queries. That is to say that when you register ",(0,r.kt)("inlineCode",{parentName:"p"},"Donut"),", unless you specifically return ",(0,r.kt)("inlineCode",{parentName:"p"},"IPastry")," from your application, GraphQL will leave it out of the schema. This goes a long ways in preventing clutter in your schema with all the interfaces you may declare internally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="IPastry is never used"',title:'"IPastry',is:!0,never:!0,'used"':!0},"public class BakeryController : GraphController\n{\n    [QueryRoot]\n    public Donut FindDonut(string name)\n    {/* ... */}\n}\n\npublic class Donut : IPastry\n{/*...*/}\n\n// IPastry will be excluded from the schema since\n// its not referenced in any controllers\npublic interface IPastry\n{/*...*/}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Type Definitions"',title:'"Type','Definitions"':!0},"# Donut is published on the schema\n# but IPastry is not included\ntype Donut {\n  id: Int!\n  name: String\n  ...\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"}," Use ",(0,r.kt)("inlineCode",{parentName:"p"},".AddGraphType<IPastry>()")," during ",(0,r.kt)("a",{parentName:"p",href:"../reference/schema-configuration"},"schema configuration")," to publish the interface even if its never used in the graph.")),(0,r.kt)("h2",{id:"interfaces-are-not-input-objects"},"Interfaces are not Input Objects"),(0,r.kt)("p",null,'The GraphQL specification states that "interfaces are never valid inputs" [Spec \xa7 ',(0,r.kt)("a",{parentName:"p",href:"https://graphql.github.io/graphql-spec/October2021/#sec-Interfaces"},"3.7"),"]. As a result the runtime will reject any attempts to use an interface as an action method parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Interfaces cannot be used as input arguments"',title:'"Interfaces',cannot:!0,be:!0,used:!0,as:!0,input:!0,'arguments"':!0},"public class BakeryController : GraphController\n{\n    // ERROR!\n    // A GraphTypeDeclarationException will be thrown\n    [Mutation]\n    // highlight-next-line\n    public Donut AddNewDonut(IPastry newPastry)\n    {/* ... */}\n}\n\npublic class Donut : IPastry\n{/*...*/}\n")),(0,r.kt)("p",null,"An exception to this is with ",(0,r.kt)("a",{parentName:"p",href:"../controllers/type-extensions"},"type extensions"),". A type extension is supplied the object reference returned from the parent-field to assist in child-field resolution and this can be an interface reference, specifically the interface returned by the parent field. Since this method parameter is not exposed on the object graph there is no violation of the specification."),(0,r.kt)("h2",{id:"interface-names"},"Interface Names"),(0,r.kt)("p",null,"Like with other graph types use the ",(0,r.kt)("inlineCode",{parentName:"p"},"[GraphType]")," attribute to indicate a custom name for the interface in the object graph."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Interface Custom Name"',title:'"Interface',Custom:!0,'Name"':!0},'// highlight-next-line\n[GraphType("Pastry")]\npublic interface IPastry\n{\n    int Id { get; set; }\n    string Name { get; set; }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Graph Type Definition"',title:'"Graph',Type:!0,'Definition"':!0},"interface Pastry {\n  id: Int!\n  name: String\n}\n")),(0,r.kt)("h2",{id:"inheritance"},"Inheritance"),(0,r.kt)("p",null,"Interface inheritance in GraphQL works differently than it does in .NET.  Take for example, these two interfaces:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C# Interface Inheritance"',title:'"C#',Interface:!0,'Inheritance"':!0},"public interface IPastry\n{\n    int Id { get; set; }\n    string Name { get; set; }\n}\n\npublic interface IDonut : IPastry\n{\n    string Flavor{ get; set; }\n}\n")),(0,r.kt)("p",null,"In .NET ",(0,r.kt)("inlineCode",{parentName:"p"},"IDonut"),", by virtue of implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"IPastry"),', grants "access" to the ',(0,r.kt)("inlineCode",{parentName:"p"},"Id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," fields for any object that implements IDonut since said object must implement both interfaces to compile correctly. This is not the case in GraphQL. The library does not attempt to walk or parse any interfaces that are not part of the schema and an interface is added to the schema only if its expliclty added at startup or indicated as a return type from one of your controller methods or object fields. This allows you to safely manage your internal interfaces like ",(0,r.kt)("inlineCode",{parentName:"p"},"IList<T>")," without worry that GraphQL will see them and try parse them. "),(0,r.kt)("p",null,"This can create some less than ideal scenarios. For instance, if only ",(0,r.kt)("inlineCode",{parentName:"p"},"IDonut")," is part of the schema, the fields for ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," won't be seen nor made available in the graph, even though its understandable that you'd want them to be."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup Code"',title:'"Startup','Code"':!0},"services.AddGraphQL(o => \n{\n  // highlight-next-line\n   o.AddGraphType<IDonut>();\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="IDonut Type Definition"',title:'"IDonut',Type:!0,'Definition"':!0},"# IDonut does NOT contain name or id\n# because IPastry is not part of the schema\ninterface IDonut {\n  flavor: String\n}\n")),(0,r.kt)("p",null,"However GraphQL does support interface inheritance. As long as both interfaces are included as part of the schema then the fields will wire up as you'd expect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup Code"',title:'"Startup','Code"':!0},"services.AddGraphQL(o => \n{\n  // highlight-start\n  o.AddGraphType<IPastry>();  \n  o.AddGraphType<IDonut>();\n  // highlight-end\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Type Definitions"',title:'"Type','Definitions"':!0},"interface IPastry {  \n  id: Int!\n  name: String\n}\n\ninterface IDonut implements IPastry {  \n  id: Int!\n  name: String\n  flavor: String\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"GraphQL will NOT attempt to include fields from inherited interfaces unless they are part of the schema.")))}u.isMDXComponent=!0}}]);