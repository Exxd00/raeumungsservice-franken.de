"use client";

import { Shield, Star, MapPin, Clock, Sparkles } from "lucide-react";

const trustPoints = [
  {
    icon: MapPin,
    title: "Lokaler Fachbetrieb",
  },
  {
    icon: Clock,
    title: "Schnelle Anfahrt",
  },
  {
    icon: Sparkles,
    title: "Moderne Technik",
  },
];

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Zufriedene Kunden" },
  { value: "100%", label: "Entsorgungsgarantie" },
  { value: "4.9", label: "Kundenbewertung", icon: Star },
];

export function TrustSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              Ihre Vorteile
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance px-4">
            Warum Kunden uns wählen
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Vertrauen Sie auf jahrelange Erfahrung und modernste Technik
          </p>
        </div>

        {/* Trust Points - Always in row */}
        <div className="flex flex-row flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-x-8 md:gap-x-10 mb-12 sm:mb-16 px-4">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="flex items-center gap-2 group"
              >
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <span className="font-medium text-sm sm:text-base">{point.title}</span>
              </div>
            );
          })}
        </div>

        {/* Stats Bar - Always 4 in a row */}
        <div className="bg-primary rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 mx-2 sm:mx-0">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-0.5 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-1">
                  {stat.value}
                  {stat.icon && <stat.icon className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 fill-yellow-400 text-yellow-400" />}
                </div>
                <div className="text-white/80 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
