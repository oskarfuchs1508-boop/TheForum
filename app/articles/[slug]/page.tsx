import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { sanityClient } from "@/lib/sanity";
import { articleBySlugQuery, allSlugsQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await sanityClient.fetch(allSlugsQuery);
    return slugs.map((s: any) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const ptComponents = {
  block: {
    normal: ({ children }: any) => (
      <p style={{ marginBottom: "1.5rem", lineHeight: 1.85 }}>{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "1.5rem", fontWeight: 600,
        margin: "2.5rem 0 1rem", letterSpacing: "-0.01em",
      }}>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "1.2rem", fontWeight: 600,
        margin: "2rem 0 0.75rem",
      }}>{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote style={{
        borderLeft: "3px solid var(--accent)",
        margin: "2rem 0", padding: "0.5rem 0 0.5rem 1.5rem",
      }}>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.15rem", fontStyle: "italic",
          color: "var(--ink)", marginBottom: 0, lineHeight: 1.55,
        }}>{children}</p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong style={{ fontWeight: 600 }}>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ value, children }: any) => (
      <a href={value?.href} target="_blank" rel="noopener" style={{ color: "var(--accent)", textDecoration: "underline" }}>
        {children}
      </a>
    ),
  },
};

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  let article: any = null;
  try {
    article = await sanityClient.fetch(articleBySlugQuery, { slug: params.slug });
  } catch (e) {
    notFound();
  }
  if (!article) notFound();

  return (
    <>
      <Nav />
      <article style={{ maxWidth: "700px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>
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
            color: "var(--ink-muted)", fontWeight: 300, marginBottom: "1.5rem",
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
              {article.author?.name?.charAt(0) || "A"}
            </div>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", fontWeight: 500, color: "var(--ink)", letterSpacing: "0.04em" }}>
                {article.author?.name}
                {article.author?.affiliation && ` · ${article.author.affiliation}`}
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "var(--ink-faint)", marginTop: "2px" }}>
                {formatDate(article.publishedAt)}
              </div>
            </div>
          </div>
        </header>

        <div style={{ fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 300, color: "var(--ink)" }}>
          {article.body ? (
            <PortableText value={article.body} components={ptComponents} />
          ) : (
            <p style={{ color: "var(--ink-muted)" }}>No content yet.</p>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}
