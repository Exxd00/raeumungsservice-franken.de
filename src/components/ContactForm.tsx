"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Upload,
  Send,
  Clock,
  Shield,
  Euro,
  X,
  ArrowRight,
  ArrowLeft,
  Home,
  User,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { services } from "@/data/services";

interface ContactFormProps {
  defaultService?: string;
  defaultCity?: string;
}

export function ContactForm({ defaultService, defaultCity }: ContactFormProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    service: defaultService || "",
    propertySize: "",
    urgency: "",
    name: "",
    phone: "",
    email: "",
    city: defaultCity || "",
    description: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + uploadedFiles.length <= 3) {
      setUploadedFiles([...uploadedFiles, ...files].slice(0, 3));
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceedToStep2 = formData.service && formData.propertySize;
  const canSubmit = formData.name && formData.phone && formData.city;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Track conversion
    if (typeof window !== "undefined") {
      const win = window as unknown as { dataLayer?: unknown[] };
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: "form_submit",
        form_name: "contact_form",
      });
    }

    // Redirect to thank you page
    router.push("/thank-you");
  };

  return (
    <section id="kontakt" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-xl mx-auto">
          {/* Privacy Badge */}
          <div className="flex items-center justify-center gap-2 mb-6 text-slate-400 text-sm">
            <Lock className="w-4 h-4" />
            <span>Ihre Daten werden vertraulich behandelt</span>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                  currentStep >= 1
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-slate-700 text-slate-400"
                }`}
              >
                1
              </div>
              <span className={`mt-2 text-xs font-medium uppercase tracking-wider ${
                currentStep >= 1 ? "text-white" : "text-slate-500"
              }`}>
                Immobilie
              </span>
            </div>

            <div className="w-16 h-0.5 bg-slate-700 relative">
              <div
                className={`absolute inset-0 bg-orange-500 transition-all duration-500 ${
                  currentStep >= 2 ? "w-full" : "w-0"
                }`}
              />
            </div>

            <div className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                  currentStep >= 2
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-slate-700 text-slate-400"
                }`}
              >
                2
              </div>
              <span className={`mt-2 text-xs font-medium uppercase tracking-wider ${
                currentStep >= 2 ? "text-white" : "text-slate-500"
              }`}>
                Kontakt
              </span>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-700/50 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Kostenlose Anfrage
              </h2>
              <p className="text-slate-400 text-sm">
                Wir erstellen Ihr unverbindliches Angebot!
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Property Details */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-fade-in">
                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label className="text-slate-300 text-sm font-medium">
                      Service auswählen
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleInputChange("service", value)}
                    >
                      <SelectTrigger className="h-12 bg-slate-900/80 border-slate-600 text-white rounded-xl focus:ring-orange-500 focus:border-orange-500">
                        <SelectValue placeholder="Bitte Service wählen" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        {services.map((service) => (
                          <SelectItem
                            key={service.slug}
                            value={service.slug}
                            className="text-white hover:bg-slate-700 focus:bg-slate-700"
                          >
                            {service.name}
                          </SelectItem>
                        ))}
                        <SelectItem value="sonstiges" className="text-white hover:bg-slate-700 focus:bg-slate-700">
                          Sonstiges
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Property Size */}
                  <div className="space-y-2">
                    <Label className="text-slate-300 text-sm font-medium">
                      Größe der Immobilie
                    </Label>
                    <Select
                      value={formData.propertySize}
                      onValueChange={(value) => handleInputChange("propertySize", value)}
                    >
                      <SelectTrigger className="h-12 bg-slate-900/80 border-slate-600 text-white rounded-xl focus:ring-orange-500 focus:border-orange-500">
                        <SelectValue placeholder="Bitte Größe wählen" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="1-zimmer" className="text-white hover:bg-slate-700">1-Zimmer Wohnung</SelectItem>
                        <SelectItem value="2-zimmer" className="text-white hover:bg-slate-700">2-Zimmer Wohnung</SelectItem>
                        <SelectItem value="3-zimmer" className="text-white hover:bg-slate-700">3-Zimmer Wohnung</SelectItem>
                        <SelectItem value="4-zimmer" className="text-white hover:bg-slate-700">4+ Zimmer Wohnung</SelectItem>
                        <SelectItem value="haus-klein" className="text-white hover:bg-slate-700">Kleines Haus (bis 120m²)</SelectItem>
                        <SelectItem value="haus-mittel" className="text-white hover:bg-slate-700">Mittleres Haus (120-200m²)</SelectItem>
                        <SelectItem value="haus-gross" className="text-white hover:bg-slate-700">Großes Haus (200m²+)</SelectItem>
                        <SelectItem value="keller" className="text-white hover:bg-slate-700">Nur Keller/Dachboden</SelectItem>
                        <SelectItem value="gewerbe" className="text-white hover:bg-slate-700">Gewerbeimmobilie</SelectItem>
                        <SelectItem value="sonstiges" className="text-white hover:bg-slate-700">Sonstiges</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Urgency */}
                  <div className="space-y-2">
                    <Label className="text-slate-300 text-sm font-medium">
                      Wann soll geräumt werden? (optional)
                    </Label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(value) => handleInputChange("urgency", value)}
                    >
                      <SelectTrigger className="h-12 bg-slate-900/80 border-slate-600 text-white rounded-xl focus:ring-orange-500 focus:border-orange-500">
                        <SelectValue placeholder="Zeitraum wählen" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="sofort" className="text-white hover:bg-slate-700">So schnell wie möglich</SelectItem>
                        <SelectItem value="1-woche" className="text-white hover:bg-slate-700">Innerhalb 1 Woche</SelectItem>
                        <SelectItem value="2-wochen" className="text-white hover:bg-slate-700">Innerhalb 2 Wochen</SelectItem>
                        <SelectItem value="1-monat" className="text-white hover:bg-slate-700">Innerhalb 1 Monat</SelectItem>
                        <SelectItem value="flexibel" className="text-white hover:bg-slate-700">Flexibel</SelectItem>
                        <SelectItem value="sonstiges" className="text-white hover:bg-slate-700">Sonstiges</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Next Button */}
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    disabled={!canProceedToStep2}
                    className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    Weiter
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              )}

              {/* Step 2: Contact Details */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-fade-in">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label className="text-slate-300 text-sm font-medium">
                      Ihr Name *
                    </Label>
                    <Input
                      type="text"
                      placeholder="Max Mustermann"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="h-12 bg-slate-900/80 border-slate-600 text-white rounded-xl placeholder:text-slate-500 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label className="text-slate-300 text-sm font-medium">
                      Telefonnummer *
                    </Label>
                    <Input
                      type="tel"
                      placeholder="0911 1234567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="h-12 bg-slate-900/80 border-slate-600 text-white rounded-xl placeholder:text-slate-500 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Email (optional) */}
                  <div className="space-y-2">
                    <Label className="text-slate-300 text-sm font-medium">
                      E-Mail (optional)
                    </Label>
                    <Input
                      type="email"
                      placeholder="ihre@email.de"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12 bg-slate-900/80 border-slate-600 text-white rounded-xl placeholder:text-slate-500 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <Label className="text-slate-300 text-sm font-medium">
                      Stadt / Ort *
                    </Label>
                    <Input
                      type="text"
                      placeholder="z.B. Nürnberg"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                      className="h-12 bg-slate-900/80 border-slate-600 text-white rounded-xl placeholder:text-slate-500 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Description (optional) */}
                  <div className="space-y-2">
                    <Label className="text-slate-300 text-sm font-medium">
                      Beschreibung (optional)
                    </Label>
                    <Textarea
                      placeholder="Weitere Details zu Ihrer Anfrage..."
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={3}
                      className="bg-slate-900/80 border-slate-600 text-white rounded-xl placeholder:text-slate-500 focus:ring-orange-500 focus:border-orange-500 resize-none"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label className="text-slate-300 text-sm font-medium">
                      Fotos (optional, max. 3)
                    </Label>
                    <div className="border-2 border-dashed border-slate-600 rounded-xl p-4 text-center hover:border-orange-500/50 transition-colors bg-slate-900/50">
                      <input
                        type="file"
                        id="photos"
                        name="photos"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                        disabled={uploadedFiles.length >= 3}
                      />
                      <label
                        htmlFor="photos"
                        className={`cursor-pointer ${
                          uploadedFiles.length >= 3
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                        <p className="text-slate-400 text-sm">
                          {uploadedFiles.length >= 3
                            ? "Maximum erreicht"
                            : "Klicken zum Hochladen"}
                        </p>
                      </label>
                    </div>

                    {/* Uploaded Files Preview */}
                    {uploadedFiles.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {uploadedFiles.map((file, index) => (
                          <div
                            key={`${file.name}-${index}`}
                            className="flex items-center gap-2 bg-slate-700 px-3 py-1.5 rounded-lg text-xs text-white"
                          >
                            <span className="truncate max-w-[120px]">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-slate-400 hover:text-red-400"
                              aria-label="Datei entfernen"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      variant="outline"
                      className="flex-1 h-14 bg-transparent border-slate-600 text-white hover:bg-slate-700 rounded-xl"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Zurück
                    </Button>
                    <Button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className="flex-[2] h-14 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Anfrage senden
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-slate-700">
              <div className="flex items-center gap-2 text-slate-400">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs">Kostenlos & unverbindlich</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs">Antwort in 24h</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Euro className="w-4 h-4 text-primary" />
                <span className="text-xs">Keine versteckten Kosten</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
