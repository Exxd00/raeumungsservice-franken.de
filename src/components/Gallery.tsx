"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface GalleryItem {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Wohnungsauflösung Nürnberg",
    beforeImage: "/images/gallery/01_livingroom_before.webp",
    afterImage: "/images/gallery/01_livingroom_after.webp",
  },
  {
    id: 2,
    title: "Kellerräumung Fürth",
    beforeImage: "/images/gallery/02_basement_before.webp",
    afterImage: "/images/gallery/02_basement_after.webp",
  },
  {
    id: 3,
    title: "Küchenauflösung Erlangen",
    beforeImage: "/images/gallery/03_kitchen_before.webp",
    afterImage: "/images/gallery/03_kitchen_after.webp",
  },
  {
    id: 4,
    title: "Dachbodenräumung Bamberg",
    beforeImage: "/images/gallery/04_attic_before.webp",
    afterImage: "/images/gallery/04_attic_after.webp",
  },
  {
    id: 5,
    title: "Gartenräumung Ansbach",
    beforeImage: "/images/gallery/05_garden_before.webp",
    afterImage: "/images/gallery/05_garden_after.webp",
  },
  {
    id: 6,
    title: "Schlafzimmerauflösung Schwabach",
    beforeImage: "/images/gallery/06_bedroom_before.webp",
    afterImage: "/images/gallery/06_bedroom_after.webp",
  },
];

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [showAfter, setShowAfter] = useState(false);

  const navigateGallery = (direction: "prev" | "next") => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedItem.id
    );
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % galleryItems.length
        : (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedItem(galleryItems[newIndex]);
    setShowAfter(false);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4 animate-fade-in">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              Referenzen
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance px-4">
            Unsere Arbeiten
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Einblicke in unsere professionellen Einsätze
          </p>
        </div>

        {/* Gallery Grid - 2 columns on mobile, 3 on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-2 sm:px-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedItem(item);
                setShowAfter(false);
              }}
            >
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-card shadow-md group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={item.beforeImage}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                  <span className="text-white font-bold text-xs sm:text-sm md:text-base">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog
          open={!!selectedItem}
          onOpenChange={() => setSelectedItem(null)}
        >
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-0">
            <DialogTitle className="sr-only">Galerie Bild</DialogTitle>
            {selectedItem && (
              <div className="relative">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Navigation Buttons */}
                <button
                  type="button"
                  onClick={() => navigateGallery("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => navigateGallery("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image */}
                <div className="relative aspect-[3/4] max-h-[70vh]">
                  <Image
                    src={showAfter ? selectedItem.afterImage : selectedItem.beforeImage}
                    alt={`${selectedItem.title} - ${showAfter ? "Nachher" : "Vorher"}`}
                    fill
                    className="object-contain transition-opacity duration-500"
                    priority
                  />
                </div>

                {/* Info Bar */}
                <div className="bg-black/90 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="text-white">
                    <div className="font-bold text-lg">{selectedItem.title}</div>
                  </div>
                  <Button
                    onClick={() => setShowAfter(!showAfter)}
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                  >
                    {showAfter ? "Vorher anzeigen" : "Nachher anzeigen"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
