import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "AGB von Räumungsservice Franken.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AGBPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          <h1>Allgemeine Geschäftsbedingungen</h1>

          <h2>§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
            Verträge zwischen Räumungsservice Franken (nachfolgend
            "Auftragnehmer") und dem Kunden (nachfolgend "Auftraggeber") über
            Entrümpelungs-, Räumungs- und Entsorgungsdienstleistungen.
          </p>

          <h2>§ 2 Vertragsschluss</h2>
          <p>
            Ein Vertrag kommt durch die schriftliche oder mündliche Annahme
            eines Angebots durch den Auftraggeber zustande. Das Angebot basiert
            auf einer kostenlosen Besichtigung vor Ort oder auf den vom
            Auftraggeber gemachten Angaben.
          </p>

          <h2>§ 3 Leistungsumfang</h2>
          <p>
            Der Leistungsumfang ergibt sich aus dem schriftlichen Angebot oder
            der Auftragsbestätigung. Änderungen oder Erweiterungen des
            Leistungsumfangs bedürfen der schriftlichen Vereinbarung.
          </p>

          <h2>§ 4 Preise und Zahlung</h2>
          <p>
            Die vereinbarten Preise sind Festpreise, sofern nichts anderes
            vereinbart wurde. Die Zahlung ist nach Abschluss der Arbeiten fällig
            und erfolgt bar oder per Überweisung.
          </p>

          <h2>§ 5 Pflichten des Auftraggebers</h2>
          <p>Der Auftraggeber ist verpflichtet:</p>
          <ul>
            <li>
              Dem Auftragnehmer freien Zugang zu den zu räumenden Räumlichkeiten
              zu gewähren
            </li>
            <li>
              Über Gefahrenstoffe oder besondere Entsorgungserfordernisse zu
              informieren
            </li>
            <li>
              Persönliche Gegenstände und Wertsachen vor Beginn der Arbeiten zu
              entfernen
            </li>
          </ul>

          <h2>§ 6 Eigentumsverhältnisse</h2>
          <p>
            Der Auftraggeber versichert, dass er berechtigt ist, über die zu
            räumenden Gegenstände zu verfügen. Mit Übergabe der Gegenstände an
            den Auftragnehmer gehen diese in dessen Eigentum über, sofern nichts
            anderes vereinbart wurde.
          </p>

          <h2>§ 7 Haftung</h2>
          <p>
            Der Auftragnehmer haftet für Schäden, die vorsätzlich oder
            grob fahrlässig verursacht wurden. Die Haftung für leichte
            Fahrlässigkeit ist ausgeschlossen, es sei denn, es handelt sich um
            wesentliche Vertragspflichten.
          </p>

          <h2>§ 8 Entsorgung</h2>
          <p>
            Die Entsorgung erfolgt gemäß den gesetzlichen Vorschriften. Der
            Auftragnehmer ist berechtigt, verwertbare Gegenstände einer
            Wiederverwertung zuzuführen oder zu verkaufen.
          </p>

          <h2>§ 9 Wertanrechnung</h2>
          <p>
            Vereinbarte Wertanrechnungen für übernommene Gegenstände werden mit
            den Räumungskosten verrechnet. Die Bewertung erfolgt nach dem
            aktuellen Marktwert.
          </p>

          <h2>§ 10 Stornierung</h2>
          <p>
            Eine kostenlose Stornierung ist bis 48 Stunden vor dem vereinbarten
            Termin möglich. Bei späterer Absage kann eine Aufwandsentschädigung
            in Höhe von bis zu 50% des Auftragswertes erhoben werden.
          </p>

          <h2>§ 11 Datenschutz</h2>
          <p>
            Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß
            unserer Datenschutzerklärung und den geltenden
            Datenschutzbestimmungen.
          </p>

          <h2>§ 12 Schlussbestimmungen</h2>
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist
            Nürnberg, sofern der Auftraggeber Kaufmann ist oder keinen
            allgemeinen Gerichtsstand in Deutschland hat.
          </p>

          <p className="mt-8 text-muted-foreground">
            Stand: März 2026
          </p>
        </div>
      </div>
    </section>
  );
}
