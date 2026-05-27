import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/ui/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const values = [
    { title: "Intellectual rigour", body: "We ask writers to engage seriously with the strongest version of arguments they oppose, not merely the weakest. Every claim should be able to bear examination." },
    { title: "Independence", body: "We accept no institutional funding, no sponsored content. We are supported by readers who believe the publication is worth sustaining." },
    { title: "Genuine plurality", body: "Left, right, and the traditions that don't fit that spectrum. We are interested in ideas that have been thought through, not identities that have been adopted." },
    { title: "Long form", body: "The essay is our native form. We believe some arguments require space to develop — and that readers capable of sustained attention still exist and deserve to be served." },
  ];

  return (
    <>
      <Nav />
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>
        <div style={{ textAlign: "center", paddingBottom: "2.5rem", borderBottom: "1px solid var(--rule)", marginBottom: "2.5rem" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1rem",
          }}>
            About The Forum
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--ink-muted)", fontWeight: 300, maxWidth: "580px", margin: "0 auto" }}>
            A journal for young people who take ideas seriously — and believe that the quality of public reasoning matters.
          </p>
        </div>

        <div style={{ fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
          {[
            "The Forum was founded on a conviction that is increasingly unfashionable: that serious engagement with difficult ideas is not a luxury but a civic necessity. We live in an era of abundant information and impoverished argument — of takes that travel fast and thinking that barely travels at all.",
            "We publish essays, interviews, and commentary on politics, philosophy, economics, religion, history, and literature. Our readers are university students, young professionals, and anyone who believes that the questions of how to live and how to govern ourselves deserve more than algorithm-optimised punditry.",
            "We are not affiliated with any party, movement, or institution. We have contributors who disagree with each other, sometimes sharply. We believe that is a feature, not a defect.",
          ].map((p, i) => (
            <p key={i} style={{ marginBottom: "1.25rem" }}>{p}</p>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
          {values.map(v => (
            <div key={v.title} style={{ borderTop: "2px solid var(--ink)", paddingTop: "1rem" }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem",
              }}>{v.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: 1.6, fontWeight: 300 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
