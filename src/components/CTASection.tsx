"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CTASection() {
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
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animated-dots opacity-15" />
      </div>

      {/* Animated Floating Blobs - Dora Style */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/8 rounded-full blur-3xl blob-animate morph-shape" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl blob-animate-2 morph-shape" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl blob-animate-3 morph-shape" />

      {/* Floating Particles */}
      <div className="particle w-2 h-2 bg-white/30 left-[15%]" style={{ animationDelay: '0s' }} />
      <div className="particle w-1 h-1 bg-white/40 left-[35%]" style={{ animationDelay: '4s' }} />
      <div className="particle w-3 h-3 bg-orange-400/30 left-[55%]" style={{ animationDelay: '8s' }} />
      <div className="particle w-2 h-2 bg-white/20 left-[75%]" style={{ animationDelay: '2s' }} />
      <div className="particle w-1 h-1 bg-white/50 left-[90%]" style={{ animationDelay: '6s' }} />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4 perspective-1000">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 text-balance leading-tight ${isVisible ? 'text-reveal' : 'opacity-0'}`}>
            Bereit für eine schnelle und stressfreie Entrümpelung?
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-white/85 mb-6 sm:mb-8 leading-relaxed ${isVisible ? 'text-reveal text-reveal-delay-1' : 'opacity-0'}`}>
            Kontaktieren Sie uns noch heute und erhalten Sie innerhalb von 24
            Stunden ein kostenloses, unverbindliches Angebot.
          </p>

          {/* Trust Points with stagger animation */}
          <div className={`flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-8 mb-8 sm:mb-10 ${isVisible ? 'stagger-children' : ''}`}>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/90 magnetic-hover">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0 breathe" />
              <span className="font-medium text-sm sm:text-base">Kostenlose Besichtigung</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/90 magnetic-hover">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0 breathe" />
              <span className="font-medium text-sm sm:text-base">Festpreisgarantie</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/90 magnetic-hover">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0 breathe" />
              <span className="font-medium text-sm sm:text-base">Schnelle Termine</span>
            </div>
          </div>

          {/* CTA Buttons with enhanced effects */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center ${isVisible ? 'text-reveal text-reveal-delay-3' : 'opacity-0'}`}>
            <Link href="/kontakt#contact-form" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 ripple shimmer group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Kostenlose Anfrage senden
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </Link>
            <a href="tel:+4991148007161" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all hover:scale-105 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Jetzt anrufen
                </span>
              </Button>
            </a>
          </div>

          {/* Phone Number Display with enhanced animation */}
          <div className={`mt-6 sm:mt-8 ${isVisible ? 'slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <a
              href="tel:+4991148007161"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base sm:text-lg group glow-pulse rounded-full px-4 py-2"
            >
              <Phone className="w-5 h-5 group-hover:animate-icon-float breathe" />
              <span className="font-semibold">0911-48007161</span>
            </a>
            <p className="text-white/60 text-xs sm:text-sm mt-2">
              Mo - Sa: 08:00 - 18:00 Uhr
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
