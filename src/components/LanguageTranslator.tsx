"use client";

import React, { useState, useEffect } from "react";
import { Languages, ArrowRight } from "lucide-react";

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
}

export const supportedLanguages: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [currentLang, setCurrentLang] = useState<string>("en");

  useEffect(() => {
    // Read active language from cookie or localStorage
    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/i);
    const saved = match ? match[1].toLowerCase() : localStorage.getItem("site_lang") || "en";
    if (["en", "gu", "hi"].includes(saved)) {
      setCurrentLang(saved);
    }

    const handleLangSync = (e: Event) => {
      const customEvent = e as CustomEvent<{ code: string }>;
      if (customEvent.detail?.code) {
        setCurrentLang(customEvent.detail.code);
      }
    };

    window.addEventListener("app-language-changed", handleLangSync);
    return () => window.removeEventListener("app-language-changed", handleLangSync);
  }, []);

  const handleSelectLanguage = (targetCode: string, targetName: string) => {
    if (targetCode === currentLang) return;

    const fromLangObj = supportedLanguages.find((l) => l.code === currentLang);
    const fromName = fromLangObj ? fromLangObj.nativeName : "English";

    // Dispatch global event to show translation loader & trigger Google Translate
    window.dispatchEvent(
      new CustomEvent("trigger-language-translate", {
        detail: {
          fromCode: currentLang,
          fromName: fromName,
          toCode: targetCode,
          toName: targetName,
        },
      })
    );
  };

  return (
    <div className={`lang-switcher-container ${className}`}>
      <Languages size={13} className="lang-icon" aria-hidden="true" />
      <div className="lang-pills-list">
        {supportedLanguages.map((lang) => {
          const isActive = currentLang === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              className={`lang-pill-btn ${isActive ? "active" : ""}`}
              onClick={() => handleSelectLanguage(lang.code, lang.nativeName)}
              title={`Switch language to ${lang.name}`}
            >
              <span>{lang.nativeName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function LanguageTranslator() {
  const [translatingState, setTranslatingState] = useState<{
    active: boolean;
    fromName: string;
    toName: string;
  }>({
    active: false,
    fromName: "",
    toName: "",
  });

  useEffect(() => {
    // 1. Initialize Google Translate Script
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        try {
          new (window as any).google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,gu,hi",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        } catch (err) {
          console.error("Google translate element initialization error:", err);
        }
      };
    }

    // 2. Listen for translation requests
    const handleTranslate = (e: Event) => {
      const customEvent = e as CustomEvent<{
        fromCode: string;
        fromName: string;
        toCode: string;
        toName: string;
      }>;

      const { fromName, toCode, toName } = customEvent.detail;

      // Show the dedicated language translation loader
      setTranslatingState({
        active: true,
        fromName: fromName,
        toName: toName,
      });

      // Save cookie for Google Translate
      const cookieValue = `/en/${toCode}`;
      document.cookie = `googtrans=${cookieValue}; path=/;`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${window.location.hostname};`;
      localStorage.setItem("site_lang", toCode);

      // Tell all switchers to update active state
      window.dispatchEvent(
        new CustomEvent("app-language-changed", {
          detail: { code: toCode },
        })
      );

      // Trigger the Google Translate select dropdown element
      setTimeout(() => {
        const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (select) {
          select.value = toCode;
          select.dispatchEvent(new Event("change"));
        } else {
          // If combo not ready in DOM, reload smoothly to apply cookie translation
          window.location.reload();
          return;
        }

        // Hide translation loader after translation applies smoothly
        setTimeout(() => {
          setTranslatingState({
            active: false,
            fromName: "",
            toName: "",
          });
        }, 850);
      }, 350);
    };

    window.addEventListener("trigger-language-translate", handleTranslate);
    return () => window.removeEventListener("trigger-language-translate", handleTranslate);
  }, []);

  return (
    <>
      {/* Hidden Google Translate container */}
      <div id="google_translate_element" style={{ display: "none" }} aria-hidden="true" />

      {/* Dedicated Translation Loader with Language-to-Language Animation */}
      {translatingState.active && (
        <div className="translation-loader-overlay" role="status" aria-live="polite">
          <div className="translation-loader-card">
            <div className="translation-loader-header">
              <div className="translation-icon-badge">
                <Languages size={24} className="translation-pulse-icon" />
              </div>
            </div>

            <div className="translation-lang-flow">
              <div className="trans-lang-pill from-lang">
                <span className="trans-pill-sub">FROM</span>
                <span className="trans-pill-name">{translatingState.fromName}</span>
              </div>

              <div className="trans-flow-arrow">
                <ArrowRight size={18} />
              </div>

              <div className="trans-lang-pill to-lang">
                <span className="trans-pill-sub">TO</span>
                <span className="trans-pill-name">{translatingState.toName}</span>
              </div>
            </div>

            <p className="translation-card-title">
              Translating website to <strong>{translatingState.toName}</strong>
            </p>

            <div className="translation-progress-track">
              <div className="translation-progress-bar" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
