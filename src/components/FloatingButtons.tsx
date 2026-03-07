"use client";

import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  const handleWhatsAppClick = () => {
    // Track conversion
    if (typeof window !== "undefined") {
      const win = window as unknown as { dataLayer?: unknown[] };
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: "whatsapp_click",
      });
    }
  };

  const handlePhoneClick = () => {
    // Track conversion
    if (typeof window !== "undefined") {
      const win = window as unknown as { dataLayer?: unknown[] };
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: "phone_click",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 no-print">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/4991148007161?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Entr%C3%BCmpelungsdienstleistungen."
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="floating-btn whatsapp-btn"
        aria-label="WhatsApp Anfrage"
        title="WhatsApp Anfrage"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+4991148007161"
        onClick={handlePhoneClick}
        className="floating-btn phone-btn"
        aria-label="Jetzt anrufen"
        title="Telefon anrufen"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Labels on hover (desktop only) */}
      <style jsx>{`
        .floating-btn {
          position: relative;
        }

        @media (min-width: 768px) {
          .floating-btn::before {
            content: attr(title);
            position: absolute;
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            padding: 0.5rem 1rem;
            background: white;
            color: #333;
            font-size: 0.875rem;
            font-weight: 500;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s, transform 0.3s;
            margin-right: 0.75rem;
          }

          .floating-btn:hover::before {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
