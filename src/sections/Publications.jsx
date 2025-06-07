import React from "react";

const publications = [
  {
    title: "End-to-End CI/CD Mastery: Automating Angular Deployment with Docker, GitHub Actions, Teams Notifications, VPN, and SSH",
    date: "October 2023",
    url: "https://medium.com/@thilina01/end-to-end-ci-cd-automating-angular-deployment-with-docker-github-actions-teams-vpn-ssh-guide"
  },
  {
    title: "Deploying Multiple Containerized Angular Applications in different subdirectories of a single domain on a Docker Swarm Cluster Using NGINX",
    date: "July 2023",
    url: "https://medium.com/@thilina01/multiple-angular-apps-on-docker-swarm-subfolders-nginx-setup-guide"
  },
  {
    title: "Master the Art of Setting Up a Powerful Kubernetes Cluster on Red Hat Enterprise Linux: A Step-by-Step Guide",
    date: "June 2023",
    url: "https://medium.com/@thilina01/kubernetes-cluster-setup-rhel-guide"
  },
  {
    title: "Handling Spring Boot Microservice Log Files in Docker",
    date: "May 2020",
    url: "https://medium.com/@thilina01/spring-boot-logs-in-docker"
  },
  {
    title: "Linux Mint 19 — Stable & Production-ready Setup",
    date: "July 2018",
    url: "https://medium.com/@thilina01/linux-mint-19-setup"
  },
  {
    title: "Configuring a server to host apps on multiple technologies",
    date: "February 2017",
    url: "https://medium.com/@thilina01/multi-tech-app-server-setup"
  }
];

export default function Publications() {
  return (
    <section id="publications" className="px-4 md:px-16 lg:px-32 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Publications</h2>
      <ul className="space-y-6 text-lg">
        {publications.map((pub, idx) => (
          <li key={idx}>
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {pub.title}
            </a>
            <div className="text-sm text-slate-500 dark:text-slate-400">{pub.date}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
