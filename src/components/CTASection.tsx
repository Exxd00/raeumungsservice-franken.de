"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animated-dots opacity-10" />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow animation-delay-4000" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 text-balance leading-tight">
            Bereit für eine schnelle und stressfreie Entrümpelung?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
            Kontaktieren Sie uns noch heute und erhalten Sie innerhalb von 24
            Stunden ein kostenloses, unverbindliches Angebot.
          </p>

          {/* Trust Points - Always in row */}
          <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-8 mb-8 sm:mb-10">
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/90">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Kostenlose Besichtigung</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/90">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Festpreisgarantie</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/90">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Schnelle Termine</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/kontakt" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Kostenlose Anfrage senden
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+4991148007161" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen
              </Button>
            </a>
          </div>

          {/* Phone Number Display */}
          <div className="mt-6 sm:mt-8">
            <a
              href="tel:+4991148007161"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base sm:text-lg group"
            >
              <Phone className="w-5 h-5 group-hover:animate-icon-float" />
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
