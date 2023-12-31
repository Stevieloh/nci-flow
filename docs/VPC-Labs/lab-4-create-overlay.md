---
sidebar_position: 5
title: "Step 4 - Creating the Overlay Subnets within the VPC"
---


import Tabs from '@theme/TabItem';
import TabsItem from '@theme/TabItem';


      

**Creating the Overlay Subnets within the VPC**

Overlay subnets are subnets that are associated to the VPC. In this lab, you are required to create 4 overlay subnets as depicted in Lab 0 - Overview

1.  To create a VPC subnet, navigate to Network & Security – Virtual Private Clouds.
2.  Choose the VPC you created in the previous step.
3.  From the VPC navigation bar, choose Subnets.
    - Click Create Subnet.  The information for the 4 subnets are as per below
            
            -   Subnet #1
                -   Name:   Web-Subnet
                -   Network IP address/ Prefix:     10.1.1.0/24
                -   Gateway IP Address:             10.1.1.1
                -   IP Pool:                        Starting IP address 10.1.1.50 , Ending IP address : 10.1.1.200

            -   Subnet #2
                -   Name:   App-Subnet 
                -   Network IP address/ Prefix:     20.1.1.0/24
                -   Gateway IP Address:             20.1.1.1
                -   IP Pool:                        Starting IP address 20.1.1.50 , Ending IP address : 20.1.1.200
    
            -   Subnet #3
                -   Name:   DB-Subnet 
                -   Network IP address/ Prefix:     30.1.1.0/24
                -   Gateway IP Address:             30.1.1.1
                -   IP Pool:                        Starting IP address 30.1.1.50 , Ending IP address : 30.1.1.200
    
            -   Subnet #4
                -   Name:   NFV-Subnet 
                -   Network IP address/ Prefix:     40.1.1.0/24
                -   Gateway IP Address:             40.1.1.1
                -   IP Pool:                        Starting IP address 40.1.1.50 , Ending IP address : 40.1.1.200
    
    **After you create the first subnet, click on the create button, and repeat the steps for the other 3 subnets**

    