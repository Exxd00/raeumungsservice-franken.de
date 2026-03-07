"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Thomas M.",
    location: "Nürnberg",
    rating: 5,
    text: "Schnelle Hilfe und super Service! Sehr zufrieden.",
    initial: "T",
  },
  {
    id: 2,
    name: "Sandra K.",
    location: "Fürth",
    rating: 5,
    text: "Professionell und freundlich. Kann ich nur empfehlen.",
    initial: "S",
  },
  {
    id: 3,
    name: "Michael B.",
    location: "Erlangen",
    rating: 5,
    text: "Alles reibungslos abgelaufen. Faire Preise!",
    initial: "M",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4 animate-fade-in">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary font-medium text-sm">
              Kundenstimmen
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance px-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Überzeugen Sie sich selbst von unserem Service
          </p>
        </div>

        {/* Testimonials Grid - Always 3 in a row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-8 sm:mb-12 px-2 sm:px-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-muted rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 group hover:shadow-lg transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="mb-2 sm:mb-3">
                <div className="w-7 h-7 sm:w-9 md:w-10 sm:h-9 md:h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-3.5 h-3.5 sm:w-4 md:w-5 sm:h-4 md:h-5 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-2 sm:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={`star-${testimonial.id}-${i}`}
                    className="w-3 h-3 sm:w-4 md:w-5 sm:h-4 md:h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground text-[11px] sm:text-sm md:text-base mb-2 sm:mb-3 leading-snug line-clamp-3">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-7 h-7 sm:w-8 md:w-9 sm:h-8 md:h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-[10px] sm:text-xs md:text-sm">
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-bold text-[10px] sm:text-xs md:text-sm">{testimonial.name}</div>
                  <div className="text-[9px] sm:text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="bg-primary rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mx-4 sm:mx-auto">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={`google-star-${i}`}
                className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <div className="text-white text-sm sm:text-base text-center sm:text-left">
            <span className="font-bold">4.9/5</span> basierend auf über 200 Bewertungen
          </div>
        </div>
      </div>
    </section>
  );
}
