"use strict";(self.webpackChunknci_flow=self.webpackChunknci_flow||[]).push([[4301],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=o,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5162:(e,t,r)=>{r(7294)},4855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));r(5162);const a={sidebar_position:7,title:"Step 6 - Setup of Access Control List to restrict communication between the Server"},i=void 0,l={unversionedId:"Terraform/lab-6-setup-ACL-between-subnet",id:"Terraform/lab-6-setup-ACL-between-subnet",title:"Step 6 - Setup of Access Control List to restrict communication between the Server",description:"Create the Access control list to deny Web and DB Subnet from Communicating with each other",source:"@site/docs/Terraform/lab-6-setup-ACL-between-subnet.md",sourceDirName:"Terraform",slug:"/Terraform/lab-6-setup-ACL-between-subnet",permalink:"/nci-flow/docs/Terraform/lab-6-setup-ACL-between-subnet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Terraform/lab-6-setup-ACL-between-subnet.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Step 6 - Setup of Access Control List to restrict communication between the Server"},sidebar:"tutorialSidebar",previous:{title:"Step 5 - Create the Virtuals and associate the VPC Subnets with them",permalink:"/nci-flow/docs/Terraform/lab-5-associate-subnet-with-vm copy"},next:{title:"6.0 Security Central",permalink:"/nci-flow/docs/category/60-security-central"}},c={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create the Access control list to deny Web and DB Subnet from Communicating with each other")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch Console into the Web and DB Virtuals to verify that they can ping each other ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on "Network & Security", Click on "Virtual Private Clouds"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the VPC that you wish to apply the access control list on")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on Polices, you will see the default policies as per below"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:r(6074).Z,width:"1903",height:"502"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on "Create Policy"'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Priority:   50\n",(0,o.kt)("strong",{parentName:"li"},"The higher priority will be inspected first")),(0,o.kt)("li",{parentName:"ul"},"Source:                 Custom"),(0,o.kt)("li",{parentName:"ul"},"Source Subnet IP:       10.1.1.0/24"),(0,o.kt)("li",{parentName:"ul"},"Destination:            Custom"),(0,o.kt)("li",{parentName:"ul"},"Destination Subnet IP:  30.1.1.0/24"),(0,o.kt)("li",{parentName:"ul"},"Protocol:               Any"),(0,o.kt)("li",{parentName:"ul"},"Actions:                Deny"),(0,o.kt)("li",{parentName:"ul"},'Check on the box "Additional Create Policy in Reverse Direction"'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on the "Create Button"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch Console into the Web and DB Virtuals to verify that they can't ping each other "))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Repeat the steps for the App and DB Subnets")))}m.isMDXComponent=!0},6074:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/acl-0eb2845089244c137dab9eb75c65328a.png"}}]);