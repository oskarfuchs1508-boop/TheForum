import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { sanityClient } from "@/lib/sanity";
import { allArticlesQuery } from "@/lib/queries";
import Link from "next/link";

export const revalidate = 60;

const CATEGORIES = ["All", "Politics", "Philosophy", "Economics", "Religion", "History", "Literature", "Interviews", "Societal Trends"];

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function EssaysPage({ searchParams }: { searchParams: { cat?: string } }) {
  let articles: any[] = [];
  try {
    articles = await sanityClient.fetch(allArticlesQuery);
  } catch {
    articles = [];
  }

  const active = searchParams.cat || "All";
  const filtered = active === "All"
    ? articles
    : articles.filter((a: any) => a.category?.toLowerCase() === active.toLowerCase().replace(" ", "-"));

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

        <div style={{ display: "flex", borderBottom: "1px solid var(--rule)", marginBottom: "2rem", overflowX: "auto" }}>
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

        {filtered.length === 0 && (
          <p style={{ color: "var(--ink-muted)", fontFamily: "'DM Mono', monospace", fontSize: "0.8rem" }}>
            No articles in this category yet.
          </p>
        )}

        <div>
          {filtered.map((article: any) => (
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
                    {article.author?.name} · {formatDate(article.publishedAt)}
                  </div>
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
