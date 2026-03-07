import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { cities } from "@/data/cities";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Truck,
  Home,
  Box,
  Heart,
  Layers,
  Car,
  Trash,
  Shield,
  Building,
  Zap,
  Coins,
  Leaf,
  Sparkles,
  MapPin,
} from "lucide-react";
import type { Metadata } from "next";

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

type PageParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: "Service nicht gefunden",
    };
  }

  return {
    title: `${service.name} in Nürnberg und Franken`,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} | Räumungsservice Franken`,
      description: service.shortDescription,
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.slug);
  const IconComponent = iconMap[service.icon] || Box;
  const nearbyCities = cities.slice(0, 12);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-pattern" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 text-balance">
              {service.name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 sm:mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="w-full sm:w-auto cta-button pulse-cta text-white font-bold px-6 sm:px-8 py-5 sm:py-6 rounded-full"
                >
                  Kostenloses Angebot anfordern
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+4991148007161">
                <Button
                  size="lg"
                  className="w-full sm:w-auto cta-secondary font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Content */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                {service.name} vom Profi
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <h3 className="font-bold text-lg sm:text-xl mb-4">Das bieten wir Ihnen:</h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Keywords as Tags */}
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-accent rounded-full text-xs sm:text-sm text-primary font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-muted rounded-2xl p-6 sm:p-8 lg:sticky lg:top-24">
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                Kostenlose Beratung anfragen
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                Kontaktieren Sie uns für ein unverbindliches Angebot. Wir melden
                uns innerhalb von 24 Stunden.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <a href="tel:+4991148007161" className="block">
                  <Button className="w-full cta-button text-white font-semibold py-4 rounded-full">
                    <Phone className="w-5 h-5 mr-2" />
                    0911-48007161
                  </Button>
                </a>
                <Link href="/kontakt" className="block">
                  <Button
                    variant="outline"
                    className="w-full font-semibold py-4 rounded-full"
                  >
                    Anfrage senden
                  </Button>
                </Link>
              </div>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Kostenlose Besichtigung</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Festpreis ohne versteckte Kosten</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Schnelle Terminvergabe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
            {service.name} in Ihrer Nähe
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {nearbyCities.map((city) => (
              <Link
                key={city.slug}
                href={`/staedte/${city.slug}/${service.slug}`}
                className="flex items-center gap-2 p-2.5 sm:p-3 bg-card rounded-xl hover:bg-accent hover:shadow transition-all text-xs sm:text-sm font-medium"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                {city.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-4 sm:mt-6">
            <Link
              href="/staedte"
              className="text-primary font-semibold hover:underline inline-flex items-center text-sm"
            >
              Alle Städte anzeigen
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Weitere Leistungen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {relatedServices.map((relService) => {
              const RelIcon = iconMap[relService.icon] || Box;
              return (
                <Link
                  key={relService.slug}
                  href={`/leistungen/${relService.slug}`}
                  className="group"
                >
                  <div className="bg-muted rounded-2xl p-5 sm:p-6 h-full transition-all duration-300 hover:bg-accent hover:shadow-xl">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary transition-colors">
                      <RelIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-sm sm:text-base">
                      <span className="font-bold">{relService.name}</span>
                      <span className="text-muted-foreground"> - {relService.shortDescription}</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm defaultService={service.slug} />

      <CTASection />
    </>
  );
}
