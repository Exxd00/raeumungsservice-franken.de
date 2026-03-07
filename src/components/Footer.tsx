"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

const quickLinks = [
  { name: "Entrümpelung", href: "/leistungen/entruempelung" },
  { name: "Wohnungsauflösung", href: "/leistungen/wohnungsaufloesung" },
  { name: "Haushaltsauflösung", href: "/leistungen/haushaltsaufloesung" },
  { name: "Nachlassauflösung", href: "/leistungen/nachlassaufloesung" },
  { name: "Kellerentrümpelung", href: "/leistungen/kellerentruempelung" },
];

const regions = [
  { name: "Nürnberg", href: "/staedte/nuernberg" },
  { name: "Fürth", href: "/staedte/fuerth" },
  { name: "Erlangen", href: "/staedte/erlangen" },
  { name: "Schwabach", href: "/staedte/schwabach" },
  { name: "Alle Städte", href: "/staedte" },
];

const legalLinks = [
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
  { name: "AGB", href: "/agb" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">
                  Räumungsservice
                </span>
                <span className="text-sm font-medium leading-tight text-primary">
                  Franken
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ihr zuverlässiger Partner für Entrümpelung, Wohnungsauflösung und
              Haushaltsauflösung in Nürnberg und ganz Franken.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+4991148007161"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>0911-48007161</span>
              </a>
              <a
                href="mailto:info@raeumungsservice-franken.de"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@raeumungsservice-franken.de</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>90402 Nürnberg, Bayern</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>Mo - Sa: 08:00 - 18:00 Uhr</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Unsere Leistungen</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h3 className="font-bold text-lg mb-6">Einsatzgebiete</h3>
            <ul className="space-y-3">
              {regions.map((region) => (
                <li key={region.name}>
                  <Link
                    href={region.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {region.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="font-bold text-lg mb-6">Jetzt anfragen</h3>
            <p className="text-gray-400 mb-6">
              Kostenlose Besichtigung und unverbindliches Angebot innerhalb von
              24 Stunden.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full transition-colors"
            >
              Anfrage senden
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
            <a
              href="tel:+4991148007161"
              className="inline-flex items-center justify-center w-full border border-gray-700 hover:border-primary hover:text-primary text-white font-semibold py-3 px-6 rounded-full transition-colors mt-3"
            >
              <Phone className="w-5 h-5 mr-2" />
              Anrufen
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Räumungsservice Franken. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
