"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={id:"graph-action-results",title:"Action Results",sidebar_label:"Action Results",sidebar_position:4},o=void 0,l={unversionedId:"advanced/graph-action-results",id:"advanced/graph-action-results",title:"Action Results",description:"What is an Action Result?",source:"@site/docs/advanced/graph-action-results.md",sourceDirName:"advanced",slug:"/advanced/graph-action-results",permalink:"/docs/advanced/graph-action-results",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"graph-action-results",title:"Action Results",sidebar_label:"Action Results",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom Scalars",permalink:"/docs/advanced/custom-scalars"},next:{title:"Multi-Schema Support",permalink:"/docs/advanced/multi-schema-support"}},s={},u=[{value:"What is an Action Result?",id:"what-is-an-action-result",level:2},{value:"Controller Action Results",id:"controller-action-results",level:2},{value:"Directive Action Results",id:"directive-action-results",level:3},{value:"Using an IGraphActionResult",id:"using-an-igraphactionresult",level:2},{value:"Custom Graph Action Results",id:"custom-graph-action-results",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-an-action-result"},"What is an Action Result?"),(0,a.kt)("p",null,"In ASP.NET you may do things like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Return an Action Result"',title:'"Return',an:!0,Action:!0,'Result"':!0},'public class BakeryController : Controller\n{\n    [HttpGet("donuts/{id}")]\n    public IActionResult RetrieveDonut(int id)\n    {\n        Donut donut = null;\n        // ...\n\n        // return the donut and indicate success\n        return this.Ok(donut);\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Return an Object"',title:'"Return',an:!0,'Object"':!0},'public class BakeryController : Controller\n{\n    [HttpGet("donuts/{id}")]\n    public Donut RetrieveDonut(int id)\n    {\n        Donut donut = null;\n        // ...\n\n        // return the donut directly!\n        return donut;\n    }\n}\n')),(0,a.kt)("p",null,"You can either return the data itself or some alternate ",(0,a.kt)("inlineCode",{parentName:"p"},"IActionResult")," to tell ASP.NET how to render a response."),(0,a.kt)("p",null,"Some common ASP.NET action results:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.Ok()")," : Everything worked fine, return status 200."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.NotFound()")," : The item doesn't exist, return status 404."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.File()"),": Return status 200 and stream the file to the client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.View()"),": Render a razor view and send the HTML to the client.")),(0,a.kt)("p",null,"This works the same way in GraphQL ASP.NET. The available actions are slightly different (GraphQL won't stream files) but the usage is the same. You can even write your own action results."),(0,a.kt)("h2",{id:"controller-action-results"},"Controller Action Results"),(0,a.kt)("p",null,"Instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"IActionResult")," we use ",(0,a.kt)("inlineCode",{parentName:"p"},"IGraphActionResult")," from a controller action method. Both ",(0,a.kt)("a",{parentName:"p",href:"./directives"},"directives")," and controller ",(0,a.kt)("a",{parentName:"p",href:"../controllers/actions"},"action methods")," can return action results."),(0,a.kt)("p",null,"Built in Controller Action Methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.Ok(fieldValue)")," : Return ",(0,a.kt)("em",{parentName:"li"},"fieldValue")," as the resolved value of the field and indicate to the runtime that everything completed successfully."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.Error(message)"),": Indicates a problem. Child fields are not processed and an error message with the given text and error code is added to the response payload."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.StartBatch()")," : Initiates the start a of a new batch. See ",(0,a.kt)("a",{parentName:"li",href:"/docs/controllers/batch-operations"},"batch operations")," for details."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.Unauthorized()"),": Indicate the user is not authorized to request the field. A message telling them as such will be added to the result and no child fields will be processed. The field will be returned a ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," value automatically. This is sometimes necessary for data-level validation that can't be readily determined from an ",(0,a.kt)("inlineCode",{parentName:"li"},"[Authorize]")," attribute or query level validation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.BadRequest()"),": Commonly used in conjunction with ",(0,a.kt)("inlineCode",{parentName:"li"},"this.ModelState"),". This result indicates the data supplied to the method is not valid for the operation. If given the model state collection an error for each validation error is rendered."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.InternalServerError()"),": Indicates an unintended error, such as an exception occurred. The supplied message will be added to the response and no child fields will be resolved.")),(0,a.kt)("h3",{id:"directive-action-results"},"Directive Action Results"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./directives"},"Directives")," have two built in Action Results:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.Ok()"),": Indicates that the directive completed its expected operation successfully and processing can continue."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.Cancel()"),": Indicates that the directive did NOT complete its operation successfully. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If this is a type system directive, the schema will fail to complete and the server will not start."),(0,a.kt)("li",{parentName:"ul"},"If this is an execution directive, the query will be abandoned and the user will receive an error message.")))),(0,a.kt)("h2",{id:"using-an-igraphactionresult"},"Using an IGraphActionResult"),(0,a.kt)("p",null,"Using a graph action result is straight forward. Use it like you would a regular action result with a REST query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class BakeryController : GraphController\n{\n    [Query("donut", typeof(Donut))]\n    public IGraphActionResult RetrieveDonut(int id)\n    {\n        if(id < 0)\n            // highlight-next-line\n            return this.Error("Invalid Id");\n\n        Donut donut = new Donut(id);\n        // highlight-next-line\n        return this.Ok(donut);\n    }\n}\n')),(0,a.kt)("p",null,"Notice, however; that we had to declare the return type of the donut field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"[Query]")," attribute. This is because the actual return type is hidden by the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"IGraphActionResult"),".  This is the trade off to the extra functionality provided by action results. Since GraphQL is a statically typed language all field return types must be known at startup. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Using a graph action result requires you to declare the return type of your action method elsewhere, usually in the ",(0,a.kt)("inlineCode",{parentName:"p"},"[Query]")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"[Mutation]")," attribute.")),(0,a.kt)("h2",{id:"custom-graph-action-results"},"Custom Graph Action Results"),(0,a.kt)("p",null,"You can add your own custom action results. This can be particularly useful on larger teams where you want a uniform field response or error message contents for a given situation."),(0,a.kt)("p",null,"To create a custom result, implement ",(0,a.kt)("inlineCode",{parentName:"p"},"IGraphActionResult"),", which defines a single method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="IGraphActionResult.cs"',title:'"IGraphActionResult.cs"'},"public interface IGraphActionResult\n{\n    Task Complete(ResolutionContext context);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ResolutionContext")," is the data context used to resolve the field or directive. For controller actions this can be cast to ",(0,a.kt)("inlineCode",{parentName:"p"},"FieldResolutionContext")," to obtain access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," property. Setting this property sets the resolved value for the field."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"FieldResolutionContext")," contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," property which indicates the final resolved value for the field.")),(0,a.kt)("p",null,"Looking at the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnauthorizedGraphActionResult")," is a great example of how to implement your own:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="UnauthorizedGraphActionResult.cs"',title:'"UnauthorizedGraphActionResult.cs"'},'    public class UnauthorizedGraphActionResult : IGraphActionResult\n    {\n        private readonly string _errorCode;\n        private readonly string _errorMessage;\n\n        public UnauthorizedGraphActionResult(\n            string errorMessage = "",\n            string errorCode = Constants.ErrorCodes.ACCESS_DENIED)\n        {\n            _errorMessage = errorMessage ?? "Unauthorized Access";\n            _errorCode = errorCode ?? Constants.ErrorCodes.ACCESS_DENIED;\n        }\n\n        public Task Complete(ResolutionContext context)\n        {\n            context.Messages.Critical(\n                   _errorMessage,\n                   _errorCode,\n                   context.Request.Origin);\n\n            context.Cancel();\n            return Task.CompletedTask;\n        }\n    }\n')),(0,a.kt)("p",null,"The result takes in an optional error message and code, providing defaults if not supplied. Then on ",(0,a.kt)("inlineCode",{parentName:"p"},"Complete")," it adds the message to the context and cancels its execution."))}d.isMDXComponent=!0}}]);