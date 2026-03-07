import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von Räumungsservice Franken.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          <h1>Impressum</h1>

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Räumungsservice Franken
            <br />
            Hauptstraße 1<br />
            90402 Nürnberg
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: 0911-48007161
            <br />
            E-Mail: info@raeumungsservice-franken.de
          </p>

          <h2>Vertreten durch</h2>
          <p>Max Mustermann (Geschäftsführer)</p>

          <h2>Registereintrag</h2>
          <p>
            Eintragung im Handelsregister
            <br />
            Registergericht: Amtsgericht Nürnberg
            <br />
            Registernummer: HRB 12345
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            <br />
            DE 123456789
          </p>

          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Entsorgungsfachbetrieb
            <br />
            Zuständige Kammer: IHK Mittelfranken
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Max Mustermann
            <br />
            Hauptstraße 1<br />
            90402 Nürnberg
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </section>
  );
}
