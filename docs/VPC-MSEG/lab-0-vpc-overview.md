---
sidebar_position: 1
title: "Lab Overview"
---


import Tabs from '@theme/TabItem';
import TabsItem from '@theme/TabItem';


# VPC Lab & MicroSegmentation Overview


In the labs so far, we have created the Virtual Private cloud which have allowed isolation between different tenants' workloads. In this lab, we will build on the labs further to enable microsegmentation between workloads within the same subnet in a VPC. whilst Access Control List help to secure traffic between the subnets, Microsegmentation can provide more granular controls for protecting traffic within the subnet itself. 

Alternatively, some companies can choose to deploy only Microsegmentation within their environment if they deem that having categories tags assigned to the Virtual machines are a more effective security policy and that adding on the Layer 3 ACL will be more cumbersome and adds on to the overall complexity when troubleshooting arises. 

Nutanix Micro-segmentation works on the basis of Categories values. The same tags can be applied to Virtual Machines of similar functionalities, thus group them in 

An overview of the Network Diagram is as per below:

![](img/Lab1/vpc_overview.png)


