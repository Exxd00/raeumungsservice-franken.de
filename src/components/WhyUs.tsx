"use client";

import {
  Eye,
  BadgeEuro,
  Calendar,
  Sparkles,
  Recycle,
  Coins,
  Check,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Kostenlose Besichtigung",
  },
  {
    icon: BadgeEuro,
    title: "Festpreis Garantie",
  },
  {
    icon: Calendar,
    title: "Schnelle Termine",
  },
  {
    icon: Sparkles,
    title: "Saubere Übergabe",
  },
  {
    icon: Recycle,
    title: "Fachgerechte Entsorgung",
  },
  {
    icon: Coins,
    title: "Wertanrechnung",
  },
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4 animate-fade-in">
            <Check className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              Ihre Vorteile
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance px-4">
            Warum Sie sich für uns entscheiden sollten
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Wir arbeiten zuverlässig, diskret und termingerecht
          </p>
        </div>

        {/* Benefits Grid - Always 3 per row on mobile, 6 on desktop */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6 mb-12 px-2 sm:px-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl bg-card border border-border flex items-center justify-center mb-2 sm:mb-3 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
                  <Icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-primary" />
                </div>
                <span className="font-medium text-[11px] sm:text-xs md:text-sm leading-tight">{benefit.title}</span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <Link href="/kontakt">
            <Button size="lg" className="cta-button text-white font-bold rounded-full px-8 w-full sm:w-auto">
              Kostenloses Angebot anfordern
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
