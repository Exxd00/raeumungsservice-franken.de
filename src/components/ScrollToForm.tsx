"use client";

import { useEffect, useCallback } from "react";

export function ScrollToForm() {
  const scrollToContactForm = useCallback(() => {
    const hash = window.location.hash;

    if (hash === "#contact-form") {
      // Multiple attempts to ensure element is rendered
      const scrollToElement = () => {
        const element = document.getElementById("contact-form");
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });

          // Add highlight effect
          element.style.transition = "box-shadow 0.5s ease-in-out";
          element.style.boxShadow = "0 0 0 4px rgba(249, 115, 22, 0.4)";

          setTimeout(() => {
            element.style.boxShadow = "none";
          }, 2000);

          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToElement()) {
        // If element not found, try again after delays
        const attempts = [100, 300, 500, 1000];
        attempts.forEach((delay) => {
          setTimeout(scrollToElement, delay);
        });
      }
    }
  }, []);

  useEffect(() => {
    // Run on initial mount
    scrollToContactForm();

    // Also listen for hash changes
    window.addEventListener("hashchange", scrollToContactForm);

    return () => {
      window.removeEventListener("hashchange", scrollToContactForm);
    };
  }, [scrollToContactForm]);

  // Also trigger on page load/navigation
  useEffect(() => {
    const timer = setTimeout(scrollToContactForm, 100);
    return () => clearTimeout(timer);
  }, [scrollToContactForm]);

  return null;
}
