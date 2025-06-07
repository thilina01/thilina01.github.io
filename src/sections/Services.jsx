import React from "react";
import Card from "../components/Card";

export default function Services() {
  return (
    <section id="services" className="grid gap-8 px-4 md:px-16 lg:px-32 md:grid-cols-2 lg:grid-cols-3">
      <Card title="AI & Machine Learning" text="Chatbots (Rasa, LangChain), Transformer models (T5, LoRA), predictive analytics using Ray, DeepHyper." />
      <Card title="Cloud-Native Development" text="Microservices, Kubernetes, CI/CD with GitHub/GitLab Actions, scalable infrastructure on AWS & GCP." />
      <Card title="DevOps & Automation" text="Terraform, Ansible, Docker, Prometheus, Grafana for full lifecycle automation and observability." />
      <Card title="Full-Stack Engineering" text="Spring Boot, Angular, FastAPI, Kotlin for enterprise-grade apps." />
      <Card title="Open Source Leadership" text="Apache NetBeans PMC Member. Mentor and contributor to global OSS." />
      <Card title="Training & Thought Leadership" text="Writer/speaker on CI/CD, AI, Kubernetes. 15k+ global reads." />
    </section>
  );
}
