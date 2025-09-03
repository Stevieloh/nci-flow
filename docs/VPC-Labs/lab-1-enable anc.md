---
sidebar_position: 2
title: "Step 1 - Enabling the Network Controller"
---


import Tabs from '@theme/TabItem';
import TabsItem from '@theme/TabItem';

**Enable the Advanced Networking Controller in the Prism Central**

1.  Login to the Prism Central 
2.  Click on Infrastructure in the App Switcher
3.  Scroll down on the side bar to go to Prism Central Settings
4.  Click on "Network Controller" 
5.  Verify that the Network Controller is already enabled. 
    ![](img/anc_enable.png)
6. In the AOS 7.3 Release, there is new feature to allow overlapping ERP to be advertise out. A lot of times in the multi-tenancy requirements, tenants might have the same ERP to be advertised out of the VPCs. Thus enabling this option allows overlapping ERPs to be advertised, however this is only allowed if the tenants are connected to different Transit VPCs. 