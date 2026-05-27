import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--rule)",
      padding: "2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "var(--paper)",
      flexWrap: "wrap", gap: "1rem",
    }}>
      <Link href="/" style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "1rem", fontWeight: 700,
      }}>
        The<span style={{ color: "var(--accent)" }}>Forum</span>
      </Link>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "About", href: "/about" },
          { label: "Contribute", href: "/submit" },
          { label: "Essays", href: "/essays" },
        ].map(l => (
          <Link key={l.href} href={l.href} style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem", letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--ink-muted)",
          }}>{l.label}</Link>
        ))}
      </div>
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.65rem", color: "var(--ink-faint)", letterSpacing: "0.04em",
      }}>
        © {new Date().getFullYear()} The Forum
      </div>
    </footer>
  );
}
