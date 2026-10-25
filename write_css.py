# -*- coding: utf-8 -*-
css_code = """/* ============================================================
   Jai Jalaram Tours & Travellers - ULTRA WHITE PROFESSIONAL THEME
   Corporate, Clean, Modern, Pristine & High-Trust Travel Aesthetics
   ============================================================ */

:root {
  /* Surface Colors */
  --bg-pure: #FFFFFF;
  --bg-body: #F8FAFC;
  --bg-subtle: #F1F5F9;
  --bg-card: #FFFFFF;
  --bg-card-hover: #FFFFFF;
  
  /* Brand Typography Colors */
  --text-heading: #0F172A;
  --text-body: #334155;
  --text-muted: #64748B;
  --text-light: #94A3B8;
  
  /* Brand Accents */
  --royal-blue: #1E40AF;
  --royal-blue-hover: #1D4ED8;
  --royal-blue-light: #EFF6FF;
  --royal-blue-border: #DBEAFE;
  
  --gold: #D97706;
  --gold-dark: #B45309;
  --gold-light: #FEF3C7;
  --gold-border: #FDE68A;
  --gold-grad: linear-gradient(135deg, #D97706 0%, #B45309 100%);
  
  --wa-green: #16A34A;
  --wa-green-hover: #15803D;
  --wa-green-light: #DCFCE7;
  
  --emerald: #059669;
  --emerald-light: #ECFDF5;
  
  /* Borders */
  --border-light: #E2E8F0;
  --border-medium: #CBD5E1;
  --border-focus: #3B82F6;
  
  /* Modern Layered Shadows */
  --shadow-xs: 0 1px 2px rgba(15, 23, 42, 0.04);
  --shadow-sm: 0 2px 8px -2px rgba(15, 23, 42, 0.05), 0 1px 4px -1px rgba(15, 23, 42, 0.03);
  --shadow-md: 0 8px 24px -4px rgba(15, 23, 42, 0.07), 0 2px 6px -1px rgba(15, 23, 42, 0.04);
  --shadow-lg: 0 16px 36px -6px rgba(15, 23, 42, 0.09), 0 4px 12px -2px rgba(15, 23, 42, 0.04);
  --shadow-xl: 0 24px 48px -8px rgba(15, 23, 42, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.05);
  --shadow-blue: 0 8px 24px rgba(30, 64, 175, 0.22);
  --shadow-gold: 0 8px 24px rgba(217, 119, 6, 0.25);
  --shadow-wa: 0 8px 24px rgba(22, 163, 74, 0.25);
  
  /* Radii */
  --r-xs: 6px;
  --r-sm: 8px;
  --r-md: 12px;
  --r-lg: 16px;
  --r-xl: 20px;
  --r-2xl: 28px;
  --r-full: 9999px;
  
  /* Transitions */
  --t-fast: 0.18s cubic-bezier(0.4, 0, 0.2, 1);
  --t-normal: 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  --t-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ────────────────────────────────────────────────────────────
   1. RESET & BASE
   ──────────────────────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-jakarta), 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--bg-body);
  color: var(--text-body);
  line-height: 1.65;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-outfit), 'Outfit', sans-serif;
  color: var(--text-heading);
  line-height: 1.25;
  letter-spacing: -0.015em;
  font-weight: 800;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color var(--t-fast);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  outline: none;
  border: none;
  background: none;
}

button {
  cursor: pointer;
}

ul {
  list-style: none;
}

::selection {
  background: rgba(30, 64, 175, 0.12);
  color: var(--royal-blue);
}

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #F1F5F9;
}

::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: var(--r-full);
}

::-webkit-scrollbar-thumb:hover {
  background: #94A3B8;
}

/* ────────────────────────────────────────────────────────────
   2. UTILITIES & SHARED LAYOUT
   ──────────────────────────────────────────────────────────── */
.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-padding {
  padding: 96px 0;
}

.bg-light, .bg-alt {
  background-color: #F8FAFC;
}

.text-center {
  text-align: center;
}

.text-amber {
  color: var(--gold) !important;
}

.text-brand, .text-blue {
  color: var(--royal-blue) !important;
}

.text-emerald {
  color: var(--emerald) !important;
}

.inline-icon {
  display: inline-block;
  vertical-align: middle;
}

.gradient-text {
  background: linear-gradient(135deg, var(--royal-blue) 0%, var(--gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header {
  margin-bottom: 54px;
}

.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--royal-blue);
  background: var(--royal-blue-light);
  border: 1px solid var(--royal-blue-border);
  padding: 6px 16px;
  border-radius: var(--r-full);
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(2rem, 3.2vw, 2.75rem);
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 16px;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 680px;
  margin: 0 auto;
  line-height: 1.75;
}

/* ────────────────────────────────────────────────────────────
   3. TOP ANNOUNCEMENT BAR (Clean Light Executive Style)
   ──────────────────────────────────────────────────────────── */
.top-announcement-bar {
  background: #FFFFFF;
  border-bottom: 1px solid var(--border-light);
  padding: 10px 0;
  font-size: 0.78rem;
  position: relative;
  z-index: 200;
}

.top-bar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.auspicious-motto {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: var(--text-body);
}

.top-contacts {
  display: flex;
  align-items: center;
  gap: 18px;
}

.top-contact-link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  color: var(--text-heading);
}

.top-contact-link:hover {
  color: var(--royal-blue);
}

.top-whatsapp-link {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--wa-green-light);
  color: var(--wa-green);
  border: 1px solid rgba(22, 163, 74, 0.25);
  font-weight: 800;
  padding: 4px 14px;
  border-radius: var(--r-full);
  transition: all var(--t-fast);
}

.top-whatsapp-link:hover {
  background: var(--wa-green);
  color: #FFFFFF;
  box-shadow: var(--shadow-wa);
}

/* ────────────────────────────────────────────────────────────
   4. NAVBAR (Crisp Pure White Glass Header)
   ──────────────────────────────────────────────────────────── */
.main-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border-light);
  transition: all var(--t-normal);
}

.main-header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-sm);
  border-bottom-color: var(--border-medium);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  gap: 24px;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.brand-logo-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--border-light);
  box-shadow: var(--shadow-xs);
  flex-shrink: 0;
  background: #FFFFFF;
}

.brand-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: var(--font-outfit), 'Outfit', sans-serif;
  font-size: 1.12rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.15;
}

.brand-sub {
  font-size: 0.72rem;
  color: var(--gold-dark);
  font-weight: 700;
  letter-spacing: 0.02em;
}

.brand-badge {
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--royal-blue);
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-link {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-body);
  padding: 8px 14px;
  border-radius: var(--r-sm);
  transition: all var(--t-fast);
}

.nav-link:hover {
  color: var(--royal-blue);
  background: var(--royal-blue-light);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: var(--r-md);
  color: var(--text-heading);
  background: #F8FAFC;
  border: 1px solid var(--border-light);
  transition: var(--t-fast);
}

.mobile-menu-toggle:hover {
  background: var(--royal-blue-light);
  color: var(--royal-blue);
  border-color: var(--royal-blue-border);
}

/* Mobile Drawer Backdrop */
.mobile-drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 9998;
  animation: fadeIn 0.25s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Mobile Drawer */
.mobile-drawer {
  display: none;
  position: fixed;
  top: 0;
  right: -100%;
  width: min(340px, 92vw);
  height: 100vh;
  background: #FFFFFF;
  border-left: 1px solid var(--border-light);
  z-index: 9999;
  transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  flex-direction: column;
  overflow-y: auto;
  box-shadow: -8px 0 32px rgba(15, 23, 42, 0.15);
}

.mobile-drawer.open {
  right: 0;
}

.mobile-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-light);
  background: #FFFFFF;
}

.mobile-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-brand-logo-wrap {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 1.5px solid var(--border-medium);
  box-shadow: var(--shadow-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.mobile-brand-logo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.mobile-brand-text {
  display: flex;
  flex-direction: column;
}

.mobile-brand-name {
  font-family: var(--font-outfit), 'Outfit', sans-serif;
  font-size: 1.02rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.mobile-brand-sub {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: 2px;
}

.mobile-close {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #F8FAFC;
  border: 1px solid var(--border-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-body);
  cursor: pointer;
  transition: all var(--t-fast);
  flex-shrink: 0;
}

.mobile-close:hover {
  background: #FEF2F2;
  color: #DC2626;
  border-color: #FECACA;
  transform: rotate(90deg);
}

.mobile-nav-links {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  font-size: 0.94rem;
  font-weight: 600;
  color: var(--text-body);
  border-radius: var(--r-md);
  transition: all var(--t-fast);
}

.mobile-link:hover {
  background: var(--royal-blue-light);
  color: var(--royal-blue);
}

.mobile-cta-btn {
  width: 100%;
  margin-top: 14px;
  padding: 14px;
  background: var(--royal-blue);
  color: #FFFFFF;
  font-weight: 800;
  font-size: 0.94rem;
  border-radius: var(--r-md);
  box-shadow: var(--shadow-blue);
}

.mobile-drawer-footer {
  margin-top: auto;
  padding: 18px 20px;
  background: #F8FAFC;
  border-top: 1px solid var(--border-light);
  font-size: 0.82rem;
  color: var(--text-muted);
}

/* ────────────────────────────────────────────────────────────
   5. HERO SECTION (Luminous Architectural Theme with Gujarat Artwork)
   ──────────────────────────────────────────────────────────── */
.hero-section {
  position: relative;
  background-color: #F8FAFC;
  background-image: 
    radial-gradient(ellipse 85% 70% at 50% 40%, rgba(255, 255, 255, 0.86) 0%, rgba(255, 255, 255, 0.50) 55%, rgba(248, 250, 252, 0.90) 100%),
    url('/hero-bg.jpg');
  background-size: cover;
  background-position: center 35%;
  background-repeat: no-repeat;
  border-bottom: 1px solid var(--border-light);
  padding: 96px 0 96px;
  overflow: hidden;
}

.hero-centered-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Auspicious Pill Badge */
.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #FFFFFF;
  border: 1px solid var(--gold-border);
  color: var(--gold-dark);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding: 8px 20px;
  border-radius: var(--r-full);
  margin-bottom: 24px;
  box-shadow: var(--shadow-xs);
}

.hero-title {
  font-size: clamp(2.3rem, 5vw, 3.8rem);
  font-weight: 900;
  color: var(--text-heading);
  line-height: 1.15;
  margin-bottom: 22px;
  letter-spacing: -0.025em;
}

.hero-title .gradient-text {
  display: block;
  margin-top: 6px;
  background: linear-gradient(135deg, var(--royal-blue) 0%, #2563EB 50%, var(--gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
}

.hero-description, .hero-centered-description {
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  color: var(--text-body);
  line-height: 1.8;
  max-width: 760px;
  margin: 0 auto 36px;
}

.hero-description strong, .hero-centered-description strong {
  color: var(--text-heading);
  font-weight: 700;
}

/* Hero CTA Group */
.hero-cta-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 0;
}

.btn-hero-book {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--royal-blue);
  color: #FFFFFF !important;
  font-size: 1rem;
  font-weight: 800;
  padding: 16px 34px;
  border-radius: var(--r-full);
  box-shadow: var(--shadow-blue);
  transition: all var(--t-normal);
  border: none;
}

.btn-hero-book:hover {
  background: var(--royal-blue-hover);
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(30, 64, 175, 0.32);
}

.btn-hero-call {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #FFFFFF;
  color: var(--text-heading) !important;
  font-size: 0.98rem;
  font-weight: 700;
  padding: 15px 30px;
  border-radius: var(--r-full);
  border: 1px solid var(--border-medium);
  box-shadow: var(--shadow-sm);
  transition: all var(--t-normal);
}

.btn-hero-call:hover {
  background: #F8FAFC;
  border-color: var(--royal-blue);
  color: var(--royal-blue) !important;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Hero Highlight Feature Cards (Pure White Cards) */
.hero-highlights, .hero-centered-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 780px;
  margin: 0 auto 36px;
}

.highlight-item, .clickable-highlight {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #FFFFFF;
  border: 1px solid var(--border-light);
  border-radius: var(--r-lg);
  padding: 16px 18px;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--t-normal);
  text-align: left;
}

.highlight-item:hover, .clickable-highlight:hover {
  border-color: var(--royal-blue-border);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.highlight-icon-box {
  width: 48px;
  height: 48px;
  border-radius: var(--r-md);
  background: var(--royal-blue-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--royal-blue);
}

.highlight-info strong {
  display: block;
  font-size: 0.92rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 2px;
}

.highlight-info span {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Trust Bar */
.hero-trust-bar, .hero-centered-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-body);
  background: #FFFFFF;
  border: 1px solid var(--border-light);
  padding: 7px 16px;
  border-radius: var(--r-full);
  box-shadow: var(--shadow-xs);
}

.trust-check {
  color: var(--emerald);
}

/* ────────────────────────────────────────────────────────────
   6. QUICK ROUTES (Interactive Ticker Strip)
   ──────────────────────────────────────────────────────────── */
.quick-routes-bar, .quick-routes-section {
  background: #FFFFFF;
  border-bottom: 1px solid var(--border-light);
  padding: 22px 0;
}

.quick-routes-bar .container {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.routes-scroller-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.84rem;
  font-weight: 800;
  color: var(--text-heading);
  white-space: nowrap;
}

.routes-chips {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  flex: 1;
}

.route-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #F8FAFC;
  border: 1px solid var(--border-light);
  color: var(--text-body);
  font-size: 0.82rem;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: var(--r-full);
  cursor: pointer;
  transition: all var(--t-fast);
}

.route-chip:hover {
  background: var(--royal-blue-light);
  border-color: var(--royal-blue-border);
  color: var(--royal-blue);
  transform: translateY(-1px);
  box-shadow: var(--shadow-xs);
}

/* ────────────────────────────────────────────────────────────
   7. SERVICES GRID (Corporate Pure White Cards)
   ──────────────────────────────────────────────────────────── */
.services-section {
  background: #F8FAFC;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.service-card {
  background: #FFFFFF;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  padding: 36px 30px;
  transition: all var(--t-normal);
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
}

.service-card:hover {
  border-color: var(--royal-blue-border);
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.featured-service {
  border-color: var(--royal-blue-border);
  box-shadow: 0 10px 30px rgba(30, 64, 175, 0.08);
  position: relative;
}

.featured-badge {
  position: absolute;
  top: -1px;
  right: 28px;
  background: var(--royal-blue);
  color: #FFFFFF;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  padding: 5px 14px;
  border-radius: 0 0 var(--r-sm) var(--r-sm);
  box-shadow: var(--shadow-xs);
}

.card-icon-badge {
  width: 64px;
  height: 64px;
  border-radius: var(--r-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: #FFFFFF;
  flex-shrink: 0;
  box-shadow: var(--shadow-sm);
}

.gold-gradient {
  background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
}

.amber-gradient {
  background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%);
}

.royal-gradient {
  background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%);
}

.emerald-gradient {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
}

.card-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 12px;
}

.card-text {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 24px;
}

.card-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
  flex: 1;
}

.card-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.88rem;
  color: var(--text-body);
  font-weight: 600;
}

.btn-card-select {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 13px 20px;
  background: var(--royal-blue-light);
  color: var(--royal-blue);
  border: 1px solid var(--royal-blue-border);
  border-radius: var(--r-md);
  font-size: 0.92rem;
  font-weight: 800;
  cursor: pointer;
  transition: all var(--t-normal);
}

.btn-card-select:hover {
  background: var(--royal-blue);
  color: #FFFFFF;
  border-color: var(--royal-blue);
  box-shadow: var(--shadow-blue);
  transform: translateY(-2px);
}

.btn-featured-select {
  background: var(--royal-blue);
  color: #FFFFFF;
  border-color: var(--royal-blue);
  box-shadow: var(--shadow-blue);
}

.btn-featured-select:hover {
  background: var(--royal-blue-hover);
}

/* ────────────────────────────────────────────────────────────
   8. GUJARAT COVERAGE SECTION (Modern Light Interactive Hub)
   ──────────────────────────────────────────────────────────── */
.gujarat-coverage-section {
  background: #FFFFFF;
  padding: 96px 0;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
}

.coverage-box {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 50px;
  align-items: center;
}

.gold-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-dark);
  background: var(--gold-light);
  border: 1px solid var(--gold-border);
  padding: 6px 16px;
  border-radius: var(--r-full);
  margin-bottom: 16px;
}

.coverage-title {
  font-size: clamp(1.85rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 16px;
  line-height: 1.25;
}

.coverage-desc {
  font-size: 0.98rem;
  color: var(--text-body);
  line-height: 1.8;
  margin-bottom: 24px;
}

.coverage-cities-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.city-tag {
  display: inline-flex;
  align-items: center;
  background: #F8FAFC;
  border: 1px solid var(--border-light);
  color: var(--text-body);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 7px 13px;
  border-radius: var(--r-md);
  transition: all var(--t-fast);
}

.city-tag:hover {
  background: var(--royal-blue-light);
  color: var(--royal-blue);
  border-color: var(--royal-blue-border);
}

.coverage-cta-row {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-gold {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--gold-grad);
  color: #FFFFFF !important;
  font-size: 0.92rem;
  font-weight: 800;
  padding: 13px 26px;
  border-radius: var(--r-full);
  box-shadow: var(--shadow-gold);
  transition: all var(--t-normal);
  border: none;
}

.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(217, 119, 6, 0.35);
}

.btn-outline-white {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  color: var(--text-heading);
  border: 1px solid var(--border-medium);
  font-size: 0.92rem;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: var(--r-full);
  transition: all var(--t-normal);
}

.btn-outline-white:hover {
  background: #F8FAFC;
  border-color: var(--royal-blue);
  color: var(--royal-blue);
}

.coverage-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.stat-card {
  background: #F8FAFC;
  border: 1px solid var(--border-light);
  border-radius: var(--r-lg);
  padding: 26px 20px;
  text-align: center;
  transition: all var(--t-normal);
}

.stat-card:hover {
  background: #FFFFFF;
  border-color: var(--royal-blue-border);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.stat-num {
  font-size: 2.6rem;
  font-weight: 900;
  color: var(--royal-blue);
  line-height: 1.1;
  margin-bottom: 6px;
}

.stat-lbl {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 700;
  letter-spacing: 0.02em;
}

/* ────────────────────────────────────────────────────────────
   9. FLEET SHOWCASE (Crisp White Spec Cards)
   ──────────────────────────────────────────────────────────── */
.fleet-section {
  background: #F8FAFC;
}

.fleet-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.fleet-card {
  background: #FFFFFF;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  overflow: hidden;
  transition: all var(--t-normal);
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
}

.fleet-card:hover {
  border-color: var(--royal-blue-border);
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.premium-fleet-card {
  border-color: var(--gold-border);
  background: linear-gradient(175deg, #FFFDF7 0%, #FFFFFF 100%);
}

.premium-ribbon {
  position: absolute;
  top: 14px;
  right: -28px;
  background: var(--gold-grad);
  color: #FFFFFF;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  padding: 5px 36px;
  transform: rotate(45deg);
  box-shadow: var(--shadow-xs);
}

.fleet-header {
  padding: 22px 22px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fleet-type-badge {
  background: #F1F5F9;
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: var(--r-full);
  border: 1px solid var(--border-light);
}

.fleet-type-badge.gold-badge {
  background: var(--gold-light);
  color: var(--gold-dark);
  border-color: var(--gold-border);
}

.fleet-pax {
  font-size: 0.74rem;
  font-weight: 800;
  color: var(--emerald);
  background: var(--emerald-light);
  padding: 5px 12px;
  border-radius: var(--r-full);
  border: 1px solid rgba(5, 150, 105, 0.2);
}

.fleet-body {
  padding: 18px 22px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.fleet-model {
  font-size: 1.18rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 4px;
}

.fleet-tagline {
  font-size: 0.84rem;
  color: var(--text-muted);
  margin-bottom: 18px;
  line-height: 1.5;
}

.fleet-specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 22px;
  flex: 1;
}

.spec-item {
  background: #F8FAFC;
  border: 1px solid var(--border-light);
  border-radius: var(--r-sm);
  padding: 8px 10px;
}

.spec-label {
  display: block;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--royal-blue);
  margin-bottom: 2px;
}

.spec-val {
  font-size: 0.78rem;
  color: var(--text-heading);
  font-weight: 600;
}

.btn-fleet-book {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  background: var(--royal-blue-light);
  color: var(--royal-blue);
  border: 1px solid var(--royal-blue-border);
  border-radius: var(--r-md);
  font-size: 0.88rem;
  font-weight: 800;
  cursor: pointer;
  transition: all var(--t-normal);
}

.btn-fleet-book:hover {
  background: var(--royal-blue);
  color: #FFFFFF;
  border-color: var(--royal-blue);
  box-shadow: var(--shadow-blue);
}

/* ────────────────────────────────────────────────────────────
   10. TOUR PACKAGES (Gujarat Yatras)
   ──────────────────────────────────────────────────────────── */
.destinations-section {
  background: #FFFFFF;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.package-card {
  background: #F8FAFC;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  padding: 28px 24px;
  transition: all var(--t-normal);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-xs);
}

.package-card:hover {
  background: #FFFFFF;
  border-color: var(--royal-blue-border);
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.wedding-card {
  background: #FFFDF8;
  border-color: var(--gold-border);
}

.pkg-header {
  margin-bottom: 14px;
}

.pkg-days {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold-dark);
  background: var(--gold-light);
  border: 1px solid var(--gold-border);
  padding: 5px 12px;
  border-radius: var(--r-full);
  margin-bottom: 10px;
}

.pkg-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.3;
}

.pkg-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 20px;
  flex: 1;
}

.pkg-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
  font-size: 0.8rem;
  color: var(--text-muted);
  background: #FFFFFF;
  padding: 10px 14px;
  border-radius: var(--r-md);
  border: 1px solid var(--border-light);
}

.btn-pkg-inquire {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  background: var(--royal-blue-light);
  color: var(--royal-blue);
  border: 1px solid var(--royal-blue-border);
  border-radius: var(--r-md);
  font-size: 0.88rem;
  font-weight: 800;
  cursor: pointer;
  transition: all var(--t-normal);
}

.btn-pkg-inquire:hover {
  background: var(--royal-blue);
  color: #FFFFFF;
  border-color: var(--royal-blue);
  box-shadow: var(--shadow-blue);
}

/* ────────────────────────────────────────────────────────────
   11. WHY CHOOSE US
   ──────────────────────────────────────────────────────────── */
.why-us-section {
  background: #F8FAFC;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.why-card {
  background: #FFFFFF;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  padding: 32px 26px;
  transition: all var(--t-normal);
  box-shadow: var(--shadow-xs);
}

.why-card:hover {
  border-color: var(--royal-blue-border);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.why-icon-box {
  width: 58px;
  height: 58px;
  border-radius: var(--r-lg);
  background: var(--royal-blue-light);
  border: 1px solid var(--royal-blue-border);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all var(--t-normal);
}

.why-card h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 10px;
}

.why-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.75;
}

/* ────────────────────────────────────────────────────────────
   12. HOW IT WORKS
   ──────────────────────────────────────────────────────────── */
.how-it-works-section {
  background: #FFFFFF;
  padding: 96px 0;
}

.steps-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  max-width: 1040px;
  margin: 0 auto;
}

.step-card {
  flex: 1;
  background: #F8FAFC;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  padding: 32px 24px;
  text-align: center;
  box-shadow: var(--shadow-xs);
  transition: all var(--t-normal);
}

.step-card:hover {
  background: #FFFFFF;
  border-color: var(--royal-blue-border);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.step-number {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--royal-blue);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: var(--shadow-blue);
}

.step-card h3 {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 10px;
}

.step-card p {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.step-arrow {
  color: var(--royal-blue);
  opacity: 0.4;
  flex-shrink: 0;
}

.mt-4 {
  margin-top: 40px;
}

.btn-large {
  padding: 16px 36px;
  font-size: 1rem;
}

/* ────────────────────────────────────────────────────────────
   13. FAQ SECTION
   ──────────────────────────────────────────────────────────── */
.faq-section {
  background: #F8FAFC;
  padding: 96px 0;
}

.faq-accordion {
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: #FFFFFF;
  border: 1px solid var(--border-light);
  border-radius: var(--r-lg);
  overflow: hidden;
  transition: all var(--t-fast);
  box-shadow: var(--shadow-xs);
}

.faq-item:hover, .faq-item.active {
  border-color: var(--royal-blue-border);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  font-size: 1rem;
  font-weight: 800;
  color: var(--text-heading);
  text-align: left;
  cursor: pointer;
  transition: color var(--t-fast);
}

.faq-question:hover {
  color: var(--royal-blue);
}

.faq-toggle {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--royal-blue);
  line-height: 1;
}

.faq-answer {
  padding: 0 24px 20px;
  font-size: 0.92rem;
  color: var(--text-body);
  line-height: 1.8;
  border-top: 1px solid #F1F5F9;
  padding-top: 16px;
}

/* ────────────────────────────────────────────────────────────
   14. OWNER CALLOUT (Executive Light Pure White Prestige Card)
   ──────────────────────────────────────────────────────────── */
.owner-callout-section {
  background: #FFFFFF;
  padding: 80px 0;
  border-top: 1px solid var(--border-light);
}

.owner-callout-section .container {
  max-width: 860px;
  background: radial-gradient(120% 100% at 50% 0%, #EFF6FF 0%, #F8FAFC 60%, #FFFFFF 100%);
  border: 1px solid var(--gold-border);
  border-radius: var(--r-2xl);
  padding: 54px 36px;
  box-shadow: var(--shadow-md);
  text-align: center;
}

.owner-callout-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-dark);
  background: var(--gold-light);
  border: 1px solid var(--gold-border);
  padding: 6px 16px;
  border-radius: var(--r-full);
  margin-bottom: 16px;
}

.owner-callout-title {
  font-size: clamp(1.8rem, 3.2vw, 2.4rem);
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 14px;
  line-height: 1.25;
}

.owner-callout-text {
  font-size: 1.05rem;
  color: var(--text-body);
  line-height: 1.8;
  max-width: 660px;
  margin: 0 auto 34px;
}

.owner-contact-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.owner-number-display {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.number-tag {
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--royal-blue);
}

.the-phone-number {
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--text-heading);
  letter-spacing: 0.02em;
}

.owner-cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-call-large {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--royal-blue);
  color: #FFFFFF !important;
  font-size: 0.98rem;
  font-weight: 800;
  padding: 15px 32px;
  border-radius: var(--r-full);
  box-shadow: var(--shadow-blue);
  transition: all var(--t-normal);
}

.btn-call-large:hover {
  background: var(--royal-blue-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(30, 64, 175, 0.32);
}

.btn-wa-large {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--wa-green);
  color: #FFFFFF !important;
  font-size: 0.98rem;
  font-weight: 800;
  padding: 15px 32px;
  border-radius: var(--r-full);
  box-shadow: var(--shadow-wa);
  transition: all var(--t-normal);
}

.btn-wa-large:hover {
  background: var(--wa-green-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(22, 163, 74, 0.32);
}

/* ────────────────────────────────────────────────────────────
   15. FOOTER (Pristine Light Executive Corporate)
   ──────────────────────────────────────────────────────────── */
.main-footer {
  background: #F8FAFC;
  border-top: 1px solid var(--border-light);
  padding-top: 76px;
}

.footer-container {
  display: grid;
  grid-template-columns: 2.2fr 1.2fr 1.2fr 1.4fr;
  gap: 40px;
  margin-bottom: 56px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.footer-brand img {
  border-radius: 50%;
  border: 1px solid var(--border-medium);
}

.footer-brand h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-heading);
}

.footer-brand p {
  font-size: 0.78rem;
  color: var(--gold-dark);
  font-weight: 700;
}

.footer-about {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 20px;
}

.footer-motto {
  display: inline-flex;
  align-items: center;
  background: var(--gold-light);
  border: 1px solid var(--gold-border);
  padding: 7px 16px;
  border-radius: var(--r-full);
  font-size: 0.78rem;
  color: var(--gold-dark);
  font-weight: 800;
}

.footer-title {
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-heading);
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 28px;
  height: 2px;
  background: var(--royal-blue);
  border-radius: 1px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links li a, .footer-link-btn {
  font-size: 0.88rem;
  color: var(--text-muted);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 0;
  transition: all var(--t-fast);
}

.footer-links li a:hover, .footer-link-btn:hover {
  color: var(--royal-blue);
  padding-left: 5px;
}

.footer-contact-item {
  margin-bottom: 16px;
  font-size: 0.88rem;
  color: var(--text-body);
  line-height: 1.7;
}

.footer-contact-item strong {
  color: var(--text-heading);
}

.footer-phone-highlight {
  color: var(--royal-blue);
  font-size: 1.1rem;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.footer-phone-highlight:hover {
  color: var(--royal-blue-hover);
}

.footer-wa-link {
  color: var(--wa-green);
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.footer-wa-link:hover {
  color: var(--wa-green-hover);
}

.footer-cta-box {
  margin-top: 16px;
}

.footer-bottom {
  border-top: 1px solid var(--border-light);
  padding: 24px 0;
  background: #FFFFFF;
}

.bottom-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.bottom-flex p {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.bottom-tagline {
  color: var(--gold-dark) !important;
  font-weight: 700;
}

/* ────────────────────────────────────────────────────────────
   16. BOOKING MODAL (Pure White Crisp Corporate Form)
   ──────────────────────────────────────────────────────────── */
.popup-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.popup-modal-container {
  background: #FFFFFF;
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  width: 100%;
  max-width: 640px;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  animation: modalSlideUp 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.popup-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 26px;
  background: #F8FAFC;
  border-bottom: 1px solid var(--border-light);
  flex-shrink: 0;
}

.popup-header-title {
  display: flex;
  align-items: center;
  gap: 14px;
}

.popup-header-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--r-md);
  background: var(--royal-blue-light);
  border: 1px solid var(--royal-blue-border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--royal-blue);
}

.popup-header-title h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 2px;
}

.popup-header-title p {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.popup-modal-close {
  width: 36px;
  height: 36px;
  border-radius: var(--r-sm);
  background: #FFFFFF;
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  cursor: pointer;
  transition: var(--t-fast);
}

.popup-modal-close:hover {
  background: #FEF2F2;
  color: #DC2626;
  border-color: #FECACA;
}

.popup-modal-body {
  overflow-y: auto;
  flex: 1;
  padding: 26px;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.trip-type-selector {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  background: #F8FAFC;
  border: 1px solid var(--border-light);
  border-radius: var(--r-lg);
  padding: 5px;
}

.radio-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 8px;
  border-radius: var(--r-md);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-muted);
  cursor: pointer;
  transition: all var(--t-fast);
  border: 1px solid transparent;
}

.radio-tab input[type="radio"] {
  display: none;
}

.radio-tab:hover {
  color: var(--royal-blue);
  background: var(--royal-blue-light);
}

.radio-tab.active {
  background: var(--royal-blue);
  color: #FFFFFF;
  border-color: transparent;
  box-shadow: var(--shadow-blue);
}

.form-row-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--text-heading);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.label-icon {
  flex-shrink: 0;
  color: var(--gold);
}

.input-wrapper select, .input-wrapper input, .form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 11px 14px;
  background: #F8FAFC;
  border: 1px solid var(--border-light);
  border-radius: var(--r-md);
  color: var(--text-heading);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all var(--t-fast);
}

.input-wrapper select:focus, .input-wrapper input:focus, .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  border-color: var(--royal-blue);
  background: #FFFFFF;
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
  outline: none;
}

.custom-input {
  width: 100%;
  margin-top: 8px;
  padding: 10px 14px;
  background: var(--gold-light);
  border: 1px solid var(--gold-border);
  border-radius: var(--r-md);
  color: var(--text-heading);
  font-size: 0.88rem;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
}

.btn-whatsapp-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background: var(--wa-green);
  color: #FFFFFF;
  border: none;
  border-radius: var(--r-md);
  font-size: 0.98rem;
  font-weight: 800;
  cursor: pointer;
  transition: all var(--t-normal);
  box-shadow: var(--shadow-wa);
}

.btn-whatsapp-submit:hover {
  background: var(--wa-green-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(22, 163, 74, 0.32);
}

.btn-call-owner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  background: #F8FAFC;
  color: var(--text-heading);
  border: 1px solid var(--border-medium);
  border-radius: var(--r-md);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--t-normal);
}

.btn-call-owner:hover {
  background: var(--royal-blue-light);
  color: var(--royal-blue);
  border-color: var(--royal-blue-border);
}

/* ────────────────────────────────────────────────────────────
   17. BACK TO TOP & CORNER CHATBOT WIDGET
   ──────────────────────────────────────────────────────────── */
.back-to-top-btn {
  position: fixed;
  bottom: 96px;
  right: 24px;
  z-index: 499;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 1px solid var(--border-medium);
  color: var(--royal-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--t-normal);
  box-shadow: var(--shadow-md);
}

.back-to-top-btn:hover {
  background: var(--royal-blue);
  color: #FFFFFF;
  border-color: var(--royal-blue);
  transform: translateY(-3px);
  box-shadow: var(--shadow-blue);
}

/* Corner Chatbot Widget */
.corner-chatbot-widget {
  position: fixed;
  bottom: 26px;
  right: 24px;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.chatbot-menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(12px) scale(0.95);
  transition: all var(--t-normal);
}

.chatbot-menu.open {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0) scale(1);
}

.chatbot-action-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
}

.action-tooltip {
  background: #0F172A;
  color: #FFFFFF;
  font-size: 0.76rem;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: var(--r-full);
  box-shadow: var(--shadow-md);
  white-space: nowrap;
}

.action-icon-circle {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  box-shadow: var(--shadow-md);
  transition: transform var(--t-fast);
}

.call-action .action-icon-circle {
  background: var(--royal-blue);
}

.wa-action .action-icon-circle {
  background: var(--wa-green);
}

.book-action .action-icon-circle {
  background: var(--gold);
}

.chatbot-action-btn:hover .action-icon-circle {
  transform: scale(1.1);
}

.chatbot-trigger-btn {
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: var(--royal-blue);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-blue);
  cursor: pointer;
  transition: all var(--t-normal);
  border: 3px solid #FFFFFF;
}

.chatbot-trigger-btn:hover {
  background: var(--royal-blue-hover);
  transform: scale(1.05);
}

.chatbot-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background: #DC2626;
  color: #FFFFFF;
  font-size: 0.68rem;
  font-weight: 800;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #FFFFFF;
}

/* ────────────────────────────────────────────────────────────
   18. RESPONSIVE DESIGN (Flawless on Mobile, Tablet & Desktop)
   ──────────────────────────────────────────────────────────── */
@media (max-width: 1080px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .fleet-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .packages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
  .coverage-box {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .section-padding {
    padding: 68px 0;
  }
  .top-contacts {
    display: none;
  }
  .desktop-nav {
    display: none;
  }
  .mobile-menu-toggle {
    display: flex;
  }
  .mobile-drawer {
    display: flex;
  }
  .hero-section {
    padding: 56px 0 50px;
  }
  .hero-highlights, .hero-centered-highlights {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
  .hero-cta-group {
    flex-direction: column;
  }
  .btn-hero-book, .btn-hero-call {
    width: 100%;
    justify-content: center;
  }
  .services-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
  .fleet-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
  .packages-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
  .why-grid {
    grid-template-columns: 1fr;
  }
  .steps-row {
    flex-direction: column;
    gap: 20px;
  }
  .step-arrow {
    transform: rotate(90deg);
  }
  .footer-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .form-row-grid {
    grid-template-columns: 1fr;
  }
  .trip-type-selector {
    grid-template-columns: repeat(2, 1fr);
  }
  .coverage-stats {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }
  .hero-title {
    font-size: 2rem;
  }
  .the-phone-number {
    font-size: 1.8rem;
  }
  .btn-call-large, .btn-wa-large {
    width: 100%;
    justify-content: center;
  }
}
"""

with open("src/app/globals.css", "w", encoding="utf-8") as f:
    f.write(css_code)

print("SUCCESS: globals.css updated to pristine white professional theme.")
