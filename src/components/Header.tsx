"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Phone, Menu } from "lucide-react";

const navigation = [
  { name: "Leistungen", href: "/leistungen" },
  { name: "Städte", href: "/staedte" },
  { name: "Referenzen", href: "/referenzen" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-fallback shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-[var(--header-height)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-105 animate-glow">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white transition-transform group-hover:scale-110"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg leading-tight transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                Räumungsservice
              </span>
              <span
                className={`text-sm font-medium leading-tight transition-colors ${
                  isScrolled ? "text-primary" : "text-white/90"
                }`}
              >
                Franken
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="tel:+4991148007161"
              className="flex items-center gap-2"
              aria-label="Jetzt anrufen"
            >
              <Button className="cta-button text-white font-semibold px-6 py-2.5 rounded-full">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? "text-foreground" : "text-white"}
                  aria-label="Menü öffnen"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link
                      href="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-6 h-6 text-white"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-lg leading-tight">
                          Räumungsservice
                        </span>
                        <span className="text-sm font-medium leading-tight text-primary">
                          Franken
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-6 py-4 text-lg font-medium hover:bg-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-6 border-t space-y-3">
                    <a href="tel:+4991148007161" className="block">
                      <Button className="w-full cta-button text-white font-semibold py-3 rounded-full">
                        <Phone className="w-5 h-5 mr-2" />
                        Jetzt anrufen
                      </Button>
                    </a>
                    <p className="text-sm text-center text-muted-foreground">
                      Mo-Sa: 08:00 - 18:00 Uhr
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
