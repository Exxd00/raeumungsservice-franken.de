"use client";

import { MessageCircle, Eye, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Anruf & Beratung",
  },
  {
    number: 2,
    icon: Eye,
    title: "Kostenlose Besichtigung",
  },
  {
    number: 3,
    icon: Truck,
    title: "Schnelle Räumung",
  },
];

export function HowWeWork() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4 animate-fade-in">
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              So einfach geht's
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance px-4">
            In 3 einfachen Schritten zur Entrümpelung
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            In nur 3 Schritten zur schnellen Lösung Ihres Problems
          </p>
        </div>

        {/* Steps - Always 3 in a row */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-2 sm:px-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon with number badge */}
                <div className="relative mb-3 sm:mb-4">
                  <div className="w-14 h-14 sm:w-18 md:w-20 sm:h-18 md:h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                    <Icon className="w-7 h-7 sm:w-9 md:w-10 sm:h-9 md:h-10 text-primary" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 rounded-full bg-primary text-white text-xs sm:text-sm md:text-base font-bold flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>
                {/* Title */}
                <h3 className="font-bold text-xs sm:text-sm md:text-base leading-tight">{step.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
