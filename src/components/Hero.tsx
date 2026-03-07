"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Truck, Home, Box } from "lucide-react";

const trustPoints = [
  "Kostenlose Besichtigung",
  "Transparenter Festpreis",
  "Schnelle Termine",
];

const services = [
  {
    name: "Nachlassauflösung",
    icon: Box,
  },
  {
    name: "Wohnungsauflösung",
    icon: Home,
  },
  {
    name: "Haushaltsauflösung",
    icon: Truck,
  },
];

interface HeroProps {
  city?: string;
  service?: string;
}

export function Hero({ city = "Nürnberg", service }: HeroProps) {
  const title = service
    ? `${service} in ${city}`
    : `Entrümpelung & Wohnungsauflösung in ${city}`;

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animated-dots opacity-10" />
      </div>

      {/* Subtle Decorative Circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

      <div className="container-custom relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Jetzt Termin sichern - freie Kapazitäten
            </span>
          </div>

          {/* Main Heading - Fixed text wrapping */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 text-shadow leading-tight px-2">
            <span className="block">{title}</span>
            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-4 text-white/90">
              Innerhalb von <span className="text-orange-400 font-bold">24 Stunden</span> – Festpreis <span className="text-orange-400 font-bold">ohne versteckte Kosten</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Wir räumen Wohnungen, Häuser, Keller und Nachlässe professionell im
            Raum {city} und ganz Franken.
          </p>

          {/* Trust Points - Always in row */}
          <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-8 mb-10 px-4">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-1.5 sm:gap-2 text-white/90"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                <span className="text-sm sm:text-base font-medium">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <Link href="/kontakt">
              <Button
                size="lg"
                className="cta-button pulse-cta text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full sm:w-auto"
              >
                Kostenloses Angebot anfordern
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+4991148007161">
              <Button
                size="lg"
                className="cta-secondary font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen
              </Button>
            </a>
          </div>

          {/* Services Grid - Always 3 in a row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto px-4">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.name}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl bg-white/15 flex items-center justify-center mb-2 group-hover:bg-white/25 transition-all duration-500">
                    <Icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-white" />
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm leading-tight">{svc.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
