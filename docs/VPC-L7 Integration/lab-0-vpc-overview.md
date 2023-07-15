---
sidebar_position: 1
title: "Lab Overview"
---


import Tabs from '@theme/TabItem';
import TabsItem from '@theme/TabItem';


# VPC Lab Overview


A VPC is a virtualized network of resources that are specifically isolated from other resource pools. VPCs allow you to manage the isolated and secured virtual network with enhanced automation and scaling. 

In order to provide connectivity to the VMs in a VPC, each VPC requires connectivity to the external environment. This connectivity can be either NAT (Network Address Translation) or No-NAT and is VLAN based. The network used for external connectivity is called an external subnet. In a NAT scenario, the IP address of the VM will be translated when it exits the logical router of the VPC, whilst in the No-NAT scenario the IP address of the VM will not be translated when it exits the logical router of the VPC. For the different use case between NAT and No NAT, please refer to the article https://www.nutanix.dev/configuring-nat-and-no-nat-vpcs-in-flow-virtual-networking/


**For this particular lab, the subnet will be "NAT" enabled.**

An overview of the Network Diagram is as per below:

![](img/vpc_overview.png)


