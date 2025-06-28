import React from "react";
import PageLayout from "../layouts/PageLayout";
import ProjectPageLayout from "../components/ProjectPageLayout";
import ContactSection from "../sections/ContactSection";
import data from "../data/projects/status-monitor.json";

export default function ProjectStatusMonitor() {
  return (
    <PageLayout>
      <ProjectPageLayout project={data} />
      <ContactSection />
    </PageLayout>
  );
}
