"use client";

import React, { useState, useEffect } from "react";

export default function SectionPageLoader() {
  // Start with true so loader appears on initial website page load
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Initial page load entrance animation
    const initialLoadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 650);

    const performSectionJump = (targetElement: HTMLElement, hashHref?: string) => {
      setIsLoading(true);

      const html = document.documentElement;
      const previousScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";

      setTimeout(() => {
        const navOffset = 74; // Sticky header offset
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "auto",
        });

        if (hashHref) {
          try {
            window.history.pushState(null, "", hashHref);
          } catch {
            // safe fallback
          }
        }

        html.style.scrollBehavior = previousScrollBehavior;

        // Smooth fade-out once destination is in view
        setTimeout(() => {
          setIsLoading(false);
        }, 130);
      }, 420);
    };

    // 2. Global click listener for internal navigation links
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip external links or phone/whatsapp/booking popup triggers
      if (
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        href.startsWith("http") ||
        href.startsWith("#booking")
      ) {
        return;
      }

      // Handle #home or # or internal section hashes
      let targetId = "";
      if (href === "#" || href === "#home") {
        targetId = "home";
      } else if (href.startsWith("#")) {
        targetId = href.substring(1);
      } else {
        return;
      }

      const targetElement = document.getElementById(targetId) || document.body;
      if (targetElement) {
        e.preventDefault();
        performSectionJump(targetElement, href === "#" ? "#home" : href);
      }
    };

    // 3. Programmatic custom event trigger (for buttons like BackToTop, etc.)
    const handleCustomTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetId: string }>;
      const targetId = customEvent.detail?.targetId;
      if (!targetId) return;

      const targetElement =
        targetId === "home" || targetId === "top"
          ? document.getElementById("home") || document.body
          : document.getElementById(targetId);

      if (targetElement) {
        performSectionJump(targetElement, `#${targetId}`);
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    window.addEventListener("trigger-section-transition", handleCustomTrigger);

    return () => {
      clearTimeout(initialLoadTimer);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      window.removeEventListener("trigger-section-transition", handleCustomTrigger);
    };
  }, []);

  return (
    <div
      className={`section-loader-overlay ${isLoading ? "active" : ""}`}
      aria-hidden={!isLoading}
      role="status"
    >
      <div className="section-loader-container">
        {/* Outer glowing reverse spinner ring */}
        <div className="section-loader-spinner-outer" />

        {/* Primary forward spinning gradient ring */}
        <div className="section-loader-spinner-inner" />

        {/* Center brand logo */}
        <div className="section-loader-logo-wrap">
          <img
            src="/logo.png"
            alt="Jai Jalaram Tours"
            width={74}
            height={74}
          />
        </div>
      </div>
    </div>
  );
}
