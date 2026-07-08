import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ContactForm } from "@/components/ContactForm";
import { HowWeWork } from "@/components/HowWeWork";
import { SmartApproach } from "@/components/SmartApproach";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ContactForm />
      <HowWeWork />
      <SmartApproach />
      <WhyUs />
      <FAQ />
      <Testimonials />
      <Gallery />
      <CTASection />
    </>
  );
}
