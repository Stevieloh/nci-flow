---
sidebar_position: 4
title: "Step 3 - Creating the policies and policy redirect to the Palo Alto Firewall"
---


import Tabs from '@theme/TabItem';
import TabsItem from '@theme/TabItem';

**Create Policy Based Redirect (PBR) in VPC**

1.  Login to the Prism Central 
2.  Click on Infrastructure in the App Switcher
3.  Scroll down on the side bar to go to Network and Security
4.  Click on Virtual Private Clouds
5.  Click on the VPC that was created
6.  Click on the Policies Tab, by default there is already a policy rule with any-any created at priority 10. Higher priorities rules will be matched first. Thus we will need to create a rule that has a higher number in priority compared to the default one. 
7.  Click on Create Policies
    -   Priority :      30 
    -   Source :        Custom  (Specify the source ip address as 10.1.1.0/24. This is the network address for the web subnet)
    -   Destination:    Custom  (Specify the destination ip address as 20.1.1.0/24. This is the network address for the app subnet)
    -   Protocol:       Any
    -   Actions:        ReRoute
        - Reroute IP:   IP Address of the Palo Alto Virtual Firewall Production NIC 
    -   Click on the checkbox "Additional Create Policy in reverse direction"

8.  Click on the Create button

**Verify that the PBR rule is indeed forwarding traffic to the Virtual Firewall**

1.  From the Prism central, launch the web console to the Web Virtual Machine, login with the credentials and perform a continous ping to the App VM. Verify that the ping is successful
2.  Login to the Palo Alto Firewall
3.  Click on Monitor, go to Logs-Traffic.
4.  On the top right corner, there is a dropdown box which indicates the refresh interval of the logs. You can choose to manual refresh or refresh at certain interval
5.  After the refresh is complete, you can see logs of the PING traffic from the Web VM to the App VM. Some sample is as per below screenshot


This confirms that the Nutanix VPC is indeed sending traffic to the Palo Alto VM. In a real world scenario, additional rules will be applied to inspect the traffic received by the firewall. This also showcases the use of Policy Based Routing on the Nutanix VPC integration with the Palo Alto.





