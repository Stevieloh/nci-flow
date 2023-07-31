"use strict";(self.webpackChunknci_flow=self.webpackChunknci_flow||[]).push([[7200],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=i,k=u["".concat(c,".").concat(h)]||u[h]||m[h]||n;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5162:(e,t,r)=>{r(7294)},4594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(7462),i=(r(7294),r(3905));r(5162);const n={sidebar_position:3,title:"Step 2 - Creating the Categories and Policies for Microsegmentation "},o=void 0,l={unversionedId:"VPC-MSEG/lab-2-create-policies",id:"VPC-MSEG/lab-2-create-policies",title:"Step 2 - Creating the Categories and Policies for Microsegmentation ",description:"Creating Categories",source:"@site/docs/VPC-MSEG/lab-2-create-policies.md",sourceDirName:"VPC-MSEG",slug:"/VPC-MSEG/lab-2-create-policies",permalink:"/nci-flow/docs/VPC-MSEG/lab-2-create-policies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VPC-MSEG/lab-2-create-policies.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Step 2 - Creating the Categories and Policies for Microsegmentation "},sidebar:"tutorialSidebar",previous:{title:"Step 1 - Enabling Microsegmentation with VPC on Prism Central and Prism Element",permalink:"/nci-flow/docs/VPC-MSEG/lab-1-enabling mseg"},next:{title:"5.0 Flow Network Security Automation with Terraform",permalink:"/nci-flow/docs/category/50-flow-network-security-automation-with-terraform"}},c={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Creating Categories")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Under the Infrastructure in the App Switcher"),(0,i.kt)("li",{parentName:"ol"},'Scroll down on the side bar to go to "Administration"'),(0,i.kt)("li",{parentName:"ol"},'Click on "Categories"'),(0,i.kt)("li",{parentName:"ol"},'Click on "New Categories"'),(0,i.kt)("li",{parentName:"ol"},"Input the following parameters",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Name : "LAB-FLOW"'),(0,i.kt)("li",{parentName:"ul"},'Purpose : "Lab Purposes"'),(0,i.kt)("li",{parentName:"ul"},'Values : "Web", "App", "DB"'),(0,i.kt)("li",{parentName:"ul"},"Click on Save")))),(0,i.kt)("p",null,"A sample of the output is as per below"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(3280).Z,width:"539",height:"549"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Assigning Categories to the Virtual Machines")),(0,i.kt)("p",null,"Assign the VMs that were created previously into their respective categories."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Scroll down on the side bar to go to "Compute and Storage", Click on "Virtual Machines"'),(0,i.kt)("li",{parentName:"ol"},'Click on the checkbox beside the Web Server VMs, Click on the Action dropdown box. Click on "Manage Categories" , under the search type in "LAB-FLOW: Web" category. Click Save.'),(0,i.kt)("li",{parentName:"ol"},'Repeat the same for the App Server VMs, and assign them to the "LAB-FLOW: App" Category, click Save.'),(0,i.kt)("li",{parentName:"ol"},'Repeat the same for the DB Server VMs, and assign them to the "LAB-FLOW: DB" Category, click Save.')),(0,i.kt)("p",null,"To verify the VMs are assigned to the categories"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Under the Infrastructure in the App Switcher"),(0,i.kt)("li",{parentName:"ol"},'Scroll down on the side bar to go to "Administration"'),(0,i.kt)("li",{parentName:"ol"},'Click on "Categories"'),(0,i.kt)("li",{parentName:"ol"},'Click on the "LAB-FLOW" Category'),(0,i.kt)("li",{parentName:"ol"},"Verify that the VMs are listed and populated in the right values.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Creating Microsegmentation Policies")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Scroll down on the side bar to the "Network & Security", click on "Security Policies"'),(0,i.kt)("li",{parentName:"ol"},'Click on "Create Security Policy"'),(0,i.kt)("li",{parentName:"ol"},"Input the following parameters",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Policy Name: LAB-FLOW-Policy"),(0,i.kt)("li",{parentName:"ul"},"Purpose: Lab Flow Policies"),(0,i.kt)("li",{parentName:"ul"},'Click on the radio button "Security Entities (Application Policy)'),(0,i.kt)("li",{parentName:"ul"},'Scope of Secured Entities - Select the radio button "Inside a VPC", select the VPC that was created.'),(0,i.kt)("li",{parentName:"ul"},"Click Next")))),(0,i.kt)("p",null,"For this lab, we are securing the entities for Web Server"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on the Secured Entity, search for Web. Select the "LAB-FLOW: Web" Category.'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Under the options "Can VMs in this group talk to each other ", select - "Yes"',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'This will alow the VMs in the same category to communicate with each other, in the event where there is no need for the communications to happen for VMs in the same category, then select "No"'))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the Add Source"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Click on the checkbox for "Select Multiple Categories"'),(0,i.kt)("li",{parentName:"ul"},'Search for App. Select the "LAB-FLOW: App" Category'),(0,i.kt)("li",{parentName:"ul"},'Search for DB. Select the "LAB-FLOW: DB" Category\nClick on the Add button'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on the Source that was added, a "+", this will allow the specific set of services to be accessible from the Source Category to the Security Entity, in this case the "Web" category. Click on "Select a Service"'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Allow only TCP/22, click "Add Row"'),(0,i.kt)("li",{parentName:"ul"},"Allow ICMP.\nThis will allow SSH and ICMP services from the Web Servers")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:r(7229).Z,width:"792",height:"655"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the Add Source"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Select the Add Source by "Subnet/IP"'),(0,i.kt)("li",{parentName:"ul"},'Key in the values "0.0.0.0/0"\nClick on the Add button'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click on the Source (0.0.0.0/0) that was added, a "+", this will allow the specific set of services to be accessible from the Source Category to the Security Entity, in this case the "Web" category. Click on "Select a Service"'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow only TCP/80, add row"),(0,i.kt)("li",{parentName:"ul"},"Allow only TCP/443")),(0,i.kt)("p",{parentName:"li"},"This will allow HTTP and HTTPS into the Web Servers."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:r(773).Z,width:"788",height:"627"})))),(0,i.kt)("p",null,"An overview of the eventual policy is as per below:\n",(0,i.kt)("img",{src:r(4004).Z,width:"1341",height:"588"})),(0,i.kt)("p",null,'Click "Next", Select the radio button "Apply" to enforce the policy.\nClick "Confirm", to create the policy'),(0,i.kt)("p",null,'Verify that the policy is created under the "Policy Type: Application" as per the screenshot below\n',(0,i.kt)("img",{src:r(7124).Z,width:"1907",height:"418"})))}m.isMDXComponent=!0},3280:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/categories-9f997b21546da41f12f19016ca4ef4ff.png"},7229:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/mseg_1-2d4967016b25a93b16d6e065022fb397.png"},773:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/mseg_2-ba2696db9e59f1242aaa7ad6a54122dc.png"},4004:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/mseg_3-96d229aeaed82e3678bd09502bf1421e.png"},7124:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/mseg_4-ffdd9503279f358591605ef168e9ca8c.png"}}]);