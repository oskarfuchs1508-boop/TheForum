"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Essays & Commentary", href: "/essays" },
  { label: "About", href: "/about" },
  { label: "Contribute", href: "/submit" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "var(--paper)",
      borderBottom: "1px solid var(--rule)",
      height: "56px",
      display: "flex", alignItems: "center",
      padding: "0 2rem", gap: "2rem",
    }}>
      <Link href="/" style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "1.35rem", fontWeight: 700,
        letterSpacing: "-0.01em", flexShrink: 0,
      }}>
        The<span style={{ color: "var(--accent)" }}>Forum</span>
      </Link>

      <div style={{ display: "flex", gap: "1.5rem", flex: 1, justifyContent: "center" }}>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem", letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: pathname === link.href ? "var(--ink)" : "var(--ink-muted)",
            transition: "color .2s",
          }}>
            {link.label}
          </Link>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
        <Link href="/#newsletter" style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.72rem", letterSpacing: "0.06em",
          textTransform: "uppercase", color: "var(--ink-muted)",
        }}>
          Newsletter
        </Link>
        <Link href="/#newsletter" style={{
          background: "var(--ink)", color: "var(--paper)",
          padding: "7px 16px", borderRadius: "2px",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.72rem", letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}>
          Subscribe
        </Link>
      </div>
    </nav>
  );
}
