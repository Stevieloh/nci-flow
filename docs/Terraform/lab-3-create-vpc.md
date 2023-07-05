---
sidebar_position: 4
title: "Step 3 - Creating the VPC"
---


import Tabs from '@theme/TabItem';
import TabsItem from '@theme/TabItem';


      

**Creating the VPC**

1.  Navigate to “Network & Security”. Click on the Virtual Private Cloud option. Click on "Create VPC"
2.  Input the following parameters 
    - Name:                 "VPC Name to be created"
    - External Subnets:     "Select the name of the External Subnet that was created in Lab 2"
    - External Routable IP address: "Leave it empty"
    - Domain Name Servers:  10.42.194.10
    
3.  Click on the "Create" button to create the VPC 

**Create the Default Route in the VPC**
1.  Select the VPC you want to create the route for.
2.  On the top of the section are 4 sections – Summary, Subnets, Policies, Routes.  Select Routes.
3.  Click Manage Static Routes - This will alow creation of outbound static routes from the VPC 
4.  Click Add Static Route.  For the default route (which will apply to any traffic destined for an endpoint not in the VPC subnet), enter
    0.0.0.0/0 in the Destination Prefix.  In the Next Hop box, select the external subnet that was assigned to the VPC.
5.  Click Save.



