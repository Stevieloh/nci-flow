"use strict";(self.webpackChunknci_flow=self.webpackChunknci_flow||[]).push([[6650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,b=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},3361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));n(5162);const o={sidebar_position:3,title:"Step 2 - Creating of Subnet for External Connectivity "},i=void 0,l={unversionedId:"VPC-L7 Integration/lab-2-create-subnet",id:"VPC-L7 Integration/lab-2-create-subnet",title:"Step 2 - Creating of Subnet for External Connectivity ",description:"Lab 2 Creating the VLAN Subnet for External Connectivity (If the Prism Central is shared, only 1 person in group need to perform this)",source:"@site/docs/VPC-L7 Integration/lab-2-create-subnet.md",sourceDirName:"VPC-L7 Integration",slug:"/VPC-L7 Integration/lab-2-create-subnet",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-2-create-subnet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VPC-L7 Integration/lab-2-create-subnet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Step 2 - Creating of Subnet for External Connectivity "},sidebar:"tutorialSidebar",previous:{title:"Step 1 - Enabling the Advanced Networking Controller",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-1-enable anc"},next:{title:"Step 3 - Creating the VPC",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-3-create-vpc"}},c={},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Lab 2 Creating the VLAN Subnet for External Connectivity (If the Prism Central is shared, only 1 person in group need to perform this)")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Under the Infrastructure in the App Switcher")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Scroll down on the side bar to go to "Network & Security"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on "Subnets"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on "Create Subnet" ')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Input the following parameters"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Name : "Primary-External"'),(0,a.kt)("li",{parentName:"ul"},'Type : "VLAN" '),(0,a.kt)("li",{parentName:"ul"},'Cluster : "Select the Cluster that you are using"'),(0,a.kt)("li",{parentName:"ul"},"Once a cluster has been selected, options will appear for VLAN ID and Virtual Switch. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"VLAN ID : 0"))),(0,a.kt)("li",{parentName:"ul"},"Click on the \u201cExternal Connectivity for VPCs\u201d button to indicate this subnet is used for external connectivity."),(0,a.kt)("li",{parentName:"ul"},'Click on the "NAT" checkbox. Ensure that the Checkbox have a tick.'),(0,a.kt)("li",{parentName:"ul"},"Refer to the Network IP address and the Gateway Information provided in the Spreadsheet "),(0,a.kt)("li",{parentName:"ul"},'IP address Pool: "Please assign an Unused IP Range of 10 IPs"'),(0,a.kt)("li",{parentName:"ul"},'Click on the "Create" Button to create the subnet. ')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"The external subnet can be shared by 1 or more VPCs in a real world scenario")))))}m.isMDXComponent=!0}}]);