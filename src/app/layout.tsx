import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "#22955b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: {
    default: "Entrümpelung & Wohnungsauflösung Nürnberg | Räumungsservice Franken",
    template: "%s | Räumungsservice Franken",
  },
  description:
    "Professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Nürnberg und Franken. Kostenlose Besichtigung, faire Festpreise, schnelle Termine. Jetzt unverbindlich anfragen!",
  keywords: [
    "Entrümpelung Nürnberg",
    "Wohnungsauflösung Nürnberg",
    "Haushaltsauflösung Franken",
    "Nachlassauflösung",
    "Kellerentrümpelung",
    "Räumungsservice",
    "Sperrmüllentsorgung",
  ],
  authors: [{ name: "Räumungsservice Franken" }],
  creator: "Räumungsservice Franken",
  publisher: "Räumungsservice Franken",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://raeumungsservice-franken.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Entrümpelung & Wohnungsauflösung Nürnberg | Räumungsservice Franken",
    description:
      "Professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Nürnberg und Franken. Kostenlose Besichtigung, faire Festpreise.",
    url: "https://raeumungsservice-franken.de",
    siteName: "Räumungsservice Franken",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrümpelung & Wohnungsauflösung Nürnberg | Räumungsservice Franken",
    description:
      "Professionelle Entrümpelung in Nürnberg und Franken. Kostenlose Besichtigung, faire Festpreise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "RS Franken",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="Nürnberg" />
        <meta name="geo.position" content="49.4521;11.0767" />
        <meta name="ICBM" content="49.4521, 11.0767" />
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RS Franken" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="RS Franken" />
        <meta name="msapplication-TileColor" content="#22955b" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>

        {/* Service Worker Registration */}
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(function(registration) {
                  console.log('SW registered:', registration.scope);
                }).catch(function(error) {
                  console.log('SW registration failed:', error);
                });
              });
            }
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Räumungsservice Franken",
              description:
                "Professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Nürnberg und Franken.",
              url: "https://raeumungsservice-franken.de",
              telephone: "+49-911-48007161",
              email: "info@raeumungsservice-franken.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hauptstraße 1",
                addressLocality: "Nürnberg",
                postalCode: "90402",
                addressRegion: "Bayern",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.4521,
                longitude: 11.0767,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 49.4521,
                  longitude: 11.0767,
                },
                geoRadius: "100000",
              },
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "120",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
