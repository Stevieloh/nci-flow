---
sidebar_position: 1
title: "Lab Overview"
---


import Tabs from '@theme/TabItem';
import TabsItem from '@theme/TabItem';


# VPC with Palo Alto Firewall Integration Overview

In the previous lab, we have configured the Nutanix Virtual Private Cloud with layer 3 access control lists, however there will be some environment that will require Layer 7 inspection. Policy Based Routing is a feature that resides in the Nutanix VPC that allows traffic to be re-routed to another L3 - L7 Device (either a loadbalancer or a firewall)

For this particular lab, we are going to build on the previous scenario where we had configured the VPC, and redirect the Web and App traffic over to the Palo Alto Firewall. With Policy based routing, Nutanix VPC will allow certain traffic to be redirected to the Firewall for further inspection.  




