## The Backstory

My homelab is more than a hobby. It is a dedicated mission for digital sovereignty and local-first infrastructure. In an era of centralized clouds, I wanted to prove that I could maintain full control over my data, storage, and AI workflows. This lab is my playground for testing the limits of self-hosting and automation.

## My Philosophy in Action

I built and manage this entire environment solo, treating it with the same rigor as a professional data center. From a Synology NAS for secure storage to Raspberry Pi clusters for home automation, everything is containerized and orchestrated via Docker. By deploying local LLMs on specialized hardware, I maintain a private, high-performance environment for AI experimentation, minimizing reliance on third-party providers while benchmarking against Frontier models.

## The Hard Truths

Sovereignty comes with the price of responsibility. Managing your own "high-availability" setup means there is no support ticket to open when a volume fails at 2 AM. I have learned that while automation saves time, it also adds complexity that requires disciplined maintenance to keep the "lights on" without turning the hobby into a second full-time job.

> ### Lab Specifications
> 
> * **Compute:** Raspberry Pi, Nvidia DGX, Apple Silicon, and Hybrid Cloud nodes
> * **Storage:** Triple Synology NAS Array (RAID/Off-site redundancy)
> * **Orchestration:** Docker Compose & Portainer
> * **Local AI:** Ollama, Llama.cpp, Dify, OpenWebUI, OpenCode
> * **Hybrid AI:** ClaudeCode, Gemini, GitHub Copilot, CursorAI
> * **Networking:** Cloudflare, Tailscale, Nginx Reverse Proxy