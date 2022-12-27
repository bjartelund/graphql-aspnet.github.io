"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9404],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7598:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));t(2389);const o={id:"code-examples",title:"Code Examples",sidebar_label:"Code Examples",sidebar_position:2},i=void 0,l={unversionedId:"quick/code-examples",id:"quick/code-examples",title:"Code Examples",description:"This page shows a quick introduction to some common scenarios and the C# code to support.",source:"@site/docs/quick/code-examples.md",sourceDirName:"quick",slug:"/quick/code-examples",permalink:"/docs/quick/code-examples",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"code-examples",title:"Code Examples",sidebar_label:"Code Examples",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/quick/overview"},next:{title:"What is GraphQL?",permalink:"/docs/introduction/what-is-graphql"}},s={},p=[{value:"A Basic Controller",id:"a-basic-controller",level:2},{value:"Using an Interface",id:"using-an-interface",level:2},{value:"No Boilerplate Field Paths",id:"no-boilerplate-field-paths",level:2},{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Notes on Authorization",id:"notes-on-authorization",level:4},{value:"Mutations &amp; Model State",id:"mutations--model-state",level:2},{value:"Action Results",id:"action-results",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page shows a quick introduction to some common scenarios and the C# code to support. "),(0,a.kt)("h2",{id:"a-basic-controller"},"A Basic Controller"),(0,a.kt)("p",null,"A simple controller to return data based on the input of an ",(0,a.kt)("inlineCode",{parentName:"p"},"Enum"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="HeroController.cs"',title:'"HeroController.cs"'},'public class HeroController : GraphController\n{\n    [QueryRoot]\n    public Human Hero(Episode episode)\n    {\n        if(episode == Episode.Empire)\n        {\n            return new Human()\n            {\n                Id = 1000,\n                Name = "Han Solo",\n                HomePlanet = "Corellia",\n            }\n        }\n        else\n        {\n            return new Human()\n            {\n                Id = 1001,\n                Name = "Luke SkyWalker",\n                HomePlanet = "Tatooine",\n            }\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="GraphQL Query"',title:'"GraphQL','Query"':!0},"query {\n    hero(episode: EMPIRE) {\n        name\n        homePlanet\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JSON Result"',title:'"JSON','Result"':!0},'{\n    "data" : {\n        "hero": {\n            "name" : "Han Solo",\n            "homePlanet" : "Corellia"\n        }\n    }\n}\n')),(0,a.kt)("admonition",{title:"Did you notice?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In the query the hero field is ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCased")," but in C# the method is ",(0,a.kt)("inlineCode",{parentName:"p"},"ProperCased"),"? GraphQL ASP.NET automatically translates your names appropriately to standard GraphQL conventions. The same goes for your graph type names, enum values etc."),(0,a.kt)("p",{parentName:"admonition"},"You can implement your own ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphNameFormatter")," and alter the name formats for each of your registered schemas.")),(0,a.kt)("h2",{id:"using-an-interface"},"Using an Interface"),(0,a.kt)("p",null,"If your models share a common interface just return it from a controller action and GraphQL ASP.NET takes care of the rest. You can always use a fragment to specify fields of specific object types."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="HeroController.cs"',title:'"HeroController.cs"'},'public class HeroController : GraphController\n{\n    [QueryRoot(typeof(Droid), typeof(Human))]\n    public ICharacter Hero(Episode episode)\n    {\n        if(episode == Episode.Empire)\n        {\n            return new Human()\n            {\n                Id = 1000,\n                Name = "Han Solo",\n                HomePlanet = "Corellia",\n            }\n        }\n        else\n        {\n            return new Droid()\n            {\n                Id = 2000,\n                Name = "R2R2",\n                Type = DroidType.AstroMech\n            }\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="GraphQL Query"',title:'"GraphQL','Query"':!0},"query {\n    hero(episode: JEDI) {\n        id\n        name\n\n        ... on Human {\n            homePlanet\n        }\n\n        ... on Droid {\n            type\n        }\n    }\n}\n")),(0,a.kt)("h2",{id:"no-boilerplate-field-paths"},"No Boilerplate Field Paths"),(0,a.kt)("p",null,"We've used ",(0,a.kt)("inlineCode",{parentName:"p"},"[QueryRoot]")," so far to force a controller action to be a root field on the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," type. But we can use an approximation of Web API's url templates to create any combination of nested fields needed. When you have 50 controllers with 20-40 actions each, organizing your object hierarchy becomes trivial."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="RebelAllianceController.cs"',title:'"RebelAllianceController.cs"'},'[GraphRoute("rebels")]\npublic class RebelAllianceController : GraphController\n{\n    [Query("directory/hero")]\n    public Human RetrieveHero(Episode episode)\n    {\n        // Wedge is the true hero\n        return new Human()\n        {\n            Id = 1003,\n            Name = "Wedge Antilles",\n            HomePlanet = "Corellia",\n        };\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Sample Query"',title:'"Sample','Query"':!0},"query {\n    rebels {\n        directory {\n            hero(episode: EMPIRE) {\n                name\n                homePlanet\n            }\n        }\n    }\n}\n")),(0,a.kt)("h2",{id:"dependency-injection"},"Dependency Injection"),(0,a.kt)("p",null,"At runtime,  GraphQL invokes your graph controllers and injected services with the same dependency scope as the original HTTP Request. Add a service to a controller's constructor and it will be automatically resolved with its configured scope."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="PersonsController.cs"',title:'"PersonsController.cs"'},'public class PersonsController : GraphController\n{\n    private IPersonService _personService;\n    public PersonsController(IPersonService service)\n    {\n        _personService = service;\n    }\n\n    [QueryRoot("person")]\n    public async Task<Human> RetrievePerson(int id)\n    {\n        return await _personService.RetrievePerson(id);\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Query"',title:'"Query"'},"query {\n    person(id: 1000) {\n        id\n        name\n        homePlanet\n    }\n}\n")),(0,a.kt)("admonition",{title:"Did You Notice? ",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We switched to an asynchronous method with ",(0,a.kt)("inlineCode",{parentName:"p"},"Task<Human>"),". GraphQL ASP.NET follows your lead and will execute your actions asynchronously or synchronously as needed.")),(0,a.kt)("h2",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"[Authorize]")," attribute and you're done. GraphQL ASP.NET uses the same authorization pipeline as your application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="PersonsController.cs"',title:'"PersonsController.cs"'},'public class PersonsController : GraphController\n{\n    private IPersonService _personService;\n    public PersonsController(IPersonService service)\n    {\n        _personService = service;\n    }\n\n    [Authorize]\n    [QueryRoot("self")]\n    public async Task<Employee> RetrievePerson()\n    {\n        return await _personService.RetrievePerson(this.User.Name);\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Sample Query"',title:'"Sample','Query"':!0},"query {\n    self {\n        id\n        name\n        title\n    }\n}\n")),(0,a.kt)("h4",{id:"notes-on-authorization"},"Notes on Authorization"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your controller actions have full access to the same ",(0,a.kt)("inlineCode",{parentName:"li"},"ClaimsPrincipal")," that you get with ",(0,a.kt)("inlineCode",{parentName:"li"},"this.User")," on an web api controller. In fact, its the same object reference."),(0,a.kt)("li",{parentName:"ul"},'Out of the box, the library performs authorization on a "per field" basis. This includes POCO object properties! If you have a piece of sensitive data attached to a property, say Birthday, on your Person model, then implement your own ',(0,a.kt)("inlineCode",{parentName:"li"},"IAuthorizeData")," attribute and apply it to the property. Unauthorized user's won't be able to query for that field, even if they can access the controller that produced the object its attached or every other field on the object."),(0,a.kt)("li",{parentName:"ul"},"GraphQL obeys layered authorization requirements as well. Place an authorization attribute at the controller level and it'll be checked before any method level requirements.")),(0,a.kt)("h2",{id:"mutations--model-state"},"Mutations & Model State"),(0,a.kt)("p",null,"GraphQL ASP.NET will automatically enforce the query specification rules for you, but that doesn't help for business-level requirements like string length or integer ranges. For that, it uses the familiar goodness of Validation Attributes (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"[StringLength]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"[Range]")," etc.)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="PersonsController.cs"',title:'"PersonsController.cs"'},'public class PersonsController : GraphController\n{\n    /* constructor hidden for brevity */\n\n    [MutationRoot("joinTheResistance")]\n    public async Task<Human> CreatePerson(Human model)\n    {\n        // ***************************\n        // Check if the model passed validation\n        // requirements before using it\n        // ***************************\n        if(!this.ModelState.IsValid)\n            return null;\n\n        return await _service.CreatePerson(model);\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Human.cs"',title:'"Human.cs"'},"public class Human\n{\n    public int? Id{ get; set; }\n\n    [StringLength(35)]\n    public string Name { get; set; }\n\n    public string HomePlanet { get; set; }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Sample Query"',title:'"Sample','Query"':!0},'mutation {\n    joinTheResistance(\n        newPerson: {\n            name: "Lando Calrissian"\n            homePlanet: "Bespin" }) {\n        id\n        name\n        homePlanet\n    }\n}\n')),(0,a.kt)("admonition",{title:"Did You Notice?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We used ",(0,a.kt)("inlineCode",{parentName:"p"},"Human")," as an input argument and as the returned data object. GraphQL ASP.NET will automatically generate the appropriate graph types for ",(0,a.kt)("inlineCode",{parentName:"p"},"OBJECT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"INPUT_OBJECT")," and add them to your schema when needed.")),(0,a.kt)("h2",{id:"action-results"},"Action Results"),(0,a.kt)("p",null,"Just as Web API makes use of ",(0,a.kt)("inlineCode",{parentName:"p"},"IActionResult")," to perform post processing on the result of a controller method, GraphQL ASP.NET makes use of ",(0,a.kt)("inlineCode",{parentName:"p"},"IGraphActionResult"),"."),(0,a.kt)("p",null,"Reusing the previous example, here we make use of ",(0,a.kt)("inlineCode",{parentName:"p"},"this.BadRequest()")," to automatically generate an appropriate error message in the response when model validation fails. Field origin information including the path array and line/column number of the original query are wired up automatically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// C# Controller\npublic class PersonsController : GraphController\n{\n    [MutationRoot("joinTheResistance")]\n    public async IGraphActionResult CreatePerson(Human model)\n    {\n        // ***************************\n        // Check if the model passes validation\n        // requirements before using it\n        // ***************************\n        if(!this.ModelState.IsValid)\n            return this.BadRequest(this.ModelState);\n\n        var result = await _service.CreatePerson(model);\n        return result != null\n            ? this.Ok(result)\n            : this.Error("Woops Something broke");\n    }\n}\n\npublic class Human\n{\n    public int? Id{ get; set; }\n\n    [StringLength(35)]\n    public string Name { get; set; }\n\n    public string HomePlanet { get; set; }\n}\n')),(0,a.kt)("admonition",{title:"GraphQL is not Rest",type:"note"},(0,a.kt)("p",{parentName:"admonition"}," Unlike WebAPI, ",(0,a.kt)("inlineCode",{parentName:"p"},"BadRequest()"),' doesn\'t generate a HTTP Status 400 error for the request. If there are multiple controller methods being resolved GraphQL can still generate a partial response and render data for other parts of the query. Most "error" related action results add a standard error message to the result with different reason codes.')))}c.isMDXComponent=!0}}]);