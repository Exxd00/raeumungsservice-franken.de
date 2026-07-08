"use client";

import { Shield, Star, MapPin, Clock, Sparkles, TrendingUp, Award, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  { value: "15+", label: "Jahre Erfahrung", icon: Award },
  { value: "500+", label: "Zufriedene Kunden", icon: Users },
  { value: "100%", label: "Entsorgungsgarantie", icon: Shield },
  { value: "4.9", label: "Kundenbewertung", icon: Star, showStar: true },
];

export function TrustSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
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

  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return;

    const targets = [15, 500, 100, 4.9];
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters(targets.map(target =>
        target < 10 ? Math.round(target * easeOut * 10) / 10 : Math.round(target * easeOut)
      ));

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-card relative overflow-hidden">
      {/* Elegant animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs with different sizes and speeds */}
        <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-primary/8 rounded-full blur-3xl blob-animate morph-shape" />
        <div className="absolute bottom-[15%] left-[5%] w-96 h-96 bg-primary/6 rounded-full blur-3xl blob-animate-2 morph-shape" />
        <div className="absolute top-[50%] left-[40%] w-64 h-64 bg-orange-400/5 rounded-full blur-3xl blob-animate-3 morph-shape" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Floating particles */}
        <div className="particle w-1.5 h-1.5 bg-primary/40 left-[20%]" style={{ animationDelay: '0s', animationDuration: '20s' }} />
        <div className="particle w-1 h-1 bg-primary/30 left-[50%]" style={{ animationDelay: '5s', animationDuration: '25s' }} />
        <div className="particle w-2 h-2 bg-orange-400/30 left-[80%]" style={{ animationDelay: '10s', animationDuration: '22s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header with elegant reveal */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 bg-accent rounded-full px-5 py-2.5 mb-5 glow-pulse shimmer ${isVisible ? 'scale-in' : 'opacity-0'}`}>
            <Shield className="w-4 h-4 text-primary breathe" />
            <span className="text-primary font-semibold text-sm tracking-wide">
              Ihre Vorteile
            </span>
          </div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-balance px-4 ${isVisible ? 'text-reveal text-reveal-delay-1' : 'opacity-0'}`}>
            <span className="gradient-text">Warum Kunden uns wählen</span>
          </h2>
          <p className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed ${isVisible ? 'text-reveal text-reveal-delay-2' : 'opacity-0'}`}>
            Vertrauen Sie auf jahrelange Erfahrung und modernste Technik
          </p>
        </div>

        {/* Trust Points - Enhanced with hover effects */}
        <div className={`flex flex-row flex-wrap justify-center gap-x-5 gap-y-4 sm:gap-x-10 md:gap-x-14 mb-12 sm:mb-16 px-4 ${isVisible ? 'stagger-children' : ''}`}>
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="flex items-center gap-2.5 group cursor-pointer magnetic-hover"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="p-2 sm:p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 tilt-3d">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform breathe" />
                </div>
                <span className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors">{point.title}</span>
              </div>
            );
          })}
        </div>

        {/* Stats Bar - Enhanced with animated counters and gradients */}
        <div className={`relative mx-2 sm:mx-0 ${isVisible ? 'slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-orange-400 to-primary rounded-2xl sm:rounded-3xl opacity-75 blur-sm animate-gradient" />

          <div className="relative bg-primary rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 lg:p-11 overflow-hidden">
            {/* Inner glow effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-orange-400/20 rounded-full blur-2xl" />
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-5 md:gap-8 relative z-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center group cursor-default"
                  >
                    {/* Animated icon */}
                    <div className="flex justify-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                    </div>

                    <div className="flex items-center justify-center gap-0.5 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-1.5 group-hover:scale-105 transition-transform">
                      {index === 3 ? counters[index].toFixed(1) : `${counters[index]}${stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}`}
                      {stat.showStar && <Star className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 fill-yellow-400 text-yellow-400 breathe" />}
                    </div>
                    <div className="text-white/80 text-[10px] sm:text-xs md:text-sm font-medium leading-tight tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
