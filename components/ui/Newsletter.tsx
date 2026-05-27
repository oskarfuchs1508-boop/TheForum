"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="newsletter" style={{
      background: "var(--ink)", color: "var(--paper)",
      padding: "4rem 2rem", textAlign: "center",
    }}>
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.7rem", letterSpacing: "0.12em",
        textTransform: "uppercase", color: "#6b6560",
        marginBottom: "0.75rem",
      }}>
        The Forum Weekly
      </div>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
        fontWeight: 700, marginBottom: "0.75rem",
        letterSpacing: "-0.01em",
      }}>
        Ideas worth reading,<br />delivered on Thursday.
      </h2>
      <p style={{
        fontSize: "1rem", color: "#c4bfb6",
        maxWidth: "480px", margin: "0 auto 1.5rem",
        lineHeight: 1.65, fontWeight: 300,
      }}>
        One long essay, two shorter reads, and one question worth arguing about. No noise. Free, always.
      </p>

      {submitted ? (
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.85rem", color: "#c4bfb6", letterSpacing: "0.04em",
        }}>
          You're subscribed. See you Thursday.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{
          display: "flex", gap: "0.5rem",
          maxWidth: "420px", margin: "0 auto",
        }}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            style={{
              flex: 1, padding: "10px 14px",
              background: "#2a2824", border: "1px solid #3d3a35",
              color: "var(--paper)", fontFamily: "Georgia, serif",
              fontSize: "0.95rem", borderRadius: "2px", outline: "none",
            }}
          />
          <button type="submit" style={{
            background: "var(--accent)", color: "#fff",
            border: "none", padding: "10px 20px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem", letterSpacing: "0.08em",
            textTransform: "uppercase", cursor: "pointer",
            borderRadius: "2px",
          }}>
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
