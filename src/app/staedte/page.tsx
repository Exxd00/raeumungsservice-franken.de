"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { cities, regions } from "@/data/cities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Filter, ArrowRight, Phone } from "lucide-react";

export default function StaedtePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [maxDistance, setMaxDistance] = useState<number | null>(null);

  const filteredCities = useMemo(() => {
    return cities.filter((city) => {
      const matchesSearch = city.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRegion = !selectedRegion || city.region === selectedRegion;
      const matchesDistance =
        maxDistance === null || city.distance <= maxDistance;
      return matchesSearch && matchesRegion && matchesDistance;
    });
  }, [searchQuery, selectedRegion, maxDistance]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedRegion(null);
    setMaxDistance(null);
  };

  const hasActiveFilters = searchQuery || selectedRegion || maxDistance;

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
              Entrümpelung in Ihrer Stadt
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
              Wir sind in ganz Franken für Sie da. Finden Sie unsere
              Dienstleistungen in Ihrer Nähe.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 sm:py-6 md:py-8 bg-card border-b border-border sticky top-[var(--header-height)] z-40">
        <div className="container-custom">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Stadt suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-11 sm:h-12 rounded-full border-2 text-sm sm:text-base"
              />
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              {/* Region Filter */}
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() =>
                      setSelectedRegion(
                        selectedRegion === region ? null : region
                      )
                    }
                    className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                      selectedRegion === region
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground hover:bg-accent"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>

              {/* Distance Filter */}
              <div className="flex gap-2">
                {[25, 50, 100].map((distance) => (
                  <button
                    key={distance}
                    type="button"
                    onClick={() =>
                      setMaxDistance(maxDistance === distance ? null : distance)
                    }
                    className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                      maxDistance === distance
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground hover:bg-accent"
                    }`}
                  >
                    {distance}km
                  </button>
                ))}
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground"
                >
                  Filter zurücksetzen
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-3 text-xs sm:text-sm text-muted-foreground">
            {filteredCities.length} {filteredCities.length === 1 ? "Stadt" : "Städte"} gefunden
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container-custom">
          {filteredCities.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Keine Städte gefunden</h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6">
                Versuchen Sie es mit anderen Filterkriterien.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Filter zurücksetzen
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
              {filteredCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/staedte/${city.slug}`}
                  className="group"
                >
                  <div className="bg-card rounded-xl p-3 sm:p-4 h-full transition-all duration-300 hover:bg-accent hover:shadow-lg hover:-translate-y-1 border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <p className="text-xs sm:text-sm min-w-0">
                        <span className="font-bold group-hover:text-primary transition-colors">{city.name}</span>
                        <span className="text-muted-foreground"> - {city.distance > 0 ? `${city.distance} km` : "Zentrum"}</span>
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground pl-6">
                      {city.region}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 sm:py-12 bg-card">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Ihre Stadt ist nicht dabei?
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl mx-auto">
              Kein Problem! Wir sind flexibel und kommen auch zu Ihnen. Rufen
              Sie uns an und wir finden eine Lösung.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="tel:+4991148007161" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold rounded-full px-6"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </Button>
              </a>
              <Link href="/kontakt" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold rounded-full px-6"
                >
                  Anfrage senden
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
