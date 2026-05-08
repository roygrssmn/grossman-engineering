## The Backstory

To maintain a sharp understanding of infrastructure and operations, I needed a hands-on environment to test networking configurations, container orchestration, and automated backups outside of the constraints of my daily enterprise work.

## My Philosophy in Action

I built a highly available homelab utilizing Raspberry Pi clusters, Nvidia Spark, and a dedicated NAS. The entire environment is managed via Docker, ensuring consistency and rapid disaster recovery. An architect should never lose touch with the metal; understanding the low-level infrastructure constraints makes for much more resilient high-level designs.

## The Hard Truths

Running enterprise-grade configurations on consumer hardware quickly reveals the limitations of edge compute. I spent weeks fighting network latency and SD card corruption before realizing I needed to shift stateful data entirely to the NAS. It was a humbling reminder that complexity doesn't always equal reliability.

> ### Lab Specifications
> 
> * **Compute:** Raspberry Pi, Nvidia Spark, and Cloud providers
> * **Storage:** Synology NAS (16TB RAID 1)
> * **Orchestration:** Docker Swarm & Portainer
> * **Networking:** Pi-hole, WireGuard VPN, Nginx