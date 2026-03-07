import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Star, Award, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen - Unsere Arbeit, Ihre Zufriedenheit",
  description: "Sehen Sie unsere erfolgreich durchgeführten Entrümpelungen und lesen Sie, was unsere Kunden über uns sagen.",
};

export default function ReferenzenPage() {
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
              Unsere Referenzen
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
              Überzeugen Sie sich von unserer Arbeit - echte Projekte, echte
              Kundenstimmen, echte Ergebnisse.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-base text-muted-foreground">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-base text-muted-foreground">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">4.9</div>
              <div className="text-xs sm:text-base text-muted-foreground">Durchschnittliche Bewertung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      <CTASection />
    </>
  );
}
