import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import site from "../data/site.json";

export default function Footer() {
  return (
<footer className="mt-12 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-4 md:px-16 lg:px-32 py-10 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold mb-2">{site.title}</h2>
          <p className="text-sm">
            Building systems that think. Focused on AI, automation, and software craftsmanship.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href={`mailto:${site.email}`} className="hover:text-blue-500">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href={`tel:${site.phone.replace(/ /g, "")}`} className="hover:text-blue-500">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <address className="not-italic">
                {site.address}
              </address>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex gap-4 mt-2">
            <a href={site.social.github} target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} {site.copyright}
      </div>
    </footer>
  );
}
