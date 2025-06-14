import React from "react";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import contact from "../data/contact.json";
import site from "../data/site.json";

export default function ContactSection() {
  return (
    <footer id="contact" className="mt-24 border-t border-slate-200 dark:border-slate-700 pt-10 px-6">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-2">
          <p className="flex items-center gap-2"><Phone size={18}/> {contact.phone}</p>
          <p className="flex items-center gap-2"><Mail size={18}/> {contact.email}</p>
          <p className="flex items-center gap-2"><MapPin size={18}/> {contact.location}</p>
        </div>
        <div className="flex justify-center gap-6">
          <a href={contact.github} target="_blank" rel="noreferrer"><Github size={24} /></a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
        </div>
      </div>
      <p className="text-center mt-10 text-xs">© {new Date().getFullYear()} {site.copyright}</p>
    </footer>
  );
}
