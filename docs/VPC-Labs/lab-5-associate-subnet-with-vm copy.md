---
sidebar_position: 6
title: "Step 5 - Create the Virtual Machines and associate the VPC Subnets with them"
---


import Tabs from '@theme/TabItem';
import TabsItem from '@theme/TabItem';


      

**Create the Virtual Machines to be associated with each subnet**

1.  To create the Virtual machines, click on "Compute & Storage"
2.  Click on "VMs"
3.  Check on the check box on "CentOS VM"
4.  Click on the "Actions", click on "Clone"
    -   Click Advanced Configuration
    -   Input the following parameter
        -   Name:               Web-VM
        -   Number of Clones:   2
        -   Networks:           Select the Web Subnet that was created earlier
    -   Once done, clone the VM 
5.  Power on the VMs 
6.  Verify the VMs are able to get the IP address in that subnet 
7.  Verify login to the VMs 
    Username:   root
    Password:   nutanix/4u

**Repeat the steps for the App and DB Subnets**


