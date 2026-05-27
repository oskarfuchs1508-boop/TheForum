import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { MOCK_ARTICLES } from "@/lib/mockData";
import Link from "next/link";

const CATEGORIES = ["All", "Politics", "Philosophy", "Economics", "Religion", "History", "Literature", "Interviews", "Societal Trends"];

export default function EssaysPage({ searchParams }: { searchParams: { cat?: string } }) {
  const active = searchParams.cat || "All";
  const articles = active === "All"
    ? MOCK_ARTICLES
    : MOCK_ARTICLES.filter(a => a.category.toLowerCase() === active.toLowerCase().replace(" ", "-"));

  return (
    <>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 2rem" }}>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
          fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.5rem",
        }}>Essays &amp; Commentary</h1>
        <p style={{ color: "var(--ink-muted)", fontWeight: 300, marginBottom: "2rem" }}>
          Browse by topic or scroll all recent work
        </p>

        {/* Category tabs */}
        <div style={{
          display: "flex", gap: 0,
          borderBottom: "1px solid var(--rule)", marginBottom: "2rem",
          overflowX: "auto",
        }}>
          {CATEGORIES.map(cat => (
            <Link key={cat} href={cat === "All" ? "/essays" : `/essays?cat=${cat}`} style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.7rem",
              letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "10px 16px",
              borderBottom: active === cat ? "2px solid var(--ink)" : "2px solid transparent",
              color: active === cat ? "var(--ink)" : "var(--ink-muted)",
              marginBottom: "-1px", whiteSpace: "nowrap",
            }}>
              {cat}
            </Link>
          ))}
        </div>

        {/* Article list */}
        <div>
          {articles.map(article => (
            <Link key={article._id} href={`/articles/${article.slug}`} style={{ display: "block" }}>
              <div style={{
                padding: "1.5rem 0", borderBottom: "1px solid var(--rule)",
                display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start",
              }}>
                <div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "var(--accent)", marginBottom: "0.35rem",
                  }}>
                    {article.category}
                  </div>
                  <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.3rem", fontWeight: 600,
                    lineHeight: 1.2, marginBottom: "0.5rem", color: "var(--ink)",
                  }}>
                    {article.title}
                  </h2>
                  <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: 1.6, fontWeight: 300, marginBottom: "0.5rem" }}>
                    {article.excerpt}
                  </p>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.05em", color: "var(--ink-faint)" }}>
                    {article.author} · {article.date}
                  </div>
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
                  letterSpacing: "0.06em", color: "var(--ink-faint)",
                  background: "var(--paper-warm)", border: "1px solid var(--rule)",
                  padding: "4px 10px", borderRadius: "2px", whiteSpace: "nowrap",
                }}>
                  {article.readingTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
