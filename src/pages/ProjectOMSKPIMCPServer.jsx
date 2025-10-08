import React from "react";
import PageLayout from "../layouts/PageLayout";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import data from "../data/projects/oms-kpi-mcp-server.json";

export default function ProjectOMSKPIMCPServer() {
  const features = data.features;
  const outcomes = [
    {
      goal: "AI Chat Interface",
      impact: "Natural language access to complex manufacturing data reduces training time by 90%",
    },
    { 
      goal: "Real-Time Insights", 
      impact: "Instant conversational queries enable faster decision-making and operational efficiency" 
    },
    {
      goal: "Market Differentiation",
      impact: "First-to-market AI chat agent for manufacturing KPIs creates competitive advantage",
    },
    {
      goal: "Cost Reduction",
      impact: "Automated analysis reduces manual KPI monitoring costs by 80%",
    },
    {
      goal: "Scalable Architecture",
      impact: "Enterprise-ready solution supporting multi-site manufacturing operations",
    },
    {
      goal: "Revenue Opportunity",
      impact: "SaaS model potential with $50M+ addressable market in manufacturing AI",
    },
  ];
  const modules = [
    "AI Chat Agent Interface",
    "MCP Protocol Server",
    "Real-Time Data Processing Engine",
    "Natural Language Query Processor",
    "Intelligent Analysis Workflows",
    "Multi-Source Integration Layer",
    "Automated Reporting & Alerts",
    "Enterprise Authentication System",
  ];
  const techSnapshot = Object.fromEntries(
    data.techStack.map(({ layer, tech }) => [layer, tech])
  );

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          🤖 OMS KPI AI Chat Agent
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          Revolutionary AI-powered chat agent providing real-time conversational access to manufacturing KPIs.
        </p>
        <p className="mt-4 italic opacity-80">
          Transform complex manufacturing data into natural language conversations for instant insights.
        </p>
      </section>

      {/* Screenshot Carousel - Removed for now */}

      {/* AI Tools Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">🛠️ Technologies & Tools</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">🤖 AI Integration</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• OpenAI API for chat completions</li>
              <li>• Natural language query processing</li>
              <li>• Real-time AI chat interface</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">🔗 MCP Protocol</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• @modelcontextprotocol/sdk</li>
              <li>• 9 specialized MCP tools</li>
              <li>• Tool definitions and handlers</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-3">🗄️ Database</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• MySQL2 driver</li>
              <li>• SQL query builders</li>
              <li>• Entity relationship handling</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">📝 Validation</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• Zod schema validation</li>
              <li>• Type-safe data handling</li>
              <li>• Input parameter validation</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900 dark:to-cyan-900 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-3">🧠 NLP Processing</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• Natural.js for text analysis</li>
              <li>• Compromise for NLP tasks</li>
              <li>• Advanced text processing</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-3">📊 Visualization</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• Chart.js for data charts</li>
              <li>• Canvas for image generation</li>
              <li>• KPI data visualization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Capabilities
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Value Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">💰 Market Value & Opportunity</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">Market Size</h3>
            <p className="text-gray-700 dark:text-gray-300">$50M+ addressable market in manufacturing AI solutions</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Competitive Edge</h3>
            <p className="text-gray-700 dark:text-gray-300">First-to-market AI chat agent for manufacturing KPIs</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">ROI Potential</h3>
            <p className="text-gray-700 dark:text-gray-300">80% reduction in manual KPI analysis costs</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-3">SaaS Model</h3>
            <p className="text-gray-700 dark:text-gray-300">Recurring revenue potential with enterprise subscriptions</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-3">Enterprise Ready</h3>
            <p className="text-gray-700 dark:text-gray-300">Scalable architecture supporting multi-site operations</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">Time to Market</h3>
            <p className="text-gray-700 dark:text-gray-300">Rapid deployment with Docker/Kubernetes infrastructure</p>
          </div>
        </div>
      </section>

      {/* Outcomes Table */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Business Impact</h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Strategic Goal</th>
                <th className="py-2 px-4 border-b">Operational Impact</th>
              </tr>
            </thead>
            <tbody>
              {outcomes.map((o, i) => (
                <tr
                  key={i}
                  className={
                    i % 2 === 0
                      ? "bg-white dark:bg-gray-900"
                      : "bg-gray-50 dark:bg-gray-800"
                  }
                >
                  <td className="py-2 px-4">{o.goal}</td>
                  <td className="py-2 px-4 font-semibold">{o.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Modules / Components */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">System Components</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="px-4 py-3 bg-blue-50 dark:bg-indigo-900 rounded-lg shadow"
            >
              <span className="text-blue-700 dark:text-blue-200 font-medium">
                {mod}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Highlights */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          🏗️ Architecture Highlights
        </h2>
        <ul className="list-disc list-inside max-w-4xl mx-auto space-y-2 text-lg text-slate-700 dark:text-slate-300">
          {data.architecture.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      {/* CI/CD */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          🚀 Deployment & DevOps
        </h2>
        <ul className="list-disc list-inside max-w-4xl mx-auto space-y-2 text-lg text-slate-700 dark:text-slate-300">
          {data.cicd.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      {/* Takeaways */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          💡 Learning Takeaways
        </h2>
        <ul className="list-disc list-inside max-w-4xl mx-auto space-y-2 text-lg text-slate-700 dark:text-slate-300">
          {data.takeaways.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      {/* Technical Snapshot */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Stack
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {Object.entries(techSnapshot).map(([key, val], i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow"
            >
              <h4 className="font-semibold mb-2">{key}</h4>
              <p className="text-gray-600 dark:text-gray-300">{val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white text-center px-6">
        <h3 className="text-2xl font-bold mb-4">
          Experience the Future of Manufacturing AI
        </h3>
        <p className="text-lg mb-6 opacity-90">
          Join the revolution in manufacturing data access through conversational AI
        </p>
        <a
          href="mailto:thilina01@apache.org?subject=OMS KPI AI Chat Agent Demo Request&body=Hi Thilina,%0D%0A%0D%0AI'm interested in learning more about the OMS KPI AI Chat Agent and would like to request a demo.%0D%0A%0D%0APlease let me know when you're available for a demonstration.%0D%0A%0D%0AThank you!"
          className="inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        >
          Request Demo
        </a>
        <p className="mt-6 italic opacity-90">{data.sourceAccess}</p>
      </section>
      <Footer />
    </PageLayout>
  );
}
