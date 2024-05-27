"use strict";(self.webpackChunknci_flow=self.webpackChunknci_flow||[]).push([[2828],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||g[d]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r(7294)},5299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));r(5162);const i={sidebar_position:3,title:"Step 2 - Configuring the Fortigate Firewall "},o=void 0,l={unversionedId:"VPC-L7 Integration/lab-2-configure-pa-fw",id:"VPC-L7 Integration/lab-2-configure-pa-fw",title:"Step 2 - Configuring the Fortigate Firewall ",description:"Create a Address Group",source:"@site/docs/VPC-L7 Integration/lab-2-configure-pa-fw.md",sourceDirName:"VPC-L7 Integration",slug:"/VPC-L7 Integration/lab-2-configure-pa-fw",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-2-configure-pa-fw",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VPC-L7 Integration/lab-2-configure-pa-fw.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Step 2 - Configuring the Fortigate Firewall "},sidebar:"tutorialSidebar",previous:{title:"Step 1 - Installing/Accessing the Fortigate Firewall",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-1-install-pa-fw"},next:{title:"Step 3 - Creating the policies and policy redirect to the Fortigate Firewall",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-3-configure-pbr-fw"}},p={},c=[],s={toc:c},u="wrapper";function g(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create a Address Group")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Login to the Fortigate Firewall using the web browser. (Example http://Floating IP address)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on "Addresses" ')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on "Create New"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the following settings for the Web and App Address Group "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(1474).Z,width:"2010",height:"1326"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(8539).Z,width:"2028",height:"1410"})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create a ANY-ANY Rule with monitoring turn on")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Login to the Fortigate Firewall using the web browser. (Example http://Floating IP address)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on "Policy" and Click on "Firewall Policies"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on "Create New"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the following settings\n",(0,a.kt)("img",{src:r(775).Z,width:"2010",height:"1700"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Click "Create" to create the firewall rule')))))}g.isMDXComponent=!0},8539:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fg_app_add-521edb68288a2eb81ddf0220579e52c1.png"},775:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fg_rule_add-cc266c38147ddc26923d7a41b0380458.png"},1474:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fg_web_add-1f7d08c8d9a5d18486cd5b30e3b0dd52.png"}}]);