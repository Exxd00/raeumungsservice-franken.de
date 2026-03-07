// Services data for SEO pages
export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    name: "Entrümpelung",
    slug: "entruempelung",
    shortDescription: "Professionelle Entrümpelung von Wohnungen, Häusern und Kellern",
    description: "Unsere professionelle Entrümpelung umfasst die komplette Räumung von Wohnungen, Häusern, Kellern, Dachböden und Garagen. Wir entsorgen alles fachgerecht und hinterlassen die Räume besenrein.",
    icon: "truck",
    features: [
      "Komplette Räumung aller Räume",
      "Fachgerechte Entsorgung",
      "Besenreine Übergabe",
      "Schnelle Terminvergabe",
      "Festpreisgarantie"
    ],
    keywords: ["Entrümpelung", "Räumung", "Entsorgung", "Hausräumung", "Wohnungsräumung"]
  },
  {
    name: "Wohnungsauflösung",
    slug: "wohnungsaufloesung",
    shortDescription: "Komplette Wohnungsauflösung zum Festpreis",
    description: "Bei einer Wohnungsauflösung kümmern wir uns um alles: Von der Demontage von Möbeln über die Entsorgung bis zur besenreinen Übergabe. Ideal bei Umzug, Todesfall oder Hausverkauf.",
    icon: "home",
    features: [
      "Komplette Auflösung",
      "Möbeldemontage inklusive",
      "Wertanrechnung möglich",
      "Besenreine Übergabe",
      "Dokumentation für Vermieter"
    ],
    keywords: ["Wohnungsauflösung", "Haushaltsauflösung", "Wohnungsräumung", "Umzug", "Auflösung"]
  },
  {
    name: "Haushaltsauflösung",
    slug: "haushaltsaufloesung",
    shortDescription: "Komplette Haushaltsauflösung mit Wertanrechnung",
    description: "Wir lösen komplette Haushalte auf - von der Küche über das Wohnzimmer bis zum Keller. Wertgegenstände werden angerechnet, was Ihre Kosten reduziert.",
    icon: "box",
    features: [
      "Komplette Haushaltsauflösung",
      "Wertanrechnung für Antiquitäten",
      "Ordentliche Entsorgung",
      "Flexible Termine",
      "Kostenlose Besichtigung"
    ],
    keywords: ["Haushaltsauflösung", "Haushalt auflösen", "Wertanrechnung", "Antiquitäten", "Möbelankauf"]
  },
  {
    name: "Nachlassauflösung",
    slug: "nachlassaufloesung",
    shortDescription: "Diskrete und respektvolle Nachlassauflösung",
    description: "Nach einem Trauerfall übernehmen wir die komplette Nachlassauflösung diskret und respektvoll. Wir sichten den Nachlass, bewerten Wertgegenstände und kümmern uns um die fachgerechte Entsorgung.",
    icon: "heart",
    features: [
      "Diskret und respektvoll",
      "Sichtung des Nachlasses",
      "Bewertung von Wertgegenständen",
      "Zusammenarbeit mit Nachlassgerichten",
      "Dokumentation für Erben"
    ],
    keywords: ["Nachlassauflösung", "Nachlass", "Trauerfall", "Erbschaft", "Wohnungsauflösung nach Todesfall"]
  },
  {
    name: "Kellerentrümpelung",
    slug: "kellerentruempelung",
    shortDescription: "Schnelle und günstige Kellerentrümpelung",
    description: "Ihr Keller ist zugemüllt? Wir räumen ihn aus und entsorgen alles fachgerecht. Egal ob altes Sperrmüll, Elektroschrott oder Restmüll - wir kümmern uns darum.",
    icon: "layers",
    features: [
      "Schnelle Räumung",
      "Günstige Preise",
      "Auch Problemstoffe",
      "Besenreine Übergabe",
      "Flexible Termine"
    ],
    keywords: ["Kellerentrümpelung", "Keller räumen", "Kellerräumung", "Sperrmüll", "Keller entrümpeln"]
  },
  {
    name: "Dachbodenräumung",
    slug: "dachbodenraeumung",
    shortDescription: "Professionelle Dachbodenräumung",
    description: "Der Dachboden muss geräumt werden? Unsere erfahrenen Mitarbeiter räumen auch schwer zugängliche Dachböden schnell und zuverlässig.",
    icon: "home",
    features: [
      "Auch schwer zugängliche Dachböden",
      "Sichere Entsorgung",
      "Erfahrene Mitarbeiter",
      "Schnelle Durchführung",
      "Faire Preise"
    ],
    keywords: ["Dachbodenräumung", "Dachboden entrümpeln", "Speicher räumen", "Dachboden ausräumen"]
  },
  {
    name: "Garagenräumung",
    slug: "garagenraeumung",
    shortDescription: "Komplette Garagenräumung inklusive Sperrmüll",
    description: "Wir räumen Ihre Garage komplett aus - inklusive Sperrmüll, Altreifen, Öl und anderen Problemstoffen. Fachgerechte Entsorgung garantiert.",
    icon: "car",
    features: [
      "Komplette Räumung",
      "Auch Problemstoffe",
      "Altreifen-Entsorgung",
      "Öl-Entsorgung",
      "Schnell und sauber"
    ],
    keywords: ["Garagenräumung", "Garage räumen", "Garage entrümpeln", "Altreifen entsorgen"]
  },
  {
    name: "Sperrmüllentsorgung",
    slug: "sperrmuellentsorgung",
    shortDescription: "Schnelle und günstige Sperrmüllentsorgung",
    description: "Sperrmüll loswerden ohne Wartezeit? Wir holen Ihren Sperrmüll ab und entsorgen ihn fachgerecht. Schneller und flexibler als die städtische Abholung.",
    icon: "trash",
    features: [
      "Schnelle Abholung",
      "Flexible Termine",
      "Günstiger als gedacht",
      "Keine Wartezeit",
      "Inklusive Transport"
    ],
    keywords: ["Sperrmüllentsorgung", "Sperrmüll abholen", "Sperrmüll entsorgen", "Möbel entsorgen"]
  },
  {
    name: "Messie-Entrümpelung",
    slug: "messie-entruempelung",
    shortDescription: "Diskrete Messie-Entrümpelung mit Erfahrung",
    description: "Wir führen Messie-Entrümpelungen diskret und einfühlsam durch. Unsere erfahrenen Teams arbeiten professionell und respektvoll, auch bei schwierigen Fällen.",
    icon: "shield",
    features: [
      "Absolute Diskretion",
      "Erfahrene Teams",
      "Einfühlsame Durchführung",
      "Schädlingsbekämpfung möglich",
      "Grundreinigung inklusive"
    ],
    keywords: ["Messie-Entrümpelung", "Messie Wohnung räumen", "Verwahrloste Wohnung", "Messie Hilfe"]
  },
  {
    name: "Gewerberäumung",
    slug: "gewerberaeumung",
    shortDescription: "Professionelle Räumung von Gewerbeimmobilien",
    description: "Büros, Lagerhallen, Geschäfte - wir räumen Gewerbeimmobilien jeder Größe. Termingerecht und professionell, damit Sie sich auf Ihr Geschäft konzentrieren können.",
    icon: "building",
    features: [
      "Büro- und Lagerräumung",
      "Termingerechte Durchführung",
      "Möbelankauf möglich",
      "Aktenvernichtung",
      "Großprojekte möglich"
    ],
    keywords: ["Gewerberäumung", "Büroräumung", "Lagerräumung", "Geschäftsauflösung", "Betriebsauflösung"]
  },
  {
    name: "Elektroschrott-Entsorgung",
    slug: "elektroschrott-entsorgung",
    shortDescription: "Fachgerechte Elektroschrott-Entsorgung",
    description: "Wir entsorgen Elektroschrott fachgerecht nach den gesetzlichen Vorgaben. Von Kühlschränken über Computer bis zu Waschmaschinen.",
    icon: "zap",
    features: [
      "Gesetzeskonforme Entsorgung",
      "Alle Elektrogeräte",
      "Datenträgervernichtung",
      "Abholung inklusive",
      "Entsorgungsnachweis"
    ],
    keywords: ["Elektroschrott-Entsorgung", "Elektrogeräte entsorgen", "E-Schrott", "Kühlschrank entsorgen"]
  },
  {
    name: "Möbelankauf",
    slug: "moebelankauf",
    shortDescription: "Wir kaufen Ihre Möbel und Antiquitäten",
    description: "Wertvolle Möbel, Antiquitäten und Sammlerstücke kaufen wir an und rechnen den Wert auf die Entrümpelungskosten an. So sparen Sie bares Geld.",
    icon: "coins",
    features: [
      "Faire Bewertung",
      "Sofortige Verrechnung",
      "Antiquitäten willkommen",
      "Design-Möbel gesucht",
      "Schmuck und Uhren"
    ],
    keywords: ["Möbelankauf", "Antiquitäten ankauf", "Haushaltsauflösung mit Ankauf", "Möbel verkaufen"]
  },
  {
    name: "Gartenräumung",
    slug: "gartenraeumung",
    shortDescription: "Gartenräumung und Grünschnitt-Entsorgung",
    description: "Wir räumen Ihren Garten auf: Gartenhäuser, alte Möbel, Schuppen und Grünschnitt. Alles wird fachgerecht entsorgt.",
    icon: "leaf",
    features: [
      "Gartenhausabriss",
      "Grünschnitt-Entsorgung",
      "Alte Gartenmöbel",
      "Schuppen räumen",
      "Komplette Gartenräumung"
    ],
    keywords: ["Gartenräumung", "Garten entrümpeln", "Grünschnitt entsorgen", "Gartenhaus abreißen"]
  },
  {
    name: "Entrümpelung mit Reinigung",
    slug: "entruempelung-mit-reinigung",
    shortDescription: "Entrümpelung inklusive Grundreinigung",
    description: "Nach der Entrümpelung übernehmen wir die komplette Reinigung. So übergeben Sie die Immobilie in einwandfreiem Zustand.",
    icon: "sparkles",
    features: [
      "Besenreine Übergabe",
      "Grundreinigung möglich",
      "Fensterreinigung",
      "Küchenreinigung",
      "Badreinigung"
    ],
    keywords: ["Entrümpelung mit Reinigung", "besenrein", "Grundreinigung", "Wohnungsreinigung"]
  }
];

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getRelatedServices(serviceSlug: string, limit = 3): Service[] {
  return services
    .filter(s => s.slug !== serviceSlug)
    .slice(0, limit);
}

// Main services for hero section
export const mainServices = services.slice(0, 3);
