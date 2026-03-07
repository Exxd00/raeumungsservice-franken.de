import Link from "next/link";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Truck, Home, Box, Heart, Layers, Car, Trash, Shield, Building, Zap, Coins, Leaf, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Unsere Leistungen - Entrümpelung, Wohnungsauflösung & mehr",
  description: "Entdecken Sie unsere Dienstleistungen: Entrümpelung, Wohnungsauflösung, Haushaltsauflösung, Nachlassauflösung und mehr in Nürnberg und Franken.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  truck: Truck,
  home: Home,
  box: Box,
  heart: Heart,
  layers: Layers,
  car: Car,
  trash: Trash,
  shield: Shield,
  building: Building,
  zap: Zap,
  coins: Coins,
  leaf: Leaf,
  sparkles: Sparkles,
};

export default function LeistungenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-pattern" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 text-balance">
              Unsere Leistungen
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
              Von der Entrümpelung bis zur kompletten Haushaltsauflösung - wir bieten Ihnen alle Dienstleistungen rund um die Räumung aus einer Hand.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Box;
              return (
                <Link
                  key={service.slug}
                  href={`/leistungen/${service.slug}`}
                  className="group"
                >
                  <div className="bg-muted rounded-2xl p-5 sm:p-6 h-full transition-all duration-300 hover:bg-accent hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-primary/20">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary transition-colors">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-sm sm:text-base mb-4 leading-relaxed">
                      <span className="font-bold group-hover:text-primary transition-colors">{service.name}</span>
                      <span className="text-muted-foreground"> - {service.shortDescription}</span>
                    </p>
                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 sm:py-12 bg-muted">
        <div className="container-custom">
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Sie wissen nicht, welche Leistung Sie brauchen?
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Kein Problem! Rufen Sie uns an und wir beraten Sie kostenlos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
              <a href="tel:+4991148007161" className="w-full sm:w-auto">
                <Button size="lg" className="w-full cta-button text-white font-semibold rounded-full px-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </Button>
              </a>
              <Link href="/kontakt" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full font-semibold rounded-full px-6">
                  Anfrage senden
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
