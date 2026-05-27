import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { MOCK_ARTICLES, MOCK_ARTICLE_BODY } from "@/lib/mockData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return MOCK_ARTICLES.map(a => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = MOCK_ARTICLES.find(a => a.slug === params.slug);
  if (!article) notFound();

  const paragraphs = MOCK_ARTICLE_BODY.trim().split("\n\n");

  return (
    <>
      <Nav />
      <article style={{ maxWidth: "700px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--rule)" }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.7rem",
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--accent)", marginBottom: "1rem",
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
          }}>
            <span style={{ display: "block", width: "20px", height: "1px", background: "var(--accent)" }} />
            {article.category}
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.02em",
            marginBottom: "1rem", color: "var(--ink)",
          }}>
            {article.title}
          </h1>

          <p style={{
            fontSize: "1.15rem", lineHeight: 1.6,
            color: "var(--ink-muted)", fontWeight: 300,
            marginBottom: "1.5rem",
          }}>
            {article.excerpt}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "var(--paper-warm)", border: "1px solid var(--rule)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Playfair Display', serif", fontSize: "0.85rem",
              color: "var(--ink-muted)", flexShrink: 0,
            }}>
              {article.author.charAt(0)}
            </div>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", fontWeight: 500, color: "var(--ink)", letterSpacing: "0.04em" }}>
                {article.author}
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "var(--ink-faint)", marginTop: "2px" }}>
                {article.date}
              </div>
            </div>
            <div style={{
              marginLeft: "auto",
              fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
              letterSpacing: "0.08em", color: "var(--ink-muted)",
              background: "var(--paper-warm)", border: "1px solid var(--rule)",
              padding: "4px 12px", borderRadius: "2px",
            }}>
              {article.readingTime} read
            </div>
          </div>
        </header>

        {/* Body */}
        <div style={{ fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 300, color: "var(--ink)" }}>
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              return (
                <h2 key={i} style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.5rem", fontWeight: 600,
                  margin: "2.5rem 0 1rem", letterSpacing: "-0.01em",
                }}>
                  {para.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} style={{ marginBottom: "1.5rem" }}>{para}</p>
            );
          })}
        </div>
      </article>
      <Footer />
    </>
  );
}
