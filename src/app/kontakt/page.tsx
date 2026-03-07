import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Kostenlose Anfrage senden",
  description: "Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot. Schnelle Rückmeldung garantiert.",
};

export default function KontaktPage() {
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
              Kontaktieren Sie uns
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
              Haben Sie Fragen oder möchten Sie ein kostenloses Angebot? Wir
              sind für Sie da - schnell und unkompliziert.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-8 sm:py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {/* Phone */}
            <a
              href="tel:+4991148007161"
              className="bg-muted rounded-2xl p-4 sm:p-6 text-center hover:bg-accent hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary transition-colors">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-sm sm:text-lg mb-1">Telefon</h3>
              <p className="text-primary font-semibold text-xs sm:text-base">0911-48007161</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                Direkter Draht zu uns
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/4991148007161"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted rounded-2xl p-4 sm:p-6 text-center hover:bg-accent hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#25D366] transition-colors">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#25D366] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-sm sm:text-lg mb-1">WhatsApp</h3>
              <p className="text-[#25D366] font-semibold text-xs sm:text-base">Nachricht senden</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                Schnell und unkompliziert
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@raeumungsservice-franken.de"
              className="bg-muted rounded-2xl p-4 sm:p-6 text-center hover:bg-accent hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary transition-colors">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-sm sm:text-lg mb-1">E-Mail</h3>
              <p className="text-primary font-semibold text-xs sm:text-sm break-all">
                info@raeumungsservice-franken.de
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                Schreiben Sie uns
              </p>
            </a>

            {/* Opening Hours */}
            <div className="bg-muted rounded-2xl p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-bold text-sm sm:text-lg mb-1">Öffnungszeiten</h3>
              <p className="text-primary font-semibold text-xs sm:text-base">Mo - Sa</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                08:00 - 18:00 Uhr
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Address Section */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                Unser Standort
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Wir sind zentral in Nürnberg ansässig und bedienen die gesamte
                Region Franken. Von hier aus erreichen wir Sie schnell und
                zuverlässig.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">Adresse</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Räumungsservice Franken
                      <br />
                      Hauptstraße 1<br />
                      90402 Nürnberg
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">Telefon</h3>
                    <a
                      href="tel:+4991148007161"
                      className="text-primary hover:underline text-xs sm:text-sm"
                    >
                      0911-48007161
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">E-Mail</h3>
                    <a
                      href="mailto:info@raeumungsservice-franken.de"
                      className="text-primary hover:underline text-xs sm:text-sm"
                    >
                      info@raeumungsservice-franken.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-30" />
                <p className="text-sm sm:text-base">Karte wird geladen...</p>
                <p className="text-xs sm:text-sm">
                  Nürnberg, Bayern
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
