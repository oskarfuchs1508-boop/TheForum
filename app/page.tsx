import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/ui/Newsletter";
import ArticleCard from "@/components/ui/ArticleCard";
import Link from "next/link";
import { sanityClient, urlFor } from "@/lib/sanity";
import { allArticlesQuery } from "@/lib/queries";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function estimateReadingTime(excerpt: string) {
  const words = excerpt ? excerpt.split(" ").length : 100;
  return `${Math.max(5, Math.round(words * 10 / 200))} min`;
}

export const revalidate = 60;

export default async function HomePage() {
  let articles: any[] = [];
  try {
    articles = await sanityClient.fetch(allArticlesQuery);
  } catch { articles = []; }

  const featured = articles.find((a: any) => a.featured) || articles[0];
  const latest = articles.filter((a: any) => a._id !== featured?._id).slice(0, 6);
  const interview = articles.find((a: any) => a.category === "interviews" && a._id !== featured?._id);
  const sideStack = articles.filter((a: any) => a._id !== featured?._id && a._id !== interview?._id).slice(6, 9);

  const heroImageUrl = featured?.coverImage
    ? urlFor(featured.coverImage).width(720).height(900).fit("crop").url()
    : null;

  return (
    <>
      <Nav />

      <div style={{
        borderBottom: "1px solid var(--rule)",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: "1rem", padding: "8px 2rem",
        fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
        letterSpacing: "0.08em", color: "var(--ink-muted)", flexWrap: "wrap",
      }}>
        <span style={{ color: "var(--ink-faint)" }}>Est. 2026</span>
        <span>Ideas for the serious reader</span>
        <span style={{ color: "var(--ink-faint)" }}>·</span>
        <span>Politics · Philosophy · Economics · Religion · History</span>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem 0" }}>

        {/* Hero */}
        {featured && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "3rem", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--accent)", marginBottom: "1rem",
                display: "flex", alignItems: "center", gap: "0.5rem",
              }}>
                <span style={{ display: "block", width: "24px", height: "1px", background: "var(--accent)" }} />
                Feature Essay
              </div>
              <Link href={`/articles/${featured.slug}`}>
                <h1 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.02em",
                  color: "var(--ink)", marginBottom: "1.25rem",
                }}>
                  {featured.title}
                </h1>
              </Link>
              <p style={{
                fontFamily: "Georgia, serif", fontSize: "1.1rem",
                lineHeight: 1.65, color: "var(--ink-muted)",
                maxWidth: "560px", marginBottom: "1.5rem", fontWeight: 300,
              }}>
                {featured.excerpt}
              </p>
              <div style={{
                display: "flex", alignItems: "center", gap: "1rem",
                fontFamily: "'DM Mono', monospace", fontSize: "0.7rem",
                letterSpacing: "0.06em", color: "var(--ink-faint)",
              }}>
                <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{featured.author?.name}</strong>
                <span>·</span>
                <span>{formatDate(featured.publishedAt)}</span>
              </div>
            </div>

            {/* Hero image */}
            <div style={{
              width: "100%", aspectRatio: "4/5",
              background: "linear-gradient(160deg, #e8e0d0 0%, #d5c9b5 100%)",
              border: "1px solid var(--rule)", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {heroImageUrl ? (
                <img
                  src={heroImageUrl}
                  alt={featured.coverImage?.alt || featured.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              ) : (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity={0.2}>
                  <rect x="5" y="5" width="50" height="50" rx="2" stroke="#8c7d6a" strokeWidth="2" />
                  <line x1="5" y1="20" x2="55" y2="20" stroke="#8c7d6a" strokeWidth="1" />
                  <rect x="12" y="28" width="36" height="3" rx="1" fill="#8c7d6a" />
                  <rect x="16" y="35" width="28" height="2" rx="1" fill="#8c7d6a" />
                </svg>
              )}
            </div>
          </div>
        )}

        {articles.length === 0 && (
          <div style={{ padding: "4rem 0", textAlign: "center", color: "var(--ink-muted)" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "1rem" }}>
              No articles published yet.
            </p>
          </div>
        )}

        {latest.length > 0 && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2rem 0 1.25rem" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-muted)" }}>Latest</span>
              <div style={{ flex: 1, height: "1px", background: "var(--rule)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem 2rem", marginBottom: "3rem" }}>
              {latest.map((article: any) => (
                <ArticleCard
                  key={article._id}
                  title={article.title}
                  excerpt={article.excerpt}
                  author={article.author?.name || ""}
                  category={article.category}
                  slug={article.slug}
                  date={formatDate(article.publishedAt)}
                  readingTime={estimateReadingTime(article.excerpt)}
                />
              ))}
            </div>
          </>
        )}

        {interview && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", margin: "2rem 0" }}>
              <div style={{ flex: 1, height: "1px", background: "var(--rule)" }} />
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.25rem", color: "var(--rule)" }}>✦</span>
              <div style={{ flex: 1, height: "1px", background: "var(--rule)" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-muted)" }}>In Depth</span>
              <div style={{ flex: 1, height: "1px", background: "var(--rule)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem", marginBottom: "4rem", borderTop: "1px solid var(--rule)", paddingTop: "1.5rem" }}>
              <ArticleCard title={interview.title} excerpt={interview.excerpt} author={interview.author?.name || ""} category={interview.category} slug={interview.slug} date={formatDate(interview.publishedAt)} size="lg" />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {sideStack.map((a: any) => (
                  <ArticleCard key={a._id} title={a.title} excerpt={a.excerpt} author={a.author?.name || ""} category={a.category} slug={a.slug} size="sm" />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}
