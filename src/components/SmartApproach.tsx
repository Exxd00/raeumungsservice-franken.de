"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Video,
  Coins,
  Recycle,
  Route,
  ArrowRight,
  Package,
  Truck,
  Plus,
  CheckCircle2,
} from "lucide-react";

const pillars = [
  {
    icon: Video,
    title: "Digitale Besichtigung",
    description:
      "Senden Sie uns einfach Fotos oder ein kurzes Video – wir erstellen Ihre Ersteinschätzung in Minuten, ganz ohne Wartezeit.",
    stat: "in 5 Min.",
  },
  {
    icon: Coins,
    title: "Intelligente Wertanrechnung",
    description:
      "Wir erkennen verwertbare Möbel, Antiquitäten & Wertstoffe und rechnen sie direkt an – das senkt spürbar Ihre Kosten.",
    stat: "bis −40 %",
  },
  {
    icon: Recycle,
    title: "Nachhaltige Verwertung",
    description:
      "Wiederverwenden, spenden und recyceln statt einfach wegwerfen. Ein Großteil des Hausrats bekommt ein zweites Leben.",
    stat: "80 % verwertet",
  },
  {
    icon: Route,
    title: "Effiziente Abläufe",
    description:
      "Durchdachte Planung, eingespielte Teams und optimierte Routen – so räumen wir schnell, sauber und immer termintreu.",
    stat: "in 24 Std.",
  },
];

export function SmartApproach() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950"
    >
      {/* Ambient glow + texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-emerald-500/15 rounded-full blur-3xl blob-animate morph-shape" />
        <div className="absolute -bottom-24 -right-16 w-[380px] h-[380px] bg-orange-500/10 rounded-full blur-3xl blob-animate-2 morph-shape" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute inset-0 grid-pattern opacity-[0.15]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-2 mb-5 ${
              isVisible ? "scale-in" : "opacity-0"
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-400 breathe" />
            <span className="text-emerald-300 font-semibold text-sm tracking-wide">
              Intelligent &amp; nachhaltig
            </span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-balance leading-tight ${
              isVisible ? "text-reveal text-reveal-delay-1" : "opacity-0"
            }`}
          >
            Entrümpeln – aber{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-orange-300 bg-clip-text text-transparent">
              smart.
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg text-slate-300 leading-relaxed ${
              isVisible ? "text-reveal text-reveal-delay-2" : "opacity-0"
            }`}
          >
            Wir setzen auf einen durchdachten, digitalen Prozess: schnelle Einschätzung,
            faire Wertanrechnung und maximale Wiederverwertung. Das spart Ihnen Zeit,
            Geld und schont die Umwelt.
          </p>
        </div>

        {/* Pillars */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${
            isVisible ? "stagger-children" : "opacity-0"
          }`}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col rounded-2xl p-5 sm:p-6 bg-white/[0.04] backdrop-blur-sm border border-white/10 transition-all duration-500 hover:bg-white/[0.07] hover:border-emerald-400/40 hover:-translate-y-1.5"
              >
                {/* Step number */}
                <span className="absolute top-4 right-5 text-5xl font-extrabold text-white/[0.06] group-hover:text-emerald-400/20 transition-colors select-none">
                  {index + 1}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-emerald-500/25 to-emerald-500/5 border border-emerald-400/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
                </div>

                {/* Stat pill */}
                <span className="inline-flex self-start items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {pillar.stat}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Smart-Kombi: Entrümpelung + Umzug */}
        <div
          className={`mt-8 sm:mt-10 ${
            isVisible ? "slide-up-fade" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-r from-emerald-500/60 via-orange-500/40 to-emerald-500/60">
            <div className="rounded-3xl bg-slate-900/85 backdrop-blur-md p-6 sm:p-8 md:p-10">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Combo visual */}
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center">
                      <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                    </div>
                    <span className="text-xs font-medium text-slate-300">Entrümpelung</span>
                  </div>
                  <Plus className="w-6 h-6 text-orange-400" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-orange-500/15 border border-orange-400/25 flex items-center justify-center">
                      <Package className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
                    </div>
                    <span className="text-xs font-medium text-slate-300">Umzug</span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-400/10 border border-orange-400/20 px-3 py-1 mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-orange-300" />
                    <span className="text-xs font-semibold text-orange-200 tracking-wide">
                      Neu: Smart-Kombi
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 text-balance">
                    Entrümpelung &amp; Umzug – alles aus einer Hand
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4 max-w-2xl">
                    Sie ziehen um und möchten die alte Immobilie besenrein hinterlassen?
                    Wir übernehmen Ihren kompletten Umzug und entrümpeln parallel –
                    ein Ansprechpartner, ein Termin, ein fairer Festpreis.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2">
                    {["Ein Ansprechpartner", "Zeit & Kosten sparen", "Termintreu & versichert"].map(
                      (item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
                  <Link href="/kontakt#contact-form" className="w-full">
                    <Button
                      size="lg"
                      className="w-full cta-button text-white font-bold rounded-full px-7 group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Angebot anfordern
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                  <Link
                    href="/leistungen/umzug"
                    className="text-center text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
                  >
                    Mehr zum Umzug-Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
