import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityBySlug, getNearbyCities } from "@/data/cities";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";
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

type PageParams = { city: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.city);

  if (!city) {
    return {
      title: "Stadt nicht gefunden",
    };
  }

  return {
    title: `Entrümpelung & Wohnungsauflösung in ${city.name}`,
    description: `Professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in ${city.name}. Kostenlose Besichtigung, faire Festpreise, schnelle Termine. Jetzt unverbindlich anfragen!`,
    keywords: [
      `Entrümpelung ${city.name}`,
      `Wohnungsauflösung ${city.name}`,
      `Haushaltsauflösung ${city.name}`,
      `Räumungsservice ${city.name}`,
    ],
    openGraph: {
      title: `Entrümpelung in ${city.name} | Räumungsservice Franken`,
      description: `Professionelle Entrümpelung und Wohnungsauflösung in ${city.name}. Kostenlose Besichtigung, faire Preise.`,
    },
  };
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export default async function CityPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.city);

  if (!city) {
    notFound();
  }

  const nearbyCities = getNearbyCities(city.slug, 6);

  return (
    <>
      <Hero city={city.name} />

      {/* Services in City */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Unsere Leistungen in {city.name}
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Wir bieten Ihnen das komplette Spektrum an Räumungsdienstleistungen
              in {city.name} und Umgebung.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.slice(0, 6).map((service) => {
              const IconComponent = iconMap[service.icon] || Box;
              return (
                <Link
                  key={service.slug}
                  href={`/staedte/${city.slug}/${service.slug}`}
                  className="group"
                >
                  <div className="bg-muted rounded-2xl p-5 sm:p-6 h-full transition-all duration-300 hover:bg-accent hover:shadow-xl hover:-translate-y-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary transition-colors">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-sm sm:text-base mb-3 sm:mb-4">
                      <span className="font-bold group-hover:text-primary transition-colors">{service.name} in {city.name}</span>
                      <span className="text-muted-foreground"> - {service.shortDescription}</span>
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link href="/leistungen">
              <Button variant="outline" size="lg" className="rounded-full">
                Alle Leistungen anzeigen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* City Info */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                Ihr Räumungsservice in {city.name}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Wir sind Ihr zuverlässiger Partner für Entrümpelung,
                Wohnungsauflösung und Haushaltsauflösung in {city.name} und der
                gesamten Region {city.region}. Mit unserer langjährigen Erfahrung
                und unserem professionellen Team garantieren wir Ihnen einen
                reibungslosen Ablauf.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Kostenlose Besichtigung in {city.name}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Transparente Festpreise ohne versteckte Kosten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Schnelle Termine - oft innerhalb weniger Tage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Besenreine Übergabe der Immobilie</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="tel:+4991148007161" className="w-full sm:w-auto">
                  <Button className="w-full cta-button text-white font-semibold rounded-full px-6">
                    <Phone className="w-5 h-5 mr-2" />
                    Jetzt anrufen
                  </Button>
                </a>
                <Link href="/kontakt" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full font-semibold rounded-full px-6">
                    Anfrage senden
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
              <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Informationen zu {city.name}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between py-2 sm:py-3 border-b border-border">
                  <span className="text-muted-foreground text-sm sm:text-base">Region</span>
                  <span className="font-semibold text-sm sm:text-base">{city.region}</span>
                </div>
                <div className="flex justify-between py-2 sm:py-3 border-b border-border">
                  <span className="text-muted-foreground text-sm sm:text-base">Entfernung</span>
                  <span className="font-semibold text-sm sm:text-base">
                    {city.distance > 0 ? `${city.distance} km von Nürnberg` : "Zentrum"}
                  </span>
                </div>
                {city.population && (
                  <div className="flex justify-between py-2 sm:py-3 border-b border-border">
                    <span className="text-muted-foreground text-sm sm:text-base">Einwohner</span>
                    <span className="font-semibold text-sm sm:text-base">
                      ca. {city.population.toLocaleString("de-DE")}
                    </span>
                  </div>
                )}
                <div className="flex justify-between py-2 sm:py-3">
                  <span className="text-muted-foreground text-sm sm:text-base">PLZ</span>
                  <span className="font-semibold text-sm sm:text-base">
                    {city.postalCodes.slice(0, 3).join(", ")}
                    {city.postalCodes.length > 3 && "..."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Entrümpelung auch in diesen Städten
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity.slug}
                href={`/staedte/${nearbyCity.slug}`}
                className="flex items-center gap-2 p-3 sm:p-4 bg-muted rounded-xl hover:bg-accent hover:shadow transition-all"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm">{nearbyCity.name}</span>
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

      <Testimonials />

      <ContactForm defaultCity={city.name} />

      <CTASection />
    </>
  );
}
