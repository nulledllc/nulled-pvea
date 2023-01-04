# nulled-pvea
nulled-pvea (pronounced nulled pea-va) is a revival of pvea, a node.js library for interacting with Proxmox VE's REST API, written by the original pvea developer. 

###### [Proxmox API wiki.](https://pve.proxmox.com/wiki/Proxmox_VE_API)
###### [Proxmox API documentation.](https://pve.proxmox.com/pve-docs/api-viewer/index.html)

## Installation

  `npm i @nulledllc/nulled-pvea` or  `yarn add @nulledllc/nulled-pvea`.

## To-do List

- [X] Basic functionality.
    - [X] Proxmox VE Authentication.
    - [X] Update Authentication Token as needed.
    - [X] List API version.

- [X] [Storage](https://pve.proxmox.com/pve-docs/api-viewer/#/storage)
    - [X] listStorage()
    - [X] createNewStorage()
    - [X] listStorageConfig()
    - [X] updateStorageConfig()
    - [X] deleteStorageConfig()

- [X] [Pools](https://pve.proxmox.com/pve-docs/api-viewer/#/pools)
    - [X] listPools()
    - [X] createNewPool()
    - [X] listPoolConfig()
    - [X] updatePool()
    - [X] deletePool()

- [ ] [Nodes](https://pve.proxmox.com/pve-docs/api-viewer/#/nodes)
    - [X] listNodes()
    - [X] wakeNode()
    - [X] nodeApiVersion()
    - [X] listNodeTime()
    - [X] setNodeTimeZone()
    - [X] listNodeSystemLog()
    - [X] nodeSubscriptionStatus()
    - [X] refreshNodeSubscriptionStatus()
    - [X] updateNodeSubscriptionKey()
    - [X] deleteNodeSubscriptionKey()
    - [X] stopAllOnNode()
    - [X] nodeStatus()
    - [X] shutdownNode()
    - [X] restartNode()
    - [X] startAllOnNode()
    - [X] getNodeReport()
    - [X] migrateAllOnNode()
    - [X] listNodeDnsSettings()
    - [X] updateNodeDnsSettings()
    - [X] listNodeConfig()
    - [X] updateNodeConfig()
    - [ ] [LXC Containers](https://pve.proxmox.com/pve-docs/api-viewer/#/nodes/{node}/lxc)
      - [X] listContainers()
      - [X] createContainer() 
      - [X] deleteContainer()
      - [X] [LXC Container Firewall](https://pve.proxmox.com/pve-docs/api-viewer/#/nodes/{node}/lxc/{vmid}/firewall)
        - [X] listContainerFirewallRefs()
        - [X] listContainerFirewallOptions()
        - [X] updateContainerFirewallOptions()
        - [X] listContainerFirewallLog()
        - [X] listAllContainerFirewallRules()
        - [X] createNewContainerFirewallRule()
        - [X] listContainerFirewallRuleContent()
        - [X] updateContainerFirewallRule()
        - [X] deleteContainerFirewallRule()
        - [X] listAllContainerFirewallIPSets()
        - [X] createNewContainerFirewallIPSet()
        - [X] listContainerFirewallIPSetContent()
        - [X] deleteContainerFirewallIPSet()
        - [X] listAllContainerFirewallAliases()
        - [X] createNewContainerFirewallAlias()
        - [X] listContainerFirewallAliasContent()
        - [X] updateContainerFirewallAlias()
        - [X] deleteContainerFirewallAlias()
 
- [ ] [Cluster](https://pve.proxmox.com/pve-docs/api-viewer/#/cluster)
    - [ ] Medium priority.

- [ ] [Access](https://pve.proxmox.com/pve-docs/api-viewer/#/nodes)
    - [ ] Low priority.
 
## Maintainer
[fieldofdisarray](https://github.com/fieldofdisarray) is the current maintainer. 

## License

Copyright 2022 nulled LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
