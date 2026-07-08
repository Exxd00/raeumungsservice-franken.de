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
import { useEffect, useRef, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-muted relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-48 h-48 bg-primary/8 rounded-full blur-3xl blob-animate morph-shape" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl blob-animate-2 morph-shape" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl animate-pulse-slow" />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4 glow-pulse shimmer ${isVisible ? 'scale-in' : 'opacity-0'}`}>
            <Check className="w-4 h-4 text-primary breathe" />
            <span className="text-primary font-medium text-sm">
              Ihre Vorteile
            </span>
          </div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance px-4 ${isVisible ? 'text-reveal text-reveal-delay-1' : 'opacity-0'}`}>
            Warum Sie sich für uns entscheiden sollten
          </h2>
          <p className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 ${isVisible ? 'text-reveal text-reveal-delay-2' : 'opacity-0'}`}>
            Wir arbeiten zuverlässig, diskret und termingerecht
          </p>
        </div>

        {/* Benefits Grid with stagger animation */}
        <div className={`grid grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6 mb-12 px-2 sm:px-4 ${isVisible ? 'stagger-children' : ''}`}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center group cursor-pointer magnetic-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl bg-card border border-border flex items-center justify-center mb-2 sm:mb-3 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 tilt-3d">
                  <Icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-primary group-hover:scale-110 transition-transform breathe" />
                </div>
                <span className="font-medium text-[11px] sm:text-xs md:text-sm leading-tight group-hover:text-primary transition-colors">{benefit.title}</span>
              </div>
            );
          })}
        </div>

        {/* CTA with enhanced animation */}
        <div className={`text-center px-4 ${isVisible ? 'slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <Link href="/kontakt#contact-form">
            <Button size="lg" className="cta-button ripple text-white font-bold rounded-full px-8 w-full sm:w-auto group">
              <span className="relative z-10 flex items-center">
                Kostenloses Angebot anfordern
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
