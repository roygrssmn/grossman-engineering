## The Backstory

I have always been a tinkerer, but my homelab evolved into a mission for digital sovereignty. In an era of centralized clouds, I wanted to prove that I could maintain full control over my data, storage, and AI workflows. This lab is my playground for testing the limits of self-hosting and automation.

## My Philosophy in Action

I built and manage this entire environment solo, treating it with the same rigor as a professional data center. From a Synology NAS for secure storage to Raspberry Pi clusters for home automation, everything is containerized via Docker. By running local LLMs on NVIDIA and Apple hardware, I ensure that my AI experiments remain private and independent of third-party providers.

## The Hard Truths

Sovereignty comes with the price of responsibility. Managing your own "high-availability" setup means there is no support ticket to open when a volume fails at 2 AM. I have learned that while automation saves time, it also adds complexity that requires disciplined maintenance to keep the "lights on" without turning the hobby into a second full-time job.

> ### Lab Specifications
> 
> * **Compute:** Raspberry Pi, Nvidia Spark, Apple Hardware, and Cloud providers
> * **Storage:** Synology NAS x3
> * **Orchestration:** Docker Compose & Portainer
> * **Networking:** Cloudflair, Tailscale, Nginx