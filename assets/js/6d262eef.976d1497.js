"use strict";(self.webpackChunkconfig_develop_env=self.webpackChunkconfig_develop_env||[]).push([[651],{562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(4848),s=t(8453);const o={sidebar_position:3},r="Building Frontend",l={id:"node-js-tooling/building-front",title:"Building Frontend",description:"Conceptual blocks of building a web application as of 2024:",source:"@site/docs/node-js-tooling/building-front.md",sourceDirName:"node-js-tooling",slug:"/node-js-tooling/building-front",permalink:"/docs/node-js-tooling/building-front",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Node Js",permalink:"/docs/node-js-tooling/node-js"},next:{title:"Building UI with React",permalink:"/docs/node-js-tooling/react-js"}},a={},d=[{value:"What is the DOM?",id:"what-is-the-dom",level:2},{value:"React and JSX",id:"react-and-jsx",level:2},{value:"The three rules of JSX",id:"the-three-rules-of-jsx",level:2},{value:"1. Return a single root element",id:"1-return-a-single-root-element",level:3},{value:"2. Close all the tags",id:"2-close-all-the-tags",level:3},{value:"3. camelCase <del>all</del> most of the things",id:"3-camelcase-all-most-of-the-things",level:3}];function c(e){const n={code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"building-frontend",children:"Building Frontend"}),"\n",(0,i.jsx)(n.p,{children:"Conceptual blocks of building a web application as of 2024:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"User interface - how users will consume and interact with your application."}),"\n",(0,i.jsx)(n.li,{children:"Routing - how users will navigate among the parts of your application."}),"\n",(0,i.jsx)(n.li,{children:"Data Fetching - where data lives and how to get it."}),"\n",(0,i.jsx)(n.li,{children:"Rendering - when and where the rendering of static and dynamic content happens."}),"\n",(0,i.jsx)(n.li,{children:"Integrations - what third parties used in the application and how to connect to them"}),"\n",(0,i.jsx)(n.li,{children:"Infrastructure - where you deploy, store, and run you application code (serverless,CDN,edge,etc.)"}),"\n",(0,i.jsx)(n.li,{children:"Developer Experience - your team's experience building and maintaining your application."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the React + NextJS stack, React is a library that gives APIs functions and tools to create interactive user interfaces. NextJS is a React ",(0,i.jsx)(n.strong,{children:"framework"})," that gives the building blocks to create web applications."]}),"\n",(0,i.jsx)(n.p,{children:"By framework we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your applications."}),"\n",(0,i.jsx)(n.p,{children:"A user goes to website, then the server sends to the client (the browser) an html file. The rendering happens in the browser when the browsers constructs the DOM with the html file."}),"\n",(0,i.jsx)(n.h2,{id:"what-is-the-dom",children:"What is the DOM?"}),"\n",(0,i.jsx)(n.p,{children:"It is a tree-like representation of the html code. Using DOM methods, you can act on user input and manipulate the DOM in response by selecting, adding, updating and deleting elements in the UI."}),"\n",(0,i.jsxs)(n.p,{children:["I can use js for manipulatin the DOM and is very powerful but verbose. It is an ",(0,i.jsx)(n.strong,{children:"imperative"})," way of programming to build UIs. React is a ",(0,i.jsx)(n.strong,{children:"declarative"})," library for buidling UIs."]}),"\n",(0,i.jsxs)(n.p,{children:["You as developer tell ",(0,i.jsx)(n.strong,{children:"what"})," you want, instead of ",(0,i.jsx)(n.strong,{children:"how"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"react-and-jsx",children:"React and JSX"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"react"})," is the core library"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"react-dom"})," provides DOM-specific methods that enable to use React with the DOM."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Instead of using verbose code to describe how to manipulate the DOM in js. React allows to describe what you want to manipulate using an extension of Javascript called ",(0,i.jsx)(n.strong,{children:"JSX"})," that allows to describe UI manipulations (adding, updating) in traditional HTML syntax."]}),"\n",(0,i.jsxs)(n.p,{children:["Nevertheless, browsers don't understand JSX directly, so transforming/compiler tools like ",(0,i.jsx)(n.strong,{children:"babel"})," are used to transform the JSX code into regular Javascript."]}),"\n",(0,i.jsx)(n.p,{children:"Apart from the following three rules, JSX is almost like html."}),"\n",(0,i.jsx)(n.h2,{id:"the-three-rules-of-jsx",children:"The three rules of JSX"}),"\n",(0,i.jsx)(n.h3,{id:"1-return-a-single-root-element",children:"1. Return a single root element"}),"\n",(0,i.jsx)(n.p,{children:"To return multiple elements from a component, wrap them with a single parent tag."}),"\n",(0,i.jsx)(n.p,{children:"For example, using a div"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div>\n  <h1>Hedy Lamarr\'s Todos</h1>\n  <img \n    src="https://i.imgur.com/yXOvdOSs.jpg" \n    alt="Hedy Lamarr" \n    class="photo"\n  />\n  <ul>\n    <li>Invent new traffic lights</li>\n    <li>Rehearse a movie scene</li>\n    <li>Improve the spectrum technology</li>\n  </ul>\n</div>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-close-all-the-tags",children:"2. Close all the tags"}),"\n",(0,i.jsxs)(n.p,{children:["JSX requires all tags to be closed explicitely: ",(0,i.jsx)(n.code,{children:"<img>"})," must become ",(0,i.jsx)(n.code,{children:"<img />"})," and wraping tags must be ",(0,i.jsx)(n.code,{children:"<li></li>"})]}),"\n",(0,i.jsxs)(n.h3,{id:"3-camelcase-all-most-of-the-things",children:["3. camelCase ",(0,i.jsx)(n.del,{children:"all"})," most of the things"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);