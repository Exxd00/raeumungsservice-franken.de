"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, Truck, Home, Box } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const title = service
    ? `${service} in ${city}`
    : `Entrümpelung & Wohnungsauflösung in ${city}`;

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Dots Pattern */}
        <div className="absolute inset-0 animated-dots opacity-10" />

        {/* Floating Blobs - Subtle */}
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-white/8 blob-animate morph-shape" />
        <div className="absolute top-[40%] right-[5%] w-[300px] h-[300px] bg-white/6 blob-animate-2 morph-shape" />
        <div className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] bg-white/5 blob-animate-3 morph-shape" />

        {/* Gradient Orbs - More subtle */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-white/6 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Clean */}
          <div className={`inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-5 py-2.5 mb-6 ${isLoaded ? 'text-reveal' : 'opacity-0'}`}>
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-lg shadow-green-400/50" />
            <span className="text-white/95 text-sm font-semibold tracking-wide">
              Jetzt Termin sichern - freie Kapazitäten
            </span>
          </div>

          {/* Main Heading with better contrast */}
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 text-shadow leading-tight px-2 ${isLoaded ? 'text-reveal text-reveal-delay-1' : 'opacity-0'}`}>
            <span className="block">
              {title}
            </span>
            <span className={`block text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-4 text-white/90 ${isLoaded ? 'text-reveal text-reveal-delay-2' : 'opacity-0'}`}>
              Innerhalb von <span className="text-white font-bold underline decoration-2 underline-offset-4">24 Stunden</span> – Festpreis <span className="text-white font-bold underline decoration-2 underline-offset-4">ohne versteckte Kosten</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className={`text-base sm:text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed px-4 ${isLoaded ? 'text-reveal text-reveal-delay-3' : 'opacity-0'}`}>
            Wir entrümpeln Wohnungen, Häuser, Keller und Nachlässe – smart,
            nachhaltig und zum Festpreis. Auf Wunsch übernehmen wir auch Ihren
            kompletten Umzug im Raum {city} und ganz Franken.
          </p>

          {/* Trust Points - Clean */}
          <div className={`flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-8 mb-10 px-4 ${isLoaded ? 'stagger-children' : ''}`}>
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

          {/* CTA Buttons - Elegant, slower animation */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4 ${isLoaded ? 'text-reveal text-reveal-delay-4' : 'opacity-0'}`}>
            <Link href="/kontakt#contact-form">
              <Button
                size="lg"
                className="cta-button text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full sm:w-auto group"
              >
                <span className="relative z-10 flex items-center">
                  Kostenloses Angebot anfordern
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
            <a href="tel:+4991148007161">
              <Button
                size="lg"
                className="cta-secondary font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full sm:w-auto group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Jetzt anrufen
                </span>
              </Button>
            </a>
          </div>

          {/* Services Grid - Elegant, minimal animation */}
          <div className={`grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto px-4 ${isLoaded ? 'text-reveal text-reveal-delay-5' : 'opacity-0'}`}>
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.name}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:bg-white/25 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-white" />
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm leading-tight">{svc.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Wave - Subtle animation */}
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
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
