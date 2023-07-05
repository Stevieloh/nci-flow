"use strict";(self.webpackChunknci_flow=self.webpackChunknci_flow||[]).push([[6541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=a,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5162:(e,t,r)=>{r(7294)},2856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(5162);const o={sidebar_position:7,title:"Step 6 - Setup of Access Control List to restrict communication between the Server"},i=void 0,l={unversionedId:"Security Central/lab-6-setup-ACL-between-subnet",id:"Security Central/lab-6-setup-ACL-between-subnet",title:"Step 6 - Setup of Access Control List to restrict communication between the Server",description:"Create the Access control list to deny Web and DB Subnet from Communicating with each other",source:"@site/docs/Security Central/lab-6-setup-ACL-between-subnet.md",sourceDirName:"Security Central",slug:"/Security Central/lab-6-setup-ACL-between-subnet",permalink:"/nci-flow/docs/Security Central/lab-6-setup-ACL-between-subnet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Security Central/lab-6-setup-ACL-between-subnet.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Step 6 - Setup of Access Control List to restrict communication between the Server"},sidebar:"tutorialSidebar",previous:{title:"Step 5 - Create the Virtuals and associate the VPC Subnets with them",permalink:"/nci-flow/docs/Security Central/lab-5-associate-subnet-with-vm copy"}},c={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create the Access control list to deny Web and DB Subnet from Communicating with each other")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Launch Console into the Web and DB Virtuals to verify that they can ping each other ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on "Network & Security", Click on "Virtual Private Clouds"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the VPC that you wish to apply the access control list on")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Polices, you will see the default policies as per below"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(4811).Z,width:"1903",height:"502"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on "Create Policy"'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Priority:   50\n",(0,a.kt)("strong",{parentName:"li"},"The higher priority will be inspected first")),(0,a.kt)("li",{parentName:"ul"},"Source:                 Custom"),(0,a.kt)("li",{parentName:"ul"},"Source Subnet IP:       10.1.1.0/24"),(0,a.kt)("li",{parentName:"ul"},"Destination:            Custom"),(0,a.kt)("li",{parentName:"ul"},"Destination Subnet IP:  30.1.1.0/24"),(0,a.kt)("li",{parentName:"ul"},"Protocol:               Any"),(0,a.kt)("li",{parentName:"ul"},"Actions:                Deny"),(0,a.kt)("li",{parentName:"ul"},'Check on the box "Additional Create Policy in Reverse Direction"'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on the "Create Button"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Launch Console into the Web and DB Virtuals to verify that they can't ping each other "))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Repeat the steps for the App and DB Subnets")))}m.isMDXComponent=!0},4811:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/acl-0eb2845089244c137dab9eb75c65328a.png"}}]);