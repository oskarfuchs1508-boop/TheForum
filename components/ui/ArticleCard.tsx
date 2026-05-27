import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  category: string;
  slug: string;
  readingTime?: string;
  date?: string;
  size?: "sm" | "md" | "lg";
}

const categoryColors: Record<string, string> = {
  politics: "#b8340a",
  philosophy: "#5a6e3a",
  economics: "#2a5a8c",
  religion: "#7a4a8c",
  history: "#8c6a2a",
  literature: "#2a7a6c",
  "societal-trends": "#8c2a6a",
  interviews: "#b8340a",
};

export default function ArticleCard({
  title, excerpt, author, category, slug,
  readingTime, date, size = "md"
}: ArticleCardProps) {
  const color = categoryColors[category] || "var(--accent)";
  const titleSize = size === "lg" ? "1.5rem" : size === "sm" ? "1rem" : "1.15rem";

  return (
    <Link href={`/articles/${slug}`} style={{ display: "block" }}>
      <article style={{
        borderTop: "1px solid var(--rule)",
        paddingTop: "1rem",
        cursor: "pointer",
      }}
        className="article-card"
      >
        <style>{`.article-card:hover .card-title { color: var(--accent); }`}</style>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.62rem", letterSpacing: "0.1em",
          textTransform: "uppercase", color, marginBottom: "0.5rem",
        }}>
          {category}
        </div>
        <h2 className="card-title" style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: titleSize, fontWeight: 600,
          lineHeight: 1.25, marginBottom: "0.5rem",
          transition: "color .2s", color: "var(--ink)",
        }}>
          {title}
        </h2>
        {size !== "sm" && (
          <p style={{
            fontSize: "0.875rem", lineHeight: 1.6,
            color: "var(--ink-muted)", fontWeight: 300,
            marginBottom: "0.75rem",
          }}>
            {excerpt}
          </p>
        )}
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem", letterSpacing: "0.05em",
          color: "var(--ink-faint)",
          display: "flex", gap: "0.5rem", alignItems: "center",
        }}>
          <span>{author}</span>
          {readingTime && <><span>·</span><span>{readingTime}</span></>}
          {date && <><span>·</span><span>{date}</span></>}
        </div>
      </article>
    </Link>
  );
}
