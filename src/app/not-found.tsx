import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
      color: "#0F172A",
      textAlign: "center",
      padding: "24px"
    }}>
      <h1 style={{ fontSize: "4rem", fontWeight: "900", marginBottom: "16px", color: "#1E40AF" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "12px" }}>Page Not Found</h2>
      <p style={{ color: "#64748B", marginBottom: "24px", maxWidth: "450px" }}>
        The page you are looking for does not exist or has been moved. Return back to our home page to plan your travel.
      </p>
      <Link href="/" style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "#1E40AF",
        color: "#FFFFFF",
        padding: "12px 24px",
        borderRadius: "9999px",
        fontWeight: "700",
        textDecoration: "none"
      }}>
        Back to Home
      </Link>
    </div>
  );
}
