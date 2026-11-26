"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SectionPageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  // 1. Initial page load entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 550);
    return () => clearTimeout(timer);
  }, []);

  // 2. Trigger loader whenever moving from one page to another
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setIsLoading(true);
      window.scrollTo(0, 0);

      const hideTimer = setTimeout(() => {
        setIsLoading(false);
      }, 480);

      return () => clearTimeout(hideTimer);
    }
  }, [pathname]);

  // 3. Global click interceptor to activate loader immediately upon clicking any internal navigation link
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip external links, tel, mailto, whatsapp or in-page hash anchors
      if (
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        href.startsWith("http") ||
        href.startsWith("#") ||
        anchor.target === "_blank"
      ) {
        return;
      }

      const currentPath = window.location.pathname;
      const targetPath = href.split("?")[0].split("#")[0];

      if (targetPath && targetPath !== currentPath) {
        setIsLoading(true);
        // Fallback safety timeout if navigation fails or is aborted
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, []);

  return (
    <div
      className={`section-loader-overlay ${isLoading ? "active" : ""}`}
      aria-hidden={!isLoading}
      role="status"
    >
      <div className="section-loader-container">
        {/* Outer glowing reverse spinner ring (Temple Gold) */}
        <div className="section-loader-spinner-outer" />

        {/* Primary forward spinning gradient ring (Deep Teal) */}
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
