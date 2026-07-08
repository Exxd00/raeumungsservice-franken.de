"use client";

import { Star, Quote, CheckCircle2, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Thomas Müller",
    location: "Nürnberg-Langwasser",
    rating: 5,
    text: "Nach dem Tod meiner Mutter war ich völlig überfordert mit der Wohnungsauflösung. Das Team hat mir alles abgenommen - professionell, einfühlsam und absolut zuverlässig. Kann ich nur weiterempfehlen!",
    service: "Haushaltsauflösung",
    date: "Vor 2 Wochen",
    verified: true,
  },
  {
    id: 2,
    name: "Sandra Krause",
    location: "Fürth-Süd",
    rating: 5,
    text: "Innerhalb von nur 3 Tagen war unser komplett vollgestellter Keller leergeräumt. Pünktlich, sauber und der Preis war fair kalkuliert. Keine versteckten Kosten!",
    service: "Kellerentrümpelung",
    date: "Vor 1 Monat",
    verified: true,
  },
  {
    id: 3,
    name: "Michael Bauer",
    location: "Erlangen-Zentrum",
    rating: 5,
    text: "Die besenreine Übergabe hat perfekt geklappt. Sogar der Vermieter war beeindruckt! Besonders positiv: Die Mitarbeiter haben auch Wertgegenstände fair angerechnet.",
    service: "Wohnungsauflösung",
    date: "Vor 3 Wochen",
    verified: true,
  },
];

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden relative">
      {/* Elegant background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-[100px] blob-animate" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] blob-animate-2" />

        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className={`inline-flex items-center gap-2.5 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10 border border-yellow-400/20 rounded-full px-5 py-2.5 mb-6 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm tracking-wide uppercase">
              Kundenstimmen
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isVisible ? 'text-reveal text-reveal-delay-1' : 'opacity-0'}`}>
            Was unsere <span className="gradient-text">Kunden</span> sagen
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'text-reveal text-reveal-delay-2' : 'opacity-0'}`}>
            Echte Erfahrungen von zufriedenen Kunden aus der Region
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 ${isVisible ? 'stagger-children' : ''}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${activeIndex === index ? 'ring-2 ring-primary/50 shadow-primary/10' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote decoration */}
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              <div className="relative">
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={`star-${testimonial.id}-${i}`}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-primary text-xs font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verifiziert</span>
                    </div>
                  )}
                </div>

                {/* Service tag */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {testimonial.service}
                </div>

                {/* Text */}
                <p className="text-foreground text-base sm:text-lg leading-relaxed mb-6 group-hover:text-foreground/90 transition-colors">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mb-10 md:hidden">
          {testimonials.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className={`relative max-w-lg mx-auto ${isVisible ? 'slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-yellow-400 to-primary rounded-2xl opacity-50 blur-sm animate-gradient" />

          <div className="relative bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Google logo styled */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">G</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={`google-star-${i}`}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
            <div className="text-white text-center sm:text-left">
              <div className="font-bold text-xl">4.9 / 5</div>
              <div className="text-white/80 text-sm">basierend auf 200+ Bewertungen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
