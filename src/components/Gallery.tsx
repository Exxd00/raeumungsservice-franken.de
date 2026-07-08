"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Camera, ArrowRight, X, ChevronLeft, ChevronRight, Sparkles, ZoomIn, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface GalleryItem {
  id: number;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Wohnungsauflösung",
    location: "Nürnberg",
    beforeImage: "/images/gallery/01_livingroom_before.webp",
    afterImage: "/images/gallery/01_livingroom_after.webp",
  },
  {
    id: 2,
    title: "Kellerräumung",
    location: "Fürth",
    beforeImage: "/images/gallery/02_basement_before.webp",
    afterImage: "/images/gallery/02_basement_after.webp",
  },
  {
    id: 3,
    title: "Küchenauflösung",
    location: "Erlangen",
    beforeImage: "/images/gallery/03_kitchen_before.webp",
    afterImage: "/images/gallery/03_kitchen_after.webp",
  },
  {
    id: 4,
    title: "Dachbodenräumung",
    location: "Bamberg",
    beforeImage: "/images/gallery/04_attic_before.webp",
    afterImage: "/images/gallery/04_attic_after.webp",
  },
  {
    id: 5,
    title: "Gartenräumung",
    location: "Ansbach",
    beforeImage: "/images/gallery/05_garden_before.webp",
    afterImage: "/images/gallery/05_garden_after.webp",
  },
  {
    id: 6,
    title: "Schlafzimmerauflösung",
    location: "Schwabach",
    beforeImage: "/images/gallery/06_bedroom_before.webp",
    afterImage: "/images/gallery/06_bedroom_after.webp",
  },
];

// Before/After Comparison Slider Component
function ComparisonSlider({ beforeImage, afterImage, title }: { beforeImage: string; afterImage: string; title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={`${title} - Nachher`}
          fill
          className="object-cover"
          priority
        />
        {/* After Label */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 text-white text-xs font-bold backdrop-blur-sm shadow-lg">
          NACHHER
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={`${title} - Vorher`}
          fill
          className="object-cover"
          priority
        />
        {/* Before Label */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-orange-500/90 text-white text-xs font-bold backdrop-blur-sm shadow-lg">
          VORHER
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Handle Grip */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-primary/20 hover:border-primary transition-colors">
          <GripVertical className="w-5 h-5 text-primary/70" />
        </div>

        {/* Arrow indicators */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-7 w-5 h-5 flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-white drop-shadow-md" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-7 w-5 h-5 flex items-center justify-center">
          <ChevronRight className="w-4 h-4 text-white drop-shadow-md" />
        </div>
      </div>

      {/* Instructions */}
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium transition-opacity duration-500 ${isDragging ? 'opacity-0' : 'opacity-100'}`}>
        Schieben Sie zum Vergleichen
      </div>
    </div>
  );
}

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const navigateGallery = useCallback((direction: "prev" | "next") => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedItem.id
    );
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % galleryItems.length
        : (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedItem(galleryItems[newIndex]);
  }, [selectedItem]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'ArrowLeft') navigateGallery('prev');
      if (e.key === 'ArrowRight') navigateGallery('next');
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, navigateGallery]);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Elegant animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] blob-animate" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-orange-400/5 rounded-full blur-[80px] blob-animate-2" />

        {/* Subtle grid */}
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className={`inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-full px-5 py-2.5 mb-6 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Referenzen
            </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isVisible ? 'text-reveal text-reveal-delay-1' : 'opacity-0'}`}>
            Unsere <span className="gradient-text">Arbeiten</span>
          </h2>

          <p className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isVisible ? 'text-reveal text-reveal-delay-2' : 'opacity-0'}`}>
            Überzeugen Sie sich selbst von der Qualität unserer Arbeit.
            Jedes Projekt erzählt eine Geschichte der Verwandlung.
          </p>
        </div>

        {/* Gallery Grid - Masonry-like layout */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto ${isVisible ? 'stagger-children' : ''}`}>
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
              >
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-card transition-all duration-700 ${hoveredId === item.id ? 'shadow-2xl shadow-primary/20 scale-[1.02]' : 'shadow-lg hover:shadow-xl'}`}>
                  {/* Image with skeleton loading */}
                  <div className={`absolute inset-0 bg-muted animate-pulse transition-opacity duration-500 ${imageLoaded[item.id] ? 'opacity-0' : 'opacity-100'}`} />
                  <Image
                    src={item.beforeImage}
                    alt={`${item.title} - ${item.location}`}
                    width={600}
                    height={450}
                    className={`w-full h-full object-cover transition-all duration-700 ${hoveredId === item.id ? 'scale-110' : 'scale-100'}`}
                    loading="lazy"
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [item.id]: true }))}
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 transition-all duration-500 ${hoveredId === item.id ? 'bg-gradient-to-t from-black/90 via-black/50 to-black/20' : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'}`} />

                  {/* Hover Overlay with icon */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="relative">
                      {/* Ripple effect */}
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                      <div className="relative w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl transform transition-transform duration-500 hover:scale-110">
                        <ZoomIn className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`absolute bottom-0 left-0 right-0 p-5 sm:p-6 transition-all duration-500 ${hoveredId === item.id ? 'translate-y-0' : 'translate-y-1'}`}>
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-3 transition-all duration-500 ${hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      <Sparkles className="w-3 h-3 text-orange-400" />
                      <span className="text-white/90 text-xs font-medium">Vorher / Nachher</span>
                    </div>

                    {/* Title & Location */}
                    <h3 className="text-white font-bold text-lg sm:text-xl drop-shadow-lg mb-1">
                      {item.title}
                    </h3>
                    <p className={`text-white/70 text-sm font-medium transition-all duration-500 ${hoveredId === item.id ? 'opacity-100' : 'opacity-80'}`}>
                      {item.location}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center transform transition-all duration-500 shadow-lg ${hoveredId === item.id ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-180'}`}>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 sm:mt-16 ${isVisible ? 'slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-4">
            Bereit für Ihre Verwandlung?
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 rounded-full text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            <a href="/kontakt#contact-form">
              Kostenlose Beratung anfordern
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>

        {/* Lightbox Dialog */}
        <Dialog
          open={!!selectedItem}
          onOpenChange={() => setSelectedItem(null)}
        >
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border-0 rounded-2xl shadow-2xl">
            <DialogTitle className="sr-only">
              {selectedItem?.title} - {selectedItem?.location}
            </DialogTitle>
            {selectedItem && (
              <div className="relative">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Navigation Buttons */}
                <button
                  type="button"
                  onClick={() => navigateGallery("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-x-1 group"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={() => navigateGallery("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:translate-x-1 group"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Comparison Slider */}
                <div className="p-4 sm:p-6">
                  <ComparisonSlider
                    beforeImage={selectedItem.beforeImage}
                    afterImage={selectedItem.afterImage}
                    title={selectedItem.title}
                  />
                </div>

                {/* Info Bar */}
                <div className="px-6 pb-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-white/60 text-sm font-medium">Projekt</span>
                      </div>
                      <h3 className="text-white text-lg sm:text-xl font-bold">
                        {selectedItem.title}
                      </h3>
                      <p className="text-white/50 text-sm">
                        {selectedItem.location}
                      </p>
                    </div>

                    {/* Gallery Navigation Dots */}
                    <div className="flex items-center gap-2">
                      {galleryItems.map((item, idx) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedItem(item)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${selectedItem.id === item.id ? 'bg-primary w-6' : 'bg-white/30 hover:bg-white/50'}`}
                          aria-label={`Gehe zu Bild ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
