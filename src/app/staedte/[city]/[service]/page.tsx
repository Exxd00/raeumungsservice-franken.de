import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityBySlug, getNearbyCities } from "@/data/cities";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin,
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

type PageParams = { city: string; service: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.city);
  const service = getServiceBySlug(resolvedParams.service);

  if (!city || !service) {
    return {
      title: "Seite nicht gefunden",
    };
  }

  return {
    title: `${service.name} in ${city.name} - Räumungsservice Franken`,
    description: `Professionelle ${service.name} in ${city.name}. ${service.shortDescription}. Kostenlose Besichtigung, faire Festpreise. Jetzt unverbindlich anfragen!`,
    keywords: [
      `${service.name} ${city.name}`,
      ...service.keywords.map((k) => `${k} ${city.name}`),
    ],
    openGraph: {
      title: `${service.name} in ${city.name} | Räumungsservice Franken`,
      description: `${service.shortDescription}. Kostenlose Besichtigung, faire Preise in ${city.name}.`,
    },
  };
}

export async function generateStaticParams() {
  const params: PageParams[] = [];

  // Generate all combinations of cities and services
  for (const city of cities) {
    for (const service of services) {
      params.push({
        city: city.slug,
        service: service.slug,
      });
    }
  }

  return params;
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.city);
  const service = getServiceBySlug(resolvedParams.service);

  if (!city || !service) {
    notFound();
  }

  const nearbyCities = getNearbyCities(city.slug, 8);
  const relatedServices = getRelatedServices(service.slug, 4);
  const IconComponent = iconMap[service.icon] || Box;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-pattern" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 sm:mb-6">
              <MapPin className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">
                {city.name}, {city.region}
              </span>
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 text-balance">
              {service.name} in {city.name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 sm:mb-8">
              {service.shortDescription} - professionell und zuverlässig in {city.name} und Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="#kontakt">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                Professionelle {service.name} in {city.name}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                {service.description} Wir sind Ihr erfahrener Partner für{" "}
                {service.name.toLowerCase()} in {city.name} und der gesamten
                Region {city.region}. Mit unserem professionellen Team
                garantieren wir Ihnen einen schnellen, sauberen und
                unkomplizierten Service.
              </p>

              {/* Features */}
              <h3 className="font-bold text-lg sm:text-xl mb-4">
                Das bieten wir Ihnen bei der {service.name}:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-muted rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Why Us */}
              <h3 className="font-bold text-lg sm:text-xl mb-4">
                Warum {service.name} mit uns in {city.name}?
              </h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1">Lokale Expertise</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Wir kennen {city.name} und die Region {city.region} - schnelle Anfahrt, keine langen Wartezeiten.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1">Festpreisgarantie</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Der vereinbarte Preis ist verbindlich - keine versteckten Kosten oder Nachforderungen.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1">Kostenlose Besichtigung</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Wir kommen zu Ihnen nach {city.name} und erstellen ein unverbindliches Angebot vor Ort.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-accent rounded-full text-xs sm:text-sm text-primary font-medium"
                  >
                    {keyword} {city.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-muted rounded-2xl p-5 sm:p-6 lg:sticky lg:top-24">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
                  Jetzt Angebot anfordern
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
                  Kostenloses und unverbindliches Angebot für {service.name} in {city.name}.
                </p>
                <div className="space-y-3">
                  <a href="tel:+4991148007161" className="block">
                    <Button className="w-full cta-button text-white font-semibold py-4 rounded-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Anrufen
                    </Button>
                  </a>
                  <Link href="#kontakt" className="block">
                    <Button
                      variant="outline"
                      className="w-full font-semibold py-4 rounded-full"
                    >
                      Anfrage senden
                    </Button>
                  </Link>
                </div>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Antwort in 24h</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Kostenlose Besichtigung</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Festpreisgarantie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Weitere Leistungen in {city.name}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {relatedServices.map((relService) => {
              const RelIcon = iconMap[relService.icon] || Box;
              return (
                <Link
                  key={relService.slug}
                  href={`/staedte/${city.slug}/${relService.slug}`}
                  className="group"
                >
                  <div className="bg-card rounded-xl p-4 sm:p-5 h-full transition-all duration-300 hover:bg-accent hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary transition-colors">
                      <RelIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-xs sm:text-sm">
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

      {/* Nearby Cities */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
            {service.name} auch in diesen Städten
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
            {nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity.slug}
                href={`/staedte/${nearbyCity.slug}/${service.slug}`}
                className="flex items-center gap-2 p-2.5 sm:p-3 bg-muted rounded-xl hover:bg-accent hover:shadow transition-all text-xs sm:text-sm"
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="font-medium truncate">{nearbyCity.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm defaultService={service.slug} defaultCity={city.name} />

      <CTASection />
    </>
  );
}
