"use client";

import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Phone, X, Clock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const CONTACT = {
  phone: {
    display: "+49 911 48007161",
    href: "tel:+4991148007161",
  },
  whatsapp: {
    display: "+49 176 24824854",
    href: "https://wa.me/4917624824854?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Entr%C3%BCmpelungsdienstleistungen.",
  },
};

type ActionType = "phone" | "whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function track(event: string) {
  if (typeof window === "undefined") return;
  const win = window as unknown as { dataLayer?: unknown[] };
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push({ event });
}

// Trigger a real user-gesture navigation (works reliably across browsers/iframes)
function openLink(href: string, newTab: boolean) {
  if (typeof document === "undefined") return;
  const a = document.createElement("a");
  a.href = href;
  if (newTab) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function FloatingButtons() {
  const [open, setOpen] = useState(false);
  // Keep the last action stable during the close animation to avoid content flashing
  const [action, setAction] = useState<ActionType>("phone");

  const trigger = (type: ActionType) => {
    setAction(type);
    setOpen(true);
  };

  const handleConfirm = () => {
    if (action === "phone") {
      track("phone_click");
      openLink(CONTACT.phone.href, false);
    } else {
      track("whatsapp_click");
      openLink(CONTACT.whatsapp.href, true);
    }
    setOpen(false);
  };

  const isPhone = action === "phone";
  const data = isPhone
    ? {
        title: "Jetzt anrufen?",
        description:
          "Sie werden direkt mit unserem Team verbunden. Der Anruf ist unverbindlich und kostenlos aus dem deutschen Festnetz.",
        number: CONTACT.phone.display,
        note: "Mo–Sa: 08:00 – 18:00 Uhr erreichbar",
        confirmLabel: "Anrufen",
      }
    : {
        title: "WhatsApp Chat starten?",
        description:
          "WhatsApp wird geöffnet und eine Nachricht vorbereitet. Schreiben Sie uns – wir antworten schnellstmöglich.",
        number: CONTACT.whatsapp.display,
        note: "Antwort meist innerhalb weniger Minuten",
        confirmLabel: "WhatsApp öffnen",
      };

  return (
    <>
      {/* Floating action buttons */}
      <div className="floating-actions fixed z-50 flex flex-col items-end gap-3 no-print">
        {/* WhatsApp */}
        <div className="group relative flex items-center">
          <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:bg-gray-800 dark:text-gray-100 md:block">
            WhatsApp schreiben
          </span>
          <button
            type="button"
            onClick={() => trigger("whatsapp")}
            aria-label="WhatsApp Anfrage senden"
            title="WhatsApp schreiben"
            className="scale-in flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:bg-[#1fb457] active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
          >
            <WhatsAppIcon className="h-7 w-7" />
          </button>
        </div>

        {/* Phone */}
        <div className="group relative flex items-center">
          <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:bg-gray-800 dark:text-gray-100 md:block">
            Jetzt anrufen
          </span>
          <button
            type="button"
            onClick={() => trigger("phone")}
            aria-label="Jetzt anrufen"
            title="Jetzt anrufen"
            style={{ animationDelay: "0.08s" }}
            className="scale-in relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition-all duration-300 hover:scale-110 hover:bg-primary/90 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
          >
            <span className="absolute inset-0 rounded-full bg-primary opacity-30 motion-safe:animate-ping" />
            <Phone className="relative h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Confirmation dialog / bottom sheet */}
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="contact-overlay fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" />
          <DialogPrimitive.Content
            className={cn(
              "contact-sheet fixed inset-x-0 bottom-0 z-[70] max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border border-border bg-background shadow-2xl focus:outline-none",
              "sm:bottom-auto sm:right-auto sm:left-1/2 sm:top-1/2 sm:w-full sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl"
            )}
          >
            <div className="relative p-6 pb-8 sm:p-7">
              {/* Drag handle (mobile) */}
              <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-muted sm:hidden" />

              {/* Close (desktop) */}
              <DialogPrimitive.Close
                className="absolute right-4 top-4 hidden h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex"
                aria-label="Schließen"
              >
                <X className="h-4 w-4" />
              </DialogPrimitive.Close>

              {/* Icon */}
              <div
                className={cn(
                  "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl",
                  isPhone
                    ? "bg-primary/10 text-primary"
                    : "bg-[#25D366]/10 text-[#25D366]"
                )}
              >
                {isPhone ? (
                  <Phone className="h-8 w-8" />
                ) : (
                  <WhatsAppIcon className="h-8 w-8" />
                )}
              </div>

              <DialogPrimitive.Title className="mt-4 text-center text-xl font-bold text-foreground">
                {data.title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-muted-foreground">
                {data.description}
              </DialogPrimitive.Description>

              {/* Number card */}
              <div className="mt-5 flex items-center justify-center gap-3 rounded-2xl border border-border bg-muted/40 px-4 py-3.5">
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                    isPhone
                      ? "bg-primary/10 text-primary"
                      : "bg-[#25D366]/10 text-[#25D366]"
                  )}
                >
                  {isPhone ? (
                    <Phone className="h-4 w-4" />
                  ) : (
                    <WhatsAppIcon className="h-4 w-4" />
                  )}
                </span>
                <span
                  className="text-lg font-bold tracking-wide text-foreground"
                  dir="ltr"
                >
                  {data.number}
                </span>
              </div>

              {/* Note */}
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                {isPhone ? (
                  <Clock className="h-3.5 w-3.5" />
                ) : (
                  <ShieldCheck className="h-3.5 w-3.5" />
                )}
                <span>{data.note}</span>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
                <DialogPrimitive.Close asChild>
                  <button
                    type="button"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-1"
                  >
                    Abbrechen
                  </button>
                </DialogPrimitive.Close>
                <button
                  type="button"
                  onClick={handleConfirm}
                  className={cn(
                    "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-4 sm:flex-1",
                    isPhone
                      ? "bg-primary shadow-primary/40 hover:bg-primary/90 focus-visible:ring-primary/40"
                      : "bg-[#25D366] shadow-[#25D366]/40 hover:bg-[#1fb457] focus-visible:ring-[#25D366]/40"
                  )}
                >
                  {isPhone ? (
                    <Phone className="h-4 w-4" />
                  ) : (
                    <WhatsAppIcon className="h-4 w-4" />
                  )}
                  {data.confirmLabel}
                </button>
              </div>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
