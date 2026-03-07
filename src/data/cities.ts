// Cities within 100km of Nürnberg for SEO pages
export interface City {
  name: string;
  slug: string;
  postalCodes: string[];
  population?: number;
  distance: number; // km from Nürnberg
  region: string;
}

export const mainCity: City = {
  name: "Nürnberg",
  slug: "nuernberg",
  postalCodes: ["90402", "90403", "90408", "90409", "90411", "90419", "90425", "90427", "90429", "90431", "90439", "90441", "90443", "90449", "90451", "90453", "90455", "90459", "90461", "90469", "90471", "90473", "90475", "90478", "90480", "90482", "90489", "90491"],
  population: 518370,
  distance: 0,
  region: "Mittelfranken"
};

export const cities: City[] = [
  mainCity,
  // Major cities in Franken
  { name: "Fürth", slug: "fuerth", postalCodes: ["90762", "90763", "90765", "90766", "90768"], population: 130000, distance: 7, region: "Mittelfranken" },
  { name: "Erlangen", slug: "erlangen", postalCodes: ["91052", "91054", "91056", "91058"], population: 113000, distance: 17, region: "Mittelfranken" },
  { name: "Schwabach", slug: "schwabach", postalCodes: ["91126"], population: 41000, distance: 14, region: "Mittelfranken" },
  { name: "Ansbach", slug: "ansbach", postalCodes: ["91522"], population: 42000, distance: 42, region: "Mittelfranken" },
  { name: "Bamberg", slug: "bamberg", postalCodes: ["96047", "96049", "96050", "96052"], population: 77000, distance: 55, region: "Oberfranken" },
  { name: "Bayreuth", slug: "bayreuth", postalCodes: ["95444", "95445", "95447", "95448"], population: 75000, distance: 75, region: "Oberfranken" },
  { name: "Würzburg", slug: "wuerzburg", postalCodes: ["97070", "97072", "97074", "97076", "97078", "97080", "97082", "97084"], population: 130000, distance: 100, region: "Unterfranken" },
  { name: "Amberg", slug: "amberg", postalCodes: ["92224"], population: 42000, distance: 62, region: "Oberpfalz" },
  { name: "Regensburg", slug: "regensburg", postalCodes: ["93047", "93049", "93051", "93053", "93055", "93057", "93059"], population: 153000, distance: 98, region: "Oberpfalz" },
  { name: "Ingolstadt", slug: "ingolstadt", postalCodes: ["85049", "85051", "85053", "85055", "85057"], population: 140000, distance: 88, region: "Oberbayern" },

  // Medium cities
  { name: "Herzogenaurach", slug: "herzogenaurach", postalCodes: ["91074"], population: 24000, distance: 20, region: "Mittelfranken" },
  { name: "Neumarkt", slug: "neumarkt", postalCodes: ["92318"], population: 40000, distance: 35, region: "Oberpfalz" },
  { name: "Forchheim", slug: "forchheim", postalCodes: ["91301"], population: 32000, distance: 28, region: "Oberfranken" },
  { name: "Roth", slug: "roth", postalCodes: ["91154"], population: 25000, distance: 25, region: "Mittelfranken" },
  { name: "Lauf an der Pegnitz", slug: "lauf-an-der-pegnitz", postalCodes: ["91207"], population: 26000, distance: 12, region: "Mittelfranken" },
  { name: "Zirndorf", slug: "zirndorf", postalCodes: ["90513"], population: 26000, distance: 10, region: "Mittelfranken" },
  { name: "Oberasbach", slug: "oberasbach", postalCodes: ["90522"], population: 18000, distance: 8, region: "Mittelfranken" },
  { name: "Stein", slug: "stein", postalCodes: ["90547"], population: 14000, distance: 6, region: "Mittelfranken" },
  { name: "Wendelstein", slug: "wendelstein", postalCodes: ["90530"], population: 16000, distance: 13, region: "Mittelfranken" },
  { name: "Altdorf bei Nürnberg", slug: "altdorf-bei-nuernberg", postalCodes: ["90518"], population: 15000, distance: 20, region: "Mittelfranken" },
  { name: "Hersbruck", slug: "hersbruck", postalCodes: ["91217"], population: 12500, distance: 25, region: "Mittelfranken" },
  { name: "Feucht", slug: "feucht", postalCodes: ["90537"], population: 14000, distance: 10, region: "Mittelfranken" },
  { name: "Langenzenn", slug: "langenzenn", postalCodes: ["90579"], population: 10500, distance: 18, region: "Mittelfranken" },
  { name: "Cadolzburg", slug: "cadolzburg", postalCodes: ["90556"], population: 11000, distance: 15, region: "Mittelfranken" },
  { name: "Schwarzenbruck", slug: "schwarzenbruck", postalCodes: ["90592"], population: 8500, distance: 15, region: "Mittelfranken" },
  { name: "Burgthann", slug: "burgthann", postalCodes: ["90559"], population: 11500, distance: 18, region: "Mittelfranken" },

  // Smaller towns in the region
  { name: "Kornburg", slug: "kornburg", postalCodes: ["90455"], population: 4500, distance: 12, region: "Mittelfranken" },
  { name: "Winkelhaid", slug: "winkelhaid", postalCodes: ["90610"], population: 4200, distance: 16, region: "Mittelfranken" },
  { name: "Rosstal", slug: "rosstal", postalCodes: ["90574"], population: 9600, distance: 18, region: "Mittelfranken" },
  { name: "Roßtal", slug: "rosstal-2", postalCodes: ["90574"], population: 9600, distance: 18, region: "Mittelfranken" },
  { name: "Veitsbronn", slug: "veitsbronn", postalCodes: ["90587"], population: 6700, distance: 12, region: "Mittelfranken" },
  { name: "Bubenreuth", slug: "bubenreuth", postalCodes: ["91088"], population: 4800, distance: 18, region: "Mittelfranken" },
  { name: "Uttenreuth", slug: "uttenreuth", postalCodes: ["91080"], population: 5000, distance: 20, region: "Mittelfranken" },
  { name: "Buckenhof", slug: "buckenhof", postalCodes: ["91054"], population: 4200, distance: 18, region: "Mittelfranken" },
  { name: "Spardorf", slug: "spardorf", postalCodes: ["91080"], population: 5000, distance: 19, region: "Mittelfranken" },
  { name: "Marloffstein", slug: "marloffstein", postalCodes: ["91080"], population: 2000, distance: 20, region: "Mittelfranken" },
  { name: "Baiersdorf", slug: "baiersdorf", postalCodes: ["91083"], population: 8000, distance: 22, region: "Mittelfranken" },
  { name: "Möhrendorf", slug: "moehrendorf", postalCodes: ["91096"], population: 4800, distance: 20, region: "Mittelfranken" },
  { name: "Hemhofen", slug: "hemhofen", postalCodes: ["91334"], population: 5000, distance: 25, region: "Mittelfranken" },
  { name: "Höchstadt an der Aisch", slug: "hoechstadt-an-der-aisch", postalCodes: ["91315"], population: 13000, distance: 30, region: "Mittelfranken" },
  { name: "Adelsdorf", slug: "adelsdorf", postalCodes: ["91325"], population: 8000, distance: 28, region: "Mittelfranken" },

  // Oberfranken region
  { name: "Hirschaid", slug: "hirschaid", postalCodes: ["96114"], population: 12000, distance: 45, region: "Oberfranken" },
  { name: "Strullendorf", slug: "strullendorf", postalCodes: ["96129"], population: 8000, distance: 50, region: "Oberfranken" },
  { name: "Hallstadt", slug: "hallstadt", postalCodes: ["96103"], population: 8500, distance: 53, region: "Oberfranken" },
  { name: "Baunach", slug: "baunach", postalCodes: ["96148"], population: 4000, distance: 60, region: "Oberfranken" },
  { name: "Ebern", slug: "ebern", postalCodes: ["96106"], population: 7000, distance: 70, region: "Oberfranken" },
  { name: "Coburg", slug: "coburg", postalCodes: ["96450"], population: 41000, distance: 85, region: "Oberfranken" },
  { name: "Kronach", slug: "kronach", postalCodes: ["96317"], population: 17000, distance: 95, region: "Oberfranken" },
  { name: "Kulmbach", slug: "kulmbach", postalCodes: ["95326"], population: 26000, distance: 80, region: "Oberfranken" },
  { name: "Lichtenfels", slug: "lichtenfels", postalCodes: ["96215"], population: 20000, distance: 70, region: "Oberfranken" },
  { name: "Pegnitz", slug: "pegnitz", postalCodes: ["91257"], population: 14000, distance: 50, region: "Oberfranken" },
  { name: "Hollfeld", slug: "hollfeld", postalCodes: ["96142"], population: 5000, distance: 60, region: "Oberfranken" },
  { name: "Ebermannstadt", slug: "ebermannstadt", postalCodes: ["91320"], population: 7000, distance: 40, region: "Oberfranken" },
  { name: "Gräfenberg", slug: "graefenberg", postalCodes: ["91322"], population: 4200, distance: 32, region: "Oberfranken" },

  // Oberpfalz region
  { name: "Sulzbach-Rosenberg", slug: "sulzbach-rosenberg", postalCodes: ["92237"], population: 20000, distance: 55, region: "Oberpfalz" },
  { name: "Weiden in der Oberpfalz", slug: "weiden-in-der-oberpfalz", postalCodes: ["92637"], population: 42000, distance: 95, region: "Oberpfalz" },
  { name: "Schwandorf", slug: "schwandorf", postalCodes: ["92421"], population: 29000, distance: 85, region: "Oberpfalz" },
  { name: "Burglengenfeld", slug: "burglengenfeld", postalCodes: ["93133"], population: 14000, distance: 80, region: "Oberpfalz" },
  { name: "Parsberg", slug: "parsberg", postalCodes: ["92331"], population: 7000, distance: 55, region: "Oberpfalz" },
  { name: "Velburg", slug: "velburg", postalCodes: ["92355"], population: 5500, distance: 50, region: "Oberpfalz" },
  { name: "Berching", slug: "berching", postalCodes: ["92334"], population: 9000, distance: 48, region: "Oberpfalz" },
  { name: "Freystadt", slug: "freystadt", postalCodes: ["92342"], population: 9000, distance: 40, region: "Oberpfalz" },
  { name: "Allersberg", slug: "allersberg", postalCodes: ["90584"], population: 8500, distance: 28, region: "Mittelfranken" },
  { name: "Hilpoltstein", slug: "hilpoltstein", postalCodes: ["91161"], population: 13000, distance: 32, region: "Mittelfranken" },
  { name: "Thalmässing", slug: "thalmaessing", postalCodes: ["91177"], population: 5500, distance: 35, region: "Mittelfranken" },
  { name: "Greding", slug: "greding", postalCodes: ["91171"], population: 7500, distance: 42, region: "Mittelfranken" },

  // Unterfranken region
  { name: "Schweinfurt", slug: "schweinfurt", postalCodes: ["97421", "97422", "97424"], population: 54000, distance: 95, region: "Unterfranken" },
  { name: "Bad Kissingen", slug: "bad-kissingen", postalCodes: ["97688"], population: 22000, distance: 100, region: "Unterfranken" },
  { name: "Haßfurt", slug: "hassfurt", postalCodes: ["97437"], population: 14000, distance: 75, region: "Unterfranken" },
  { name: "Eltmann", slug: "eltmann", postalCodes: ["97483"], population: 5500, distance: 65, region: "Unterfranken" },
  { name: "Zeil am Main", slug: "zeil-am-main", postalCodes: ["97475"], population: 5500, distance: 68, region: "Unterfranken" },

  // Extended Mittelfranken
  { name: "Weißenburg in Bayern", slug: "weissenburg-in-bayern", postalCodes: ["91781"], population: 18000, distance: 50, region: "Mittelfranken" },
  { name: "Treuchtlingen", slug: "treuchtlingen", postalCodes: ["91757"], population: 13000, distance: 55, region: "Mittelfranken" },
  { name: "Gunzenhausen", slug: "gunzenhausen", postalCodes: ["91710"], population: 17000, distance: 55, region: "Mittelfranken" },
  { name: "Dinkelsbühl", slug: "dinkelsbuehl", postalCodes: ["91550"], population: 12000, distance: 75, region: "Mittelfranken" },
  { name: "Feuchtwangen", slug: "feuchtwangen", postalCodes: ["91555"], population: 12000, distance: 65, region: "Mittelfranken" },
  { name: "Rothenburg ob der Tauber", slug: "rothenburg-ob-der-tauber", postalCodes: ["91541"], population: 11000, distance: 75, region: "Mittelfranken" },
  { name: "Bad Windsheim", slug: "bad-windsheim", postalCodes: ["91438"], population: 12000, distance: 45, region: "Mittelfranken" },
  { name: "Neustadt an der Aisch", slug: "neustadt-an-der-aisch", postalCodes: ["91413"], population: 13000, distance: 35, region: "Mittelfranken" },
  { name: "Scheinfeld", slug: "scheinfeld", postalCodes: ["91443"], population: 4500, distance: 40, region: "Mittelfranken" },
  { name: "Uffenheim", slug: "uffenheim", postalCodes: ["97215"], population: 6500, distance: 55, region: "Mittelfranken" },
  { name: "Windsbach", slug: "windsbach", postalCodes: ["91575"], population: 6000, distance: 30, region: "Mittelfranken" },
  { name: "Heilsbronn", slug: "heilsbronn", postalCodes: ["91560"], population: 9500, distance: 25, region: "Mittelfranken" },
  { name: "Lichtenau", slug: "lichtenau", postalCodes: ["91586"], population: 4000, distance: 35, region: "Mittelfranken" },
  { name: "Merkendorf", slug: "merkendorf", postalCodes: ["91732"], population: 3000, distance: 38, region: "Mittelfranken" },
  { name: "Wolframs-Eschenbach", slug: "wolframs-eschenbach", postalCodes: ["91639"], population: 3000, distance: 40, region: "Mittelfranken" },

  // More suburbs and smaller towns
  { name: "Eckental", slug: "eckental", postalCodes: ["90542"], population: 14000, distance: 15, region: "Mittelfranken" },
  { name: "Kalchreuth", slug: "kalchreuth", postalCodes: ["90562"], population: 3200, distance: 12, region: "Mittelfranken" },
  { name: "Heroldsberg", slug: "heroldsberg", postalCodes: ["90562"], population: 8500, distance: 10, region: "Mittelfranken" },
  { name: "Neunkirchen am Brand", slug: "neunkirchen-am-brand", postalCodes: ["91077"], population: 8500, distance: 22, region: "Mittelfranken" },
  { name: "Dormitz", slug: "dormitz", postalCodes: ["91077"], population: 2800, distance: 20, region: "Mittelfranken" },
  { name: "Kleinsendelbach", slug: "kleinsendelbach", postalCodes: ["91077"], population: 1800, distance: 22, region: "Mittelfranken" },
  { name: "Hetzles", slug: "hetzles", postalCodes: ["91077"], population: 2200, distance: 24, region: "Mittelfranken" },
  { name: "Effeltrich", slug: "effeltrich", postalCodes: ["91090"], population: 2500, distance: 26, region: "Oberfranken" },
  { name: "Poxdorf", slug: "poxdorf", postalCodes: ["91099"], population: 1800, distance: 24, region: "Oberfranken" },
  { name: "Langensendelbach", slug: "langensendelbach", postalCodes: ["91094"], population: 2500, distance: 22, region: "Oberfranken" },
  { name: "Pinzberg", slug: "pinzberg", postalCodes: ["91361"], population: 1200, distance: 28, region: "Oberfranken" },
  { name: "Wiesenthau", slug: "wiesenthau", postalCodes: ["91369"], population: 1600, distance: 30, region: "Oberfranken" },
  { name: "Kirchehrenbach", slug: "kirchehrenbach", postalCodes: ["91356"], population: 2200, distance: 32, region: "Oberfranken" },
  { name: "Weilersbach", slug: "weilersbach", postalCodes: ["91365"], population: 1800, distance: 34, region: "Oberfranken" },
  { name: "Pretzfeld", slug: "pretzfeld", postalCodes: ["91362"], population: 2500, distance: 35, region: "Oberfranken" },
  { name: "Igensdorf", slug: "igensdorf", postalCodes: ["91338"], population: 5000, distance: 28, region: "Oberfranken" },
  { name: "Weißenohe", slug: "weissenohe", postalCodes: ["91367"], population: 1200, distance: 30, region: "Oberfranken" },
  { name: "Gößweinstein", slug: "goessweinstein", postalCodes: ["91327"], population: 4000, distance: 45, region: "Oberfranken" },
  { name: "Waischenfeld", slug: "waischenfeld", postalCodes: ["91344"], population: 3000, distance: 50, region: "Oberfranken" },
  { name: "Pottenstein", slug: "pottenstein", postalCodes: ["91278"], population: 5200, distance: 48, region: "Oberfranken" },
  { name: "Betzenstein", slug: "betzenstein", postalCodes: ["91282"], population: 2500, distance: 42, region: "Oberfranken" },
  { name: "Plech", slug: "plech", postalCodes: ["91287"], population: 1400, distance: 40, region: "Oberfranken" },

  // Additional towns to reach 100+ cities
  { name: "Großenseebach", slug: "grossenseebach", postalCodes: ["91091"], population: 3200, distance: 22, region: "Mittelfranken" },
  { name: "Aurachtal", slug: "aurachtal", postalCodes: ["91086"], population: 3500, distance: 24, region: "Mittelfranken" },
  { name: "Mühlhausen", slug: "muehlhausen", postalCodes: ["91093"], population: 3200, distance: 20, region: "Mittelfranken" },
  { name: "Weisendorf", slug: "weisendorf", postalCodes: ["91085"], population: 4500, distance: 25, region: "Mittelfranken" },
  { name: "Vestenbergsgreuth", slug: "vestenbergsgreuth", postalCodes: ["91487"], population: 1400, distance: 28, region: "Mittelfranken" },
  { name: "Lonnerstadt", slug: "lonnerstadt", postalCodes: ["91475"], population: 2000, distance: 30, region: "Mittelfranken" },
  { name: "Wachenroth", slug: "wachenroth", postalCodes: ["96193"], population: 2200, distance: 35, region: "Oberfranken" },
  { name: "Pommersfelden", slug: "pommersfelden", postalCodes: ["96178"], population: 2800, distance: 40, region: "Oberfranken" },
  { name: "Burgebrach", slug: "burgebrach", postalCodes: ["96138"], population: 7000, distance: 45, region: "Oberfranken" },
  { name: "Schönbrunn im Steigerwald", slug: "schoenbrunn-im-steigerwald", postalCodes: ["96185"], population: 1800, distance: 48, region: "Oberfranken" },
  { name: "Schlüsselfeld", slug: "schluesselfeld", postalCodes: ["96132"], population: 6000, distance: 42, region: "Oberfranken" },
  { name: "Gremsdorf", slug: "gremsdorf", postalCodes: ["91350"], population: 1800, distance: 28, region: "Oberfranken" },
  { name: "Hallerndorf", slug: "hallerndorf", postalCodes: ["91352"], population: 4000, distance: 32, region: "Oberfranken" },
  { name: "Heroldsbach", slug: "heroldsbach", postalCodes: ["91336"], population: 5500, distance: 30, region: "Oberfranken" },
  { name: "Hausen", slug: "hausen", postalCodes: ["91353"], population: 3500, distance: 28, region: "Oberfranken" },
  { name: "Dietzhof", slug: "dietzhof", postalCodes: ["91301"], population: 800, distance: 30, region: "Oberfranken" },
  { name: "Kunreuth", slug: "kunreuth", postalCodes: ["91358"], population: 1500, distance: 35, region: "Oberfranken" },
  { name: "Leutenbach", slug: "leutenbach", postalCodes: ["91359"], population: 1600, distance: 32, region: "Oberfranken" },
  { name: "Mittelehrenbach", slug: "mittelehrenbach", postalCodes: ["91359"], population: 600, distance: 33, region: "Oberfranken" },
  { name: "Oberehrenbach", slug: "oberehrenbach", postalCodes: ["91359"], population: 400, distance: 34, region: "Oberfranken" },
];

// Get all unique regions
export const regions = [...new Set(cities.map(city => city.region))];

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getCitiesByRegion(region: string): City[] {
  return cities.filter(city => city.region === region);
}

export function getCitiesWithinDistance(maxDistance: number): City[] {
  return cities.filter(city => city.distance <= maxDistance);
}

export function getNearbyCities(citySlug: string, limit = 6): City[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];

  return cities
    .filter(c => c.slug !== citySlug)
    .sort((a, b) => Math.abs(a.distance - city.distance) - Math.abs(b.distance - city.distance))
    .slice(0, limit);
}
