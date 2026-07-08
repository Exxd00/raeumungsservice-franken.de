import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home, Phone, Clock, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vielen Dank für Ihre Anfrage",
  description: "Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 bg-muted">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Vielen Dank für Ihre Anfrage!
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei
            Ihnen. In der Regel antworten wir innerhalb weniger Stunden.
          </p>

          {/* What happens next */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-8 text-left">
            <h2 className="font-bold text-xl mb-6 text-center">
              Was passiert als Nächstes?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Wir prüfen Ihre Anfrage</h3>
                  <p className="text-muted-foreground text-sm">
                    Unser Team schaut sich Ihre Anfrage an und bereitet ein
                    passendes Angebot vor.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Wir kontaktieren Sie</h3>
                  <p className="text-muted-foreground text-sm">
                    Sie erhalten einen Anruf oder eine E-Mail mit ersten
                    Informationen und Terminvorschlägen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Kostenlose Besichtigung</h3>
                  <p className="text-muted-foreground text-sm">
                    Wir vereinbaren einen Termin für eine unverbindliche
                    Besichtigung vor Ort.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-accent rounded-2xl p-6 mb-8">
            <p className="font-semibold mb-4">
              Sie möchten nicht warten? Rufen Sie uns direkt an:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+4991148007161"
                className="flex items-center gap-2 text-primary font-bold text-lg hover:underline"
              >
                <Phone className="w-5 h-5" />
                0911-48007161
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                Mo - Sa: 08:00 - 18:00 Uhr
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link href="/">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 rounded-full"
            >
              <Home className="w-5 h-5 mr-2" />
              Zurück zur Startseite
            </Button>
          </Link>
        </div>
      </div>

      {/* Conversion Tracking Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined' && window.dataLayer) {
              window.dataLayer.push({
                event: 'thank_you_page',
                conversion_type: 'lead'
              });
            }
          `,
        }}
      />
    </section>
  );
}
