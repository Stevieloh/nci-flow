"use strict";(self.webpackChunknci_flow=self.webpackChunknci_flow||[]).push([[3272],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),g=r,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||l;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5162:(e,t,a)=>{a(7294)},8333:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(5162);const l={sidebar_position:2,title:"Step 1 - Installing/Accessing the Fortigate Firewall"},i=void 0,o={unversionedId:"VPC-L7 Integration/lab-1-install-pa-fw",id:"VPC-L7 Integration/lab-1-install-pa-fw",title:"Step 1 - Installing/Accessing the Fortigate Firewall",description:"Allocate Floating IP address",source:"@site/docs/VPC-L7 Integration/lab-1-install-pa-fw.md",sourceDirName:"VPC-L7 Integration",slug:"/VPC-L7 Integration/lab-1-install-pa-fw",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-1-install-pa-fw",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VPC-L7 Integration/lab-1-install-pa-fw.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Step 1 - Installing/Accessing the Fortigate Firewall"},sidebar:"tutorialSidebar",previous:{title:"Lab Overview",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-0-vpc-overview"},next:{title:"Step 2 - Configuring the Palo Alto Firewall ",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-2-configure-pa-fw"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allocate Floating IP address")),(0,r.kt)("p",null,"Floating IPs are routable IP address that are used to assign to the Virtual machines that have a private non-routable ip address within the VPC scope. We are going to request for the floating ip address from the external subnet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to the Prism Central "),(0,r.kt)("li",{parentName:"ol"},"Click on Infrastructure in the App Switcher"),(0,r.kt)("li",{parentName:"ol"},"Scroll down on the side bar to go to Network and Security "),(0,r.kt)("li",{parentName:"ol"},'Click on "Floating IPs" '),(0,r.kt)("li",{parentName:"ol"},'Click on "Request Floating IP" to request for the floating ip address')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creating the Fortigate Firewall Virtual Machine")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the Prism Central ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Infrastructure in the App Switcher")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down on the side bar to go to Compute and Storage ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on "VMs" ')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on "Create VMs"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the Palo Alto VM with the following settings"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Name: "Fortigate VM"'),(0,r.kt)("li",{parentName:"ul"},"CPU: 1 "),(0,r.kt)("li",{parentName:"ul"},"Cores Per CPU: 1"),(0,r.kt)("li",{parentName:"ul"},"RAM : 2GB"),(0,r.kt)("li",{parentName:"ul"},"Disk Settings as per below")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3357).Z,width:"1282",height:"1546"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the network settings, will need to create 1 NIC for the Virtual Firewall, for simplicity the Management IP of the Firewall will be used as the Production IP as well"),(0,r.kt)("p",{parentName:"li"},"Management Virtual NIC Settings\nNetworks : Assign this to the NFV-Subnet that was created within the VPC "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DHCP Settings: Assign with DHCP "),(0,r.kt)("li",{parentName:"ul"},"Floating Address Assignment: Assign Floating IP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Take note of the "Floating IP address assigned"'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Boot Configuration : Legacy Bios Mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click Next")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click Save to create the VM. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Power on the VM, and launch console into the VM to verify the installation is complete.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Once the installation is completed, connect to the web console of the firewall via the assigned floating ip address. For example: https://"Firewall Virtual Machine Floating IP address"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please login with the default credentials, no password required"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"username: admin"),(0,r.kt)("li",{parentName:"ul"},"password: "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will be prompted to change the password upon login."))))))}m.isMDXComponent=!0},3357:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fortigate_fw-615e65bebe72d29e181f54c644daaf6a.png"}}]);