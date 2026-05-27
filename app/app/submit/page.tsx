"use client";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

const inputStyle = {
  width: "100%", padding: "10px 14px",
  border: "1px solid var(--rule)", background: "white",
  fontFamily: "Georgia, serif", fontSize: "1rem", color: "var(--ink)",
  borderRadius: "2px", outline: "none",
};

const labelStyle = {
  display: "block" as const,
  fontFamily: "'DM Mono', monospace", fontSize: "0.7rem",
  letterSpacing: "0.08em", textTransform: "uppercase" as const,
  color: "var(--ink-muted)", marginBottom: "0.5rem",
};

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <Nav />
        <div style={{ maxWidth: "600px", margin: "6rem auto", padding: "0 2rem", textAlign: "center" }}>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
            Thank you.
          </div>
          <p style={{ color: "var(--ink-muted)", lineHeight: 1.7, fontWeight: 300 }}>
            We have received your submission and will be in touch within two weeks. We read everything we receive.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1rem",
        }}>Submit a Piece</h1>
        <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--ink-muted)", fontWeight: 300, marginBottom: "2rem" }}>
          The Forum welcomes submissions from writers at all stages of their career — provided the work is original, rigorously argued, and written for an intelligent non-specialist reader.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={labelStyle}>First name</label>
              <input style={inputStyle} type="text" placeholder="Maria" />
            </div>
            <div>
              <label style={labelStyle}>Last name</label>
              <input style={inputStyle} type="text" placeholder="Andersson" />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Email</label>
            <input style={inputStyle} type="email" placeholder="you@example.com" />
          </div>

          <div>
            <label style={labelStyle}>Affiliation (optional)</label>
            <input style={inputStyle} type="text" placeholder="University, employer, or 'Independent'" />
          </div>

          <div>
            <label style={labelStyle}>Category</label>
            <select style={inputStyle}>
              <option value="">Select a topic</option>
              {["Politics", "Philosophy", "Economics", "Religion", "History", "Literature", "Societal Trends", "Interview pitch"].map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Piece title</label>
            <input style={inputStyle} type="text" placeholder="Working title is fine" />
          </div>

          <div>
            <label style={labelStyle}>Abstract / pitch</label>
            <textarea style={{ ...inputStyle, minHeight: "160px", resize: "vertical", lineHeight: 1.6 }}
              placeholder="In 150–300 words, describe the argument of your piece. What is the central claim? What is the evidence or reasoning? Why does it matter now?" />
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "var(--ink-faint)", marginTop: "0.35rem" }}>
              150–300 words recommended
            </div>
          </div>

          <div>
            <label style={labelStyle}>Estimated word count</label>
            <input style={inputStyle} type="text" placeholder="e.g. 3,500 words" />
          </div>

          <div>
            <label style={labelStyle}>Link to full draft (optional)</label>
            <input style={inputStyle} type="url" placeholder="Google Doc or similar — share as a viewable link" />
          </div>

          <button
            onClick={() => setSubmitted(true)}
            style={{
              background: "var(--ink)", color: "var(--paper)", border: "none",
              padding: "13px 28px", fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase",
              cursor: "pointer", borderRadius: "2px", width: "100%", marginTop: "0.5rem",
            }}>
            Submit for Review
          </button>
        </div>

        {/* Guidelines */}
        <div style={{
          border: "1px solid var(--rule)", background: "var(--paper-warm)",
          padding: "1.5rem", borderRadius: "2px", marginTop: "2.5rem",
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem",
          }}>Submission guidelines</h3>
          <ul style={{ paddingLeft: "1.25rem", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--ink-muted)", fontWeight: 300 }}>
            <li>Essays should be between 1,500 and 8,000 words. Interviews up to 12,000.</li>
            <li>Work must be original and not under consideration elsewhere.</li>
            <li>We do not publish anonymous submissions. Pseudonyms may be discussed in advance.</li>
            <li>Response time is typically two weeks. We read every submission.</li>
            <li>We may edit accepted work for clarity and house style, in consultation with the author.</li>
            <li>We are particularly interested in first-person arguments backed by evidence — not opinion pieces without intellectual content.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
