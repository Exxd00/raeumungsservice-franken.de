"use client";

import { HelpCircle, Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Was kostet eine Entrümpelung?",
    answer:
      "Die Kosten hängen von verschiedenen Faktoren ab: Größe der Immobilie, Menge des Hausrats und Zugänglichkeit. Nach einer kostenlosen Besichtigung erstellen wir Ihnen einen transparenten Festpreis - ohne versteckte Kosten. Bei uns gibt es keine bösen Überraschungen.",
  },
  {
    question: "Wie schnell können Sie mit der Räumung beginnen?",
    answer:
      "In der Regel können wir innerhalb von 2-5 Werktagen mit der Entrümpelung beginnen. Bei dringenden Fällen bieten wir auch Express-Service an. Rufen Sie uns einfach an und wir finden gemeinsam den schnellstmöglichen Termin.",
  },
  {
    question: "Übernehmen Sie auch die Entsorgung?",
    answer:
      "Ja, selbstverständlich! Wir kümmern uns um die fachgerechte und umweltfreundliche Entsorgung aller Gegenstände. Verwertbare Materialien werden recycelt und Sondermüll wird ordnungsgemäß entsorgt. Sie erhalten auf Wunsch einen Entsorgungsnachweis.",
  },
  {
    question: "Werden Wertgegenstände angerechnet?",
    answer:
      "Ja, wertvolle Gegenstände wie Antiquitäten, Schmuck oder gut erhaltene Möbel können auf den Gesamtpreis angerechnet werden. Wir begutachten vor Ort alle Gegenstände und berücksichtigen deren Wert bei der Kalkulation.",
  },
  {
    question: "Räumen Sie auch Keller und Dachböden?",
    answer:
      "Natürlich! Wir räumen komplette Häuser inklusive Keller, Dachboden, Garage und Gartenhäuser. Auch einzelne Räume oder Teilräumungen sind möglich. Sprechen Sie uns einfach an.",
  },
  {
    question: "Muss ich bei der Räumung anwesend sein?",
    answer:
      "Nein, Ihre Anwesenheit ist nicht zwingend erforderlich. Nach einer Schlüsselübergabe können wir die Entrümpelung auch in Ihrer Abwesenheit durchführen. Sie erhalten nach Abschluss die Schlüssel zurück und können die besenrein übergebene Immobilie besichtigen.",
  },
  {
    question: "In welchen Städten sind Sie tätig?",
    answer:
      "Wir sind in ganz Franken tätig - von Nürnberg über Fürth, Erlangen, Bamberg bis nach Würzburg und darüber hinaus. Unser Einzugsgebiet umfasst einen Radius von ca. 100 km um Nürnberg.",
  },
  {
    question: "Was passiert mit persönlichen Dokumenten?",
    answer:
      "Persönliche Dokumente wie Fotos, Briefe oder wichtige Unterlagen werden selbstverständlich gesichert und Ihnen übergeben. Auf Wunsch können wir auch bei der Sortierung helfen. Vertrauliche Dokumente werden auf Wunsch datenschutzkonform vernichtet.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4 animate-fade-in">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              Häufig gestellte Fragen
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Haben Sie Fragen?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Dienstleistungen
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="bg-muted rounded-2xl border-0 px-6 overflow-hidden transition-all duration-300 hover:shadow-lg data-[state=open]:shadow-lg data-[state=open]:bg-accent"
              >
                <AccordionTrigger className="py-5 text-left hover:no-underline group">
                  <span className="font-semibold text-base sm:text-lg pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ihre Frage ist nicht dabei?
          </p>
          <a
            href="tel:+4991148007161"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Rufen Sie uns an - wir beraten Sie gerne!
          </a>
        </div>
      </div>
    </section>
  );
}
