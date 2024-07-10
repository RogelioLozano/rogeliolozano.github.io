"use strict";(self.webpackChunkconfig_develop_env=self.webpackChunkconfig_develop_env||[]).push([[9279],{306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(4848),i=n(8453);const a={slug:"Last-stack-used",title:"Summary of my last Software Project",authors:["rogelio"],tags:["systems-design"]},r=void 0,o={permalink:"/blog/Last-stack-used",source:"@site/blog/2024-03-14-sise/index.md",title:"Summary of my last Software Project",description:"Project name: Sistema de identidades y seguridad. (SISE)",date:"2024-03-14T00:00:00.000Z",formattedDate:"March 14, 2024",tags:[{label:"systems-design",permalink:"/blog/tags/systems-design"}],readingTime:4.7,hasTruncateMarker:!1,authors:[{name:"Rogelio Lozano",title:"Learner of attractors of information aka Fundamental Principles.",url:"https://github.com/RogelioLozano",imageURL:"https://github.com/RogelioLozano.png",key:"rogelio"}],frontMatter:{slug:"Last-stack-used",title:"Summary of my last Software Project",authors:["rogelio"],tags:["systems-design"]},unlisted:!1,prevItem:{title:"Super short summary of The Worldly Philosophers",permalink:"/blog/economic-ideas"},nextItem:{title:"Is frontend automation near?",permalink:"/blog/Automating-frontend"}},d={authorsImageUrls:[void 0]},l=[{value:"Project name: Sistema de identidades y seguridad. (SISE)",id:"project-name-sistema-de-identidades-y-seguridad-sise",level:2},{value:"What?",id:"what",level:2},{value:"Why?",id:"why",level:2},{value:"How?",id:"how",level:2},{value:"Infrastructure and operations:",id:"infrastructure-and-operations",level:2},{value:"Product Development:",id:"product-development",level:2},{value:"Learned lessons",id:"learned-lessons",level:2}];function c(e){const t={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"project-name-sistema-de-identidades-y-seguridad-sise",children:"Project name: Sistema de identidades y seguridad. (SISE)"}),"\n",(0,s.jsx)(t.h2,{id:"what",children:"What?"}),"\n",(0,s.jsx)(t.p,{children:"My last project was about a dashboard and management of user's permissions re-engineered product. Our client was another department inside the government institution that had a legacy application and wanted to turn it into a web application."}),"\n",(0,s.jsx)(t.h2,{id:"why",children:"Why?"}),"\n",(0,s.jsx)(t.p,{children:"The external department required a solution to improve their productivity and to modernise and improve security standards, so that the confidentiality and integrity of the information were assured, as well as improve the UI and UX experience."}),"\n",(0,s.jsx)(t.h2,{id:"how",children:"How?"}),"\n",(0,s.jsx)(t.p,{children:"I led the technical development with other two developers and a designer. In the beginning we thought it would be straight forward, but it turned out that there were a lot of bureaucratic stoppers that we didn't consider at the beginning. We ended up focusing on finding the right teams that handled the required connections and focusing on testing the logic to assure that the business requirement result was correct for the new system. This increased the time from development to deployment by quite a bit, but it was solved even though we didn't have access to best practices like using DevOps for streamlining the development lifecycle. Personally it gave a lot of perspective into why is important to have a consolidated DevOps team, particularly as products mature and require much more maintenance (monitoring, metrics, logging, etc.)"}),"\n",(0,s.jsx)(t.p,{children:"Going down the technical rabbit hole, the architecture was a three layer solution: frontend, backend for frontend, and storage layer (structured database). The diagram below shows this layers as the right-side boxes, from left to right in order."}),"\n",(0,s.jsx)(t.h2,{id:"infrastructure-and-operations",children:"Infrastructure and operations:"}),"\n",(0,s.jsxs)(t.p,{children:["The user interacted indirectly via an institutional reverse-proxy (so that name-discovery were easier and to avoid the time to propagate DNS modifications- IP",":domain-name"," changes). The was also an institutional identity provider service that our application integrated with to provide seamlessly log-in (authentication) capabilities to the application for the clients using their credentials, enhancing the UX experience. This integration was implemented based on the protocol OAuth2.0, authorization code flow to provide us with an access token a a refresh token. This security implementation was integrated for the dashboard sessions and roles management. In the diagram below, the reverse-proxy identity service provider is represented on the leftmost box."]}),"\n",(0,s.jsx)(t.p,{children:"Another required integration was for employment data. Given the lack of private APIs to easily consume that information from legacy database systems, we decided to consume it via a subscriber-publisher design pattern. They pushed a new actualization of their table view and we consume it on a weekly basis. That is represented with one of the green lines."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Architecture",src:n(6036).A+"",width:"1176",height:"968"})}),"\n",(0,s.jsxs)(t.p,{children:["We also decided to streamline a CICD process for the whole system with the help of another team that was starting to implement CICD practices and had the required infrastructure. The codebase was stored in different gitlab repositories and runners and registries servers were used to implement the CICD streamline. SonarQube was used for linting (static coding analysis). Finally, we dockerized the applications and deployed the containers to the corresponding layers. From my side, the process involved network configurations, regular meetings with external cloud providers, troubleshooting, and resources management and configuring. As well as creating the ",(0,s.jsx)(t.strong,{children:"dockerfiles"}),", ",(0,s.jsx)(t.strong,{children:"docker-compose.yamls"})," and ",(0,s.jsx)(t.strong,{children:"gitlab-ci.yaml's"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"CICD",src:n(9407).A+"",width:"1861",height:"823"})}),"\n",(0,s.jsx)(t.h2,{id:"product-development",children:"Product Development:"}),"\n",(0,s.jsx)(t.p,{children:"From the development perspective, it involved developing a web application consisting of different submodules (subsystems). The stack used was:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"SvelteKit and typescript for the front-end UI/UX development."}),"\n",(0,s.jsx)(t.li,{children:"ActixWeb and Rust for the Restful API and server development."}),"\n",(0,s.jsx)(t.li,{children:"Starlette and python for the proxy service."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"To get high-performance and stability we opted to use Rust as the language for developing two web services A and B. Service A was a Restful API that implemented business logic for the front-end and performed CRUD operations interacting with the database. Service B was also programmed using ActixWeb but it only involved answering POST requests that asked for information about a certain user and the service responded based on the information stored in the database about the user whether it was authorized or not to consult the required information."}),"\n",(0,s.jsx)(t.p,{children:"For auditing (verification) reasons, we kept record of all the request ot system B, so that we stored employees information that wanted to consult information about users in the database."}),"\n",(0,s.jsx)(t.p,{children:"System A CRUD flows are described in the next two diagrams."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"ppee",src:n(5823).A+"",width:"4556",height:"1740"}),"\n",(0,s.jsx)(t.img,{alt:"usuario-autorizado",src:n(4284).A+"",width:"4508",height:"2236"})]}),"\n",(0,s.jsx)(t.p,{children:"On the other hand, the python web service was used as a proxy to keep the legacy consumers systems supported. This is because the legacy systems consulted information using SOAP and XML requests. The python service provided conversion and passed down the converted request to json to the new system B."}),"\n",(0,s.jsxs)(t.p,{children:["As part of the information security actualizations, a new CA was generated and we used it to encrypt the communication between the different consumers and the service via TLS, that required resolving the domain-name of the DNS service to the new IP address of the re-engineered solution. The following diagram illustrate the idea.\n",(0,s.jsx)(t.img,{alt:"rebinding",src:n(56).A+"",width:"3318",height:"1124"})]}),"\n",(0,s.jsx)(t.p,{children:"Finally the front-end was implemented with the good practice of using both server and client side rendering. So that loading times and reduced and the overall user experience was great. We designed it using Figma and implemented the components using tailwindcss, SkeletonUI for styles and typescript with svelte for reactivity and state management."}),"\n",(0,s.jsx)(t.h2,{id:"learned-lessons",children:"Learned lessons"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"It is important to have a strong DevOps team to support mature products! We ended up losing a lot of time because of bureocratic stoppers."}),"\n",(0,s.jsx)(t.li,{children:"When configuring a service behind an access gateway, remember to setup correctly the routes behind the protected paths."}),"\n",(0,s.jsx)(t.li,{children:"Don't generate test cases for uncertain features before the client decides that they will used them."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9407:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/SISE_CI-CD.drawio-a2100009c3e0641e8e4ccf7b7b629a33.png"},5823:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ppee-flow-43641a7499bfb87bc1f6637abfa45f26.png"},6036:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sise-architecture-d48e172162ba3cf082ef4f90f0f94f65.png"},4284:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/usuario-autorizado-flow-45beda4e53911ba2c35efcc8c9cece9b.png"},56:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/webservice-rebinding-5a7fd8d91ba25eb78e1764f18cd69215.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);