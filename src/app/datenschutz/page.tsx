import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Räumungsservice Franken.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          <h1>Datenschutzerklärung</h1>

          <h2>1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </strong>
          </p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen.
          </p>

          <h3>Wie erfassen wir Ihre Daten?</h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
            ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>

          <h3>Wofür nutzen wir Ihre Daten?</h3>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden.
          </p>

          <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            Netlify Inc., 2325 3rd Street, Suite 296, San Francisco, CA 94107,
            USA.
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p>
            Räumungsservice Franken
            <br />
            Hauptstraße 1<br />
            90402 Nürnberg
            <br />
            Telefon: 0911-48007161
            <br />
            E-Mail: info@raeumungsservice-franken.de
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3>Anfrage per E-Mail, Telefon oder WhatsApp</h3>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird
            Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen
            Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
            uns gespeichert und verarbeitet.
          </p>

          <h2>5. Ihre Rechte</h2>
          <p>
            Sie haben folgende Rechte hinsichtlich der Sie betreffenden
            personenbezogenen Daten:
          </p>
          <ul>
            <li>Recht auf Auskunft</li>
            <li>Recht auf Berichtigung oder Löschung</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
          </ul>
          <p>
            Sie haben zudem das Recht, sich bei einer
            Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
            personenbezogenen Daten durch uns zu beschweren.
          </p>
        </div>
      </div>
    </section>
  );
}
