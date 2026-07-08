"use client";

import { MessageCircle, Eye, Truck, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-card relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-400/5 rounded-full blur-3xl blob-animate-2 morph-shape" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-primary/5 rounded-full blur-3xl blob-animate morph-shape" />

        {/* Animated dots */}
        <div className="absolute inset-0 animated-dots opacity-5" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4 glow-pulse shimmer ${isVisible ? 'scale-in' : 'opacity-0'}`}>
            <ArrowRight className="w-4 h-4 text-primary breathe" />
            <span className="text-primary font-medium text-sm">
              So einfach geht's
            </span>
          </div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance px-4 ${isVisible ? 'text-reveal text-reveal-delay-1' : 'opacity-0'}`}>
            In 3 einfachen Schritten zur Entrümpelung
          </h2>
          <p className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 ${isVisible ? 'text-reveal text-reveal-delay-2' : 'opacity-0'}`}>
            In nur 3 Schritten zur schnellen Lösung Ihres Problems
          </p>
        </div>

        {/* Steps with enhanced animations */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-2 sm:px-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`flex flex-col items-center text-center group cursor-pointer float-icon ${isVisible ? 'scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.3 + index * 0.2}s` }}
              >
                {/* Icon with number badge */}
                <div className="relative mb-3 sm:mb-4">
                  <div className="w-14 h-14 sm:w-18 md:w-20 sm:h-18 md:h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/25 transition-all duration-500 group-hover:scale-110 tilt-3d">
                    <Icon className="w-7 h-7 sm:w-9 md:w-10 sm:h-9 md:h-10 text-primary group-hover:scale-110 transition-transform breathe" />
                  </div>
                  {/* Animated number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 rounded-full bg-primary text-white text-xs sm:text-sm md:text-base font-bold flex items-center justify-center shadow-lg animate-glow group-hover:scale-125 transition-transform">
                    {step.number}
                  </div>

                  {/* Connection line (not on last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden sm:block absolute top-1/2 left-full w-[calc(100%+1.5rem)] md:w-[calc(100%+2rem)] h-0.5 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 -translate-y-1/2 shimmer" />
                  )}
                </div>
                {/* Title */}
                <h3 className="font-bold text-xs sm:text-sm md:text-base leading-tight group-hover:text-primary transition-colors">{step.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
