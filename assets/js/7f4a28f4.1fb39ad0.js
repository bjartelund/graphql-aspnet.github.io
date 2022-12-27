"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={id:"field-paths",title:"Field Paths",sidebar_label:"Field Paths",sidebar_position:2,hide_title:!0},o=void 0,l={unversionedId:"controllers/field-paths",id:"controllers/field-paths",title:"Field Paths",description:"What is a Field Path?",source:"@site/docs/controllers/field-paths.md",sourceDirName:"controllers",slug:"/controllers/field-paths",permalink:"/docs/controllers/field-paths",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"field-paths",title:"Field Paths",sidebar_label:"Field Paths",sidebar_position:2,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Model State",permalink:"/docs/controllers/model-state"},next:{title:"Authorization",permalink:"/docs/controllers/authorization"}},s={},u=[{value:"What is a Field Path?",id:"what-is-a-field-path",level:2},{value:"Declaring Field Paths",id:"declaring-field-paths",level:2},{value:"Actions Must Have a Unique Path",id:"actions-must-have-a-unique-path",level:2},{value:"Declare Explicit Names",id:"declare-explicit-names",level:3},{value:"Change The Hierarchy",id:"change-the-hierarchy",level:3},{value:"Combine the Fields",id:"combine-the-fields",level:3},{value:"Field Path Names",id:"field-path-names",level:2},{value:"Schema Naming Formats",id:"schema-naming-formats",level:3}],p={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-a-field-path"},"What is a Field Path?"),(0,r.kt)("p",null," GraphQL is statically typed. Each field in a query must always resolve to a single graph type known to the schema. This can make query organization rather tedious and adds A LOT of boilerplate code if you wanted to introduce even the slightest complexity to your graph."),(0,r.kt)("p",null,"Let's think about this query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Sample Query"',title:'"Sample','Query"':!0},"query {\n    groceryStore {\n        bakery {\n            pastries {\n                    donut(id: 15){\n                        name\n                        flavor\n                    }\n                }\n        }\n        deli {\n            meats {\n                beef (id: 23) {\n                    name\n                    cut\n                }\n            }\n        }    \n    }\n}\n")),(0,r.kt)("p",null,"Knowing what we know about GraphQL's requirements, we need to create types for the grocery store, the bakery, pastries, a donut, the deli counter, meats, beef etc. Its a lot of setup for what basically boils down to two methods to retrieve a donut and a cut of beef by their respective ids."),(0,r.kt)("p",null,"Using a templating pattern similar to what we do with REST queries we can create rich graphs with very little boiler plate. Adding a new arm to your graph is as simple as defining a path to it in a controller."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Sample Controller"',title:'"Sample','Controller"':!0},'// highlight-next-line\n[GraphRoute("groceryStore")]\npublic class GroceryStoreController : GraphController\n{\n    // highlight-next-line\n    [Query("bakery/pastries/donut")]\n    public Donut RetrieveDonut(int id)\n    {/* ...*/}\n\n    // highlight-next-line\n    [Query("deli/meats/beef")]\n    public Meat RetrieveCutOfBeef(int id)\n    {/* ...*/}\n}\n')),(0,r.kt)("p",null,"Internally, for each encountered path segment (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"bakery"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"meats"),"), GraphQL generates a ",(0,r.kt)("inlineCode",{parentName:"p"},"intermediate graph type")," to fulfill resolver requests for you and act as a pass through to your real code. It does this in concert with your real code and performs a lot of checks at start up to ensure that the combination of your real types as well as virutal types can be put together to form a functional graph.  If a collision occurs the server will fail to start."),(0,r.kt)("admonition",{title:"Intermediate Type Names",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You may notice some object types in your schema named as ",(0,r.kt)("inlineCode",{parentName:"p"},"Query_Bakery"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Query_Deli")," these are the virtual types generated at runtime to create a valid schema from your path segments.")),(0,r.kt)("h2",{id:"declaring-field-paths"},"Declaring Field Paths"),(0,r.kt)("p",null,"Declaring fields works just like it does with a REST query.  You can nest fields as deep as you want and spread them across any number of controllers in order to create a rich organizational hierarchy to your data. This is best explained by code, take a look at these two controllers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="BakeryController.cs"',title:'"BakeryController.cs"'},'// highlight-next-line\n[GraphRoute("groceryStore/bakery")]\npublic class BakeryController : GraphController\n{\n    // highlight-next-line\n    [Query("pastries/search")]\n    public IEnumerable<IPastry> SearchPastries(string nameLike)\n    {/* ... */}\n\n    // highlight-next-line\n    [Query("pastries/recipe")]\n    public Task<Recipe> RetrieveRecipe(int id)\n    {/* ... */}\n\n    // highlight-next-line\n    [Query("breadCounter/orders")]\n    public IEnumerable<BreadOrder> FindOrders(int customerId)\n    {/* ... */}\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="PharmacyController.cs"',title:'"PharmacyController.cs"'},'// highlight-next-line\n[GraphRoute("groceryStore/pharmacy")]\npublic class PharmacyController : GraphController\n{\n    // highlight-next-line\n    [Query("employees/search")]\n    public IPastry SearchEmployees(string nameLike)\n    {/* ... */}\n\n    // highlight-next-line\n    [QueryRoot("pharmacyHours")]\n    public HoursOfOperation RetrievePharmacyHours(DayOfTheWeek day)\n    {/* ... */}\n\n    // highlight-next-line\n    [Query("orders")]\n    public IEnumerable<Prescription> FindOrders(int customerId)\n    {/* ... */}\n}\n')),(0,r.kt)("p",null,"And this single query we can perform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Sample Query"',title:'"Sample','Query"':!0},'query SearchGroceryStore {\n    groceryStore {\n        bakery {\n            pastries {\n                search(nameLike: "chocolate"){\n                    name\n                    type\n                }\n                recipe(id: 15) {\n                    name\n                    ingredients {\n                        name\n                    }\n                }\n            }\n        }\n        pharmacy {\n            orders(customerId: 45123){\n                dayOrdered\n                type\n                doctorsName\n            }\n        }\n    }\n    pharmacyHours(day: MONDAY){\n        openAt\n        closeAt\n    }\n}\n')),(0,r.kt)("p",null,"With REST, this is probably 4 separate requests or one super contrived request but with GraphQL and a carefully thought out set of field paths we can model our data hierarchy quickly and without over complicating the code. There is no more code in this example than would be required by a REST API; we've just changed how its interpreted at runtime."),(0,r.kt)("h2",{id:"actions-must-have-a-unique-path"},"Actions Must Have a Unique Path"),(0,r.kt)("p",null,"Each field in your object graph must uniquely map to one method or property getter; commonly referred to as its resolver. We can't declare a field twice."),(0,r.kt)("p",null,"Take this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Overloaded Methods"',title:'"Overloaded','Methods"':!0},"[GraphRoute(\"bakery\")]\npublic class BakeryController : GraphController\n{\n    // Both Methods represent the same 'orderDonuts' field on the object graph\n\n    [Mutation]\n    // highlight-next-line\n    public BoxOfDonuts OrderDonuts(int quantity){/*...*/}\n\n    [Mutation]\n    // highlight-next-line\n    public BoxOfDonuts OrderDonuts(string type, int quantity){/*...*/}\n}\n")),(0,r.kt)("p",null,"From a GraphQL perspective this equivilant to trying to define a ",(0,r.kt)("inlineCode",{parentName:"p"},"bakery")," type with two fields named ",(0,r.kt)("inlineCode",{parentName:"p"},"orderDonuts"),". Since both methods map to a field path of ",(0,r.kt)("inlineCode",{parentName:"p"},"[mutation]/bakery/orderDonuts")," this would cause a ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphTypeDeclarationException")," to be thrown when your application starts. "),(0,r.kt)("p",null,"With Web API, the ASP.NET runtime could inspect any combinations of parameters passed on the query string or the POST body to work out which overload to call. You might be thinking, why can't GraphQL inspect the passed input arguments and make the same determination?"),(0,r.kt)("p",null,"Putting aside that it ",(0,r.kt)("a",{parentName:"p",href:"http://spec.graphql.org/October2021/#sec-Objects"},"violates the specification"),", in some cases it probably could. But looking at this example we run into an issue:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[GraphRoute(\"bakery\")]\npublic class BakeryController : GraphController\n{\n    // Both Methods represent the same 'orderDonuts' field on the object graph\n    [Mutation]\n    public Manager OrderDonuts(int quantity, string type){/*...*/}\n\n    [Mutation]\n    public Manager OrderDonuts(string type, int quantity){/*...*/}\n}\n")),(0,r.kt)("p",null,"We'd pair these methods with different URL fragments and could work out which method to call in a REST request based on the full structure of the URL."),(0,r.kt)("p",null,"However, GraphQL states that input arguments can be passed in any order [Spec \xa7 ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.github.io/graphql-spec/October2021/#sec-Language.Arguments"},"2.6"),"]. By definition there is not enough information in the query syntax language to decide which overload to invoke. To combat the issue, the runtime will reject any field that it can't uniquely identify."),(0,r.kt)("p",null,"No problem through, there are a number of ways fix the conflict."),(0,r.kt)("h3",{id:"declare-explicit-names"},"Declare Explicit Names"),(0,r.kt)("p",null,"You can declare explicit names for each of your methods. Not only does this resolve the method overloading conflict but should an errant refactor of your code occur, your graph fields won't magically be renamed to their new method names and break your front-end."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Use Explicit Field Names"',title:'"Use',Explicit:!0,Field:!0,'Names"':!0},'[GraphRoute("bakery")]\npublic class BakeryController : GraphController\n{\n    // GraphQL treats these fields differently!\n    \n    // highlight-next-line\n    [Mutation("orderDonutsByQuantity")]\n    public Manager OrderDonuts(int quantity){/*...*/}\n\n    // highlight-next-line\n    [Mutation("orderDonutsByType")]\n    public Manager OrderDonuts(string type, int quantity){/*...*/}\n}\n')),(0,r.kt)("p",null,"But this can feel a bit awkward in some situations so instead..."),(0,r.kt)("h3",{id:"change-the-hierarchy"},"Change The Hierarchy"),(0,r.kt)("p",null,"Another alternative is to change where in the object graph the field sits. Here we've moved one field to the root mutation type and left the other under the controller's own ",(0,r.kt)("inlineCode",{parentName:"p"},"bakery")," field. This can be a good strategy if you have one primary way of interacting with your data and a few auxillary methods such as a quick dozen donuts at the drive thru window or going into the shop and selecting which ones you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Change the Field Path"',title:'"Change',the:!0,Field:!0,'Path"':!0},'[GraphRoute("bakery")]\npublic class BakeryController : GraphController\n{    \n    // highlight-next-line\n    [MutationRoot("orderDonuts")]\n    public IEnumerable<Donut> OrderDonuts(int count)\n    {/*...*/}\n\n    // highlight-next-line\n    [Mutation("orderDonuts")]\n    public IEnumerable<Donut> OrderDonuts(\n        string type,\n        int count)\n    {/*...*/}\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Sample Queries"',title:'"Sample','Queries"':!0},'mutation {\n    orderDonuts(count: 12){\n        name\n        flavor\n    }\n}\n\nmutation {\n    bakery {\n        orderDonuts(\n                type: "Chocolate"\n                count: 3){\n            name\n            flavor\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"combine-the-fields"},"Combine the Fields"),(0,r.kt)("p",null,"Lastly, we can make use of input objects with optional fields and combine parameters into a more robust method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Use an Input Object"',title:'"Use',an:!0,Input:!0,'Object"':!0},'[GraphRoute("bakery")]\npublic class BakeryController : GraphController\n{\n    [Mutation("orderDonuts")]    \n    // highlight-next-line\n    public IEnumerable<Donut> OrderDonuts(DonutOrderModel order)\n    {/*...*/}\n}\n\npublic class DonutOrderModel\n{\n    public int? Quantity { get; set; }\n    public string Type { get; set; }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Sample Queries"',title:'"Sample','Queries"':!0},'mutation byQuantity {\n    bakery{\n        orderDonuts (order: {quantity: 12}){\n            id\n            type\n        }\n    }\n}\n\nmutation byType {\n    bakery{\n        orderDonuts (order: {type: "Chocolate" quantity: 12}){\n            id\n            type\n        }\n    }\n}\n')),(0,r.kt)("p",null,"When you start thinking about large object graphs, 100s of controllers and 100s of types, you have to put some thought in to how you organize your data. Coming up with an intuitive structure to your hierarchy is going to be dependent on your audience and use cases. There is no one-size fits all approach, but with the ability to move graph fields by updating one string, its trivial to build as you iterate."),(0,r.kt)("h2",{id:"field-path-names"},"Field Path Names"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," Each segment of a virtual field path must individually conform to the required naming standards for fields and graph type names.")),(0,r.kt)("p",null,"In reality this primarily means don't start your fields with a double underscore, ",(0,r.kt)("inlineCode",{parentName:"p"},"__"),", as thats reserved by the introspection system. The complete regex is available in the source code at ",(0,r.kt)("inlineCode",{parentName:"p"},"Constants.RegExPatterns.NameRegex"),"."),(0,r.kt)("p",null,"These are some valid field paths:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Valid Field Fragments"',title:'"Valid',Field:!0,'Fragments"':!0},'[Mutation("store/bakery/deliCounter/sandwiches/order")]\n[Mutation("path1/path2/path3/path4/")]\n[Mutation("path1/path1/path1/path1/path1/path1/path1/path1/path1")]\n')),(0,r.kt)("p",null,"But if even one segment of the path is invalid GraphQL will reject it completely."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Invalid Field Fragments"',title:'"Invalid',Field:!0,'Fragments"':!0},'[Query("store/__bakery")] // can\'t start with "__"\n[Query("store/\u03b2akery")]  // unicode characters are not allowed\n[Query("path1/path2/path 33")]  // spaces are not allowed\n')),(0,r.kt)("h3",{id:"schema-naming-formats"},"Schema Naming Formats"),(0,r.kt)("p",null,"At runtime, when your schema is generated, the naming requirements it defines will be enforced for each path segment. By default this means ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCasing")," on field names."),(0,r.kt)("p",null,"If you declare:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[Mutation("Store/Bakery/DeliCounter")]\n')),(0,r.kt)("p",null,"You would still query with :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"mutation {\n    store {\n        bakery {\n            deliCounter {\n                ...\n\n        }\n    }\n}\n")),(0,r.kt)("p",null,"You can alter the naming formats for fields, enum values and graph types using the declaration options on your ",(0,r.kt)("a",{parentName:"p",href:"../reference/schema-configuration"},"schema configuration"),"."))}h.isMDXComponent=!0}}]);