"use strict";(self.webpackChunknci_flow=self.webpackChunknci_flow||[]).push([[8264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},5106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(5162);const o={sidebar_position:7,title:"Step 6 - Setup of Access Control List to restrict communication between the Server"},i=void 0,l={unversionedId:"VPC-Labs/lab-6-setup-ACL-between-subnet",id:"VPC-Labs/lab-6-setup-ACL-between-subnet",title:"Step 6 - Setup of Access Control List to restrict communication between the Server",description:"Create the Access control list to deny Web and DB Subnet from Communicating with each other",source:"@site/docs/VPC-Labs/lab-6-setup-ACL-between-subnet.md",sourceDirName:"VPC-Labs",slug:"/VPC-Labs/lab-6-setup-ACL-between-subnet",permalink:"/nci-flow/docs/VPC-Labs/lab-6-setup-ACL-between-subnet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VPC-Labs/lab-6-setup-ACL-between-subnet.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Step 6 - Setup of Access Control List to restrict communication between the Server"},sidebar:"tutorialSidebar",previous:{title:"Step 5 - Create the Virtual Machines and associate the VPC Subnets with them",permalink:"/nci-flow/docs/VPC-Labs/lab-5-associate-subnet-with-vm copy"},next:{title:"2.0 Virtual Private Cloud with Layer 7 Firewall Integration",permalink:"/nci-flow/docs/category/20-virtual-private-cloud-with-layer-7-firewall-integration"}},c={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create the Access control list to deny Web and DB Subnet from Communicating with each other")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Launch Console into the Web and DB Virtuals to verify that they can ping each other ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on "Network & Security", Click on "Virtual Private Clouds"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the VPC that you wish to apply the access control list on")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Polices, you will see the default policies as per below"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6197).Z,width:"1903",height:"502"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on "Create Policy"'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Priority:   50\n",(0,a.kt)("strong",{parentName:"li"},"The higher priority will be inspected first")),(0,a.kt)("li",{parentName:"ul"},"Source:                 Custom"),(0,a.kt)("li",{parentName:"ul"},"Source Subnet IP:       10.1.1.0/24"),(0,a.kt)("li",{parentName:"ul"},"Destination:            Custom"),(0,a.kt)("li",{parentName:"ul"},"Destination Subnet IP:  30.1.1.0/24"),(0,a.kt)("li",{parentName:"ul"},"Protocol:               Any"),(0,a.kt)("li",{parentName:"ul"},"Actions:                Deny"),(0,a.kt)("li",{parentName:"ul"},'Check on the box "Additional Create Policy in Reverse Direction"'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on the "Create Button"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Launch Console into the Web and DB Virtuals to verify that they can't ping each other"))))}m.isMDXComponent=!0},6197:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/acl-0eb2845089244c137dab9eb75c65328a.png"}}]);