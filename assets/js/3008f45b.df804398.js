"use strict";(self.webpackChunknci_flow=self.webpackChunknci_flow||[]).push([[198],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),b=a,f=u["".concat(l,".").concat(b)]||u[b]||d[b]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5162:(e,t,r)=>{r(7294)},8329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));r(5162);const o={sidebar_position:5,title:"Step 4 - Creating the Overlay Subnets within the VPC"},i=void 0,s={unversionedId:"VLAN_MSEG/lab-4-create-overlay",id:"VLAN_MSEG/lab-4-create-overlay",title:"Step 4 - Creating the Overlay Subnets within the VPC",description:"Creating the Overlay Subnets within the VPC",source:"@site/docs/VLAN_MSEG/lab-4-create-overlay.mdx",sourceDirName:"VLAN_MSEG",slug:"/VLAN_MSEG/lab-4-create-overlay",permalink:"/nci-flow/docs/VLAN_MSEG/lab-4-create-overlay",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VLAN_MSEG/lab-4-create-overlay.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Step 4 - Creating the Overlay Subnets within the VPC"},sidebar:"tutorialSidebar",previous:{title:"Step 3 - Creating the VPC",permalink:"/nci-flow/docs/VLAN_MSEG/lab-3-create-vpc"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Creating the Overlay Subnets within the VPC")),(0,a.kt)("p",null,"Overlay subnets are subnets that are associated to the VPC. In this lab, you are required to create 4 overlay subnets as depicted in Lab 0 - Overview"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To create a VPC subnet, navigate to Network & Security \u2013 Virtual Private Clouds.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose the VPC you created in the previous step.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the VPC navigation bar, choose Subnets."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Click Create Subnet.  The information for the 4 subnets are as per below")),(0,a.kt)("p",{parentName:"li"},"Subnet #1\nName:   Web-Subnet\nNetwork IP address/ Prefix:     10.1.1.0/24\nGateway IP Address:             10.1.1.1\nIP Pool:                        Starting IP address 10.1.1.50 , Ending IP address : 10.1.1.200"),(0,a.kt)("p",{parentName:"li"},"Subnet #2\nName:   App-Subnet\nNetwork IP address/ Prefix:     20.1.1.0/24\nGateway IP Address:             20.1.1.1\nIP Pool:                        Starting IP address 20.1.1.50 , Ending IP address : 20.1.1.200"),(0,a.kt)("p",{parentName:"li"},"Subnet #3\nName:   DB-Subnet\nNetwork IP address/ Prefix:     30.1.1.0/24\nGateway IP Address:             30.1.1.1\nIP Pool:                        Starting IP address 30.1.1.50 , Ending IP address : 30.1.1.200"),(0,a.kt)("p",{parentName:"li"},"Subnet #4\nName:   NFV-Subnet\nNetwork IP address/ Prefix:     40.1.1.0/24\nGateway IP Address:             40.1.1.1\nIP Pool:                        Starting IP address 40.1.1.50 , Ending IP address : 40.1.1.200"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"After you create the first subnet, click on the create button, and repeat the steps for the other 3 subnets")))))}d.isMDXComponent=!0}}]);