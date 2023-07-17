---
sidebar_position: 4
title: "Step 3 - Creating of Microsegmentation Policies "
---


import Tabs from '@theme/TabItem';
import TabsItem from '@theme/TabItem';

**Creating Microsegmentation Policies**

1.  Under the Infrastructure in the App Switcher
2.  Scroll down on the side bar to go to "Network & Security"
3.  Click on "Subnets"
4.  Click on "Create Subnet" 
5.  Input the following parameters
    - Name : "Primary-External"
    - Type : "VLAN" 
    - Cluster : "Select the Cluster that you are using"
    - Once a cluster has been selected, options will appear for VLAN ID and Virtual Switch. 
        - VLAN ID : 0
        
    - Click on the “External Connectivity for VPCs” button to indicate this subnet is used for external connectivity.
    - Click on the "NAT" checkbox. Ensure that the Checkbox have a tick.
    - Refer to the Network IP address and the Gateway Information provided in the Spreadsheet 
    - IP address Pool: "Please assign an Unused IP Range of 10 IPs"
    - Click on the "Create" Button to create the subnet. 
    
    **The external subnet can be shared by 1 or more VPCs in a real world scenario**

