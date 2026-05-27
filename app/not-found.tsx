import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Nav />
      <div style={{ maxWidth: "600px", margin: "6rem auto", padding: "0 2rem", textAlign: "center" }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.7rem",
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--ink-faint)", marginBottom: "1rem",
        }}>404</div>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "2rem", fontWeight: 700, marginBottom: "1rem",
        }}>Page not found</h1>
        <p style={{ color: "var(--ink-muted)", lineHeight: 1.7, fontWeight: 300, marginBottom: "2rem" }}>
          The page you are looking for does not exist, or has been moved.
        </p>
        <Link href="/" style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.75rem",
          letterSpacing: "0.08em", textTransform: "uppercase",
          background: "var(--ink)", color: "var(--paper)",
          padding: "10px 24px", borderRadius: "2px",
        }}>
          Return home
        </Link>
      </div>
      <Footer />
    </>
  );
}
