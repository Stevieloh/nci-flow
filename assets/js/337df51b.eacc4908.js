"use strict";(self.webpackChunknci_flow=self.webpackChunknci_flow||[]).push([[3272],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a(7294)},8333:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(5162);const l={sidebar_position:2,title:"Step 1 - Installing/Accessing the Palo Alto Firewall"},i=void 0,o={unversionedId:"VPC-L7 Integration/lab-1-install-pa-fw",id:"VPC-L7 Integration/lab-1-install-pa-fw",title:"Step 1 - Installing/Accessing the Palo Alto Firewall",description:"Allocate Floating IP address",source:"@site/docs/VPC-L7 Integration/lab-1-install-pa-fw.md",sourceDirName:"VPC-L7 Integration",slug:"/VPC-L7 Integration/lab-1-install-pa-fw",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-1-install-pa-fw",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VPC-L7 Integration/lab-1-install-pa-fw.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Step 1 - Installing/Accessing the Palo Alto Firewall"},sidebar:"tutorialSidebar",previous:{title:"Lab Overview",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-0-vpc-overview"},next:{title:"Step 2 - Configuring the Palo Alto Firewall ",permalink:"/nci-flow/docs/VPC-L7 Integration/lab-2-configure-pa-fw"}},s={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allocate Floating IP address")),(0,r.kt)("p",null,"Floating IPs are routable IP address that are used to assign to the Virtual machines that have a private non-routable ip address within the VPC scope. We are going to request for the floating ip address from the external subnet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to the Prism Central "),(0,r.kt)("li",{parentName:"ol"},"Click on Infrastructure in the App Switcher"),(0,r.kt)("li",{parentName:"ol"},"Scroll down on the side bar to go to Network and Security "),(0,r.kt)("li",{parentName:"ol"},'Click on "Floating IPs" '),(0,r.kt)("li",{parentName:"ol"},'Click on "Request Floating IP" to request for the floating ip address')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creating the Palo Alto Firewall Virtual Machine")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the Prism Central ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Infrastructure in the App Switcher")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down on the side bar to go to Compute and Storage ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on "VMs" ')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on "Create VMs"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the Palo Alto VM with the following settings"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Name: "PALO ALTO VM"'),(0,r.kt)("li",{parentName:"ul"},"CPU: 4 "),(0,r.kt)("li",{parentName:"ul"},"Cores Per CPU: 1"),(0,r.kt)("li",{parentName:"ul"},"RAM : 16GB"),(0,r.kt)("li",{parentName:"ul"},"Disk Settings as per below")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3239).Z,width:"1016",height:"892"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the network settings, will need to create 2 NIC for the Virtual Firewall, "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Management IP address - Will be assigned a Floating IP address, so that web console access from the VPN will be allowed"),(0,r.kt)("li",{parentName:"ul"},"Production Interface IP - Used for the PBR next hop ip address, traffic between the different segments will be entering through this interface ")),(0,r.kt)("p",{parentName:"li"},"Management Virtual NIC Settings\nNetworks : Assign this to the NFV-Subnet that was created within the VPC "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DHCP Settings: Assign with DHCP "),(0,r.kt)("li",{parentName:"ul"},"Floating Address Assignment: Assign Floating IP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Take note of the "Floating IP address assigned"')))),(0,r.kt)("p",{parentName:"li"},"Production Virtual NIC Settings\nNetworks : Assign this to the NFV-Subnet that was created within the VPC "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DHCP Settings: Assign with DHCP "),(0,r.kt)("li",{parentName:"ul"},"Floating Address Assignment: No Floating IP "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Boot Configuration : Legacy Bios Mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Guest Customization: Select Cloud-init (Linux)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Save the below file as pa.yaml and upload the script"),(0,r.kt)("p",{parentName:"li"},"type=dhcp\u2010client\nip\u2010address=\ndefault\u2010gateway=\nnetmask=\nipv6\u2010address=\nipv6\u2010default\u2010gateway=\nhostname=PAN\nvm\u2010auth\u2010key=297791969289142\npanorama\u2010server=\npanorama\u2010server\u20102=\ntplname=\ndgname=\ndns\u2010primary=10.42.194.10\ndns\u2010secondary=10.42.194.10\nop\u2010command\u2010modes=multi\u2010vsys,jumbo\u2010frame\ndhcp\u2010send\u2010hostname=yes\ndhcp\u2010send\u2010client\u2010id=yes\ndhcp\u2010accept\u2010server\u2010hostname=yes\ndhcp\u2010accept\u2010server\u2010domain=yes\nop\u2010cmd\u2010dpdk\u2010pkt\u2010io=off")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click Next")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click Save to create the VM. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Power on the VM, and launch console into the VM to verify the installation is complete.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Once the installation is completed, connect to the web console of the firewall via the assigned floating ip address. For example: https://"Firewall Virtual Machine Floating IP address"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please login with the default credentials "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"username: admin"),(0,r.kt)("li",{parentName:"ul"},"password: admin")))))))}u.isMDXComponent=!0},3239:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pa_1-4a05484936ae215e45e28b86603c53fc.png"}}]);