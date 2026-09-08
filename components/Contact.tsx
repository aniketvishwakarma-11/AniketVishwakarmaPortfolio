"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const socialLinks = [
  {
    name: "Email",
    handle: "aniketvis675@gmail.com",
    url: "mailto:aniketvis675@gmail.com",
    icon: <Mail size={20} />,
    color: "#06b6d4",
    borderColor: "rgba(6,182,212,0.25)",
    bgColor: "rgba(6,182,212,0.08)",
  },
  {
    name: "GitHub",
    handle: "@aniketvishwakarma-11",
    url: "https://github.com/aniketvishwakarma-11",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "#94a3b8",
    borderColor: "rgba(148,163,184,0.2)",
    bgColor: "rgba(148,163,184,0.06)",
  },
  {
    name: "LinkedIn",
    handle: "Aniket Vishwakarma",
    url: "https://www.linkedin.com/in/aniket-vishwakarma-bb1b922b5",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.652h3.554v1.366c.43-.664 1.202-1.61 2.923-1.61 2.136 0 3.74 1.393 3.74 4.385v5.511zM5.337 8.855c-1.144 0-1.915-.757-1.915-1.704 0-.951.768-1.703 1.96-1.703 1.189 0 1.914.752 1.939 1.703 0 .947-.751 1.704-1.984 1.704zm1.581 11.597H3.721V9.8h3.197v10.652zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
    color: "#3b82f6",
    borderColor: "rgba(59,130,246,0.25)",
    bgColor: "rgba(59,130,246,0.08)",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Build mailto URL
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Aniket,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const mailtoUrl = `mailto:aniketvis675@gmail.com?subject=${subject}&body=${body}`;

    try {
      window.location.href = mailtoUrl;
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="05"
          label="CONTACT"
          title="Let's Build Something"
          subtitle="Open to freelance projects, collaborations, and full-time opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Availability */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl w-fit"
              style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-emerald-400">Available for Freelance & Opportunities</span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 leading-snug">
                Have a project in mind?{" "}
                <span className="gradient-text">Let's talk.</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Whether it's a new product idea, a bug to squash, or a full-scale platform to build — I'm all ears.
                Drop me a message and I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target={link.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: link.bgColor,
                    border: `1px solid ${link.borderColor}`,
                    color: link.color,
                  }}
                >
                  <span>{link.icon}</span>
                  <div>
                    <p className="text-xs text-slate-600 font-mono">{link.name}</p>
                    <p className="text-sm font-medium text-slate-300">{link.handle}</p>
                  </div>
                  <span className="ml-auto text-slate-600 text-xs">→</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(["name", "email"] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase tracking-wider">
                      {field}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      required
                      placeholder={field === "name" ? "Your name" : "your@email.com"}
                      className="w-full bg-transparent rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200"
                      style={{
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.03)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(6,182,212,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-transparent rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(6,182,212,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-transparent rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none resize-none transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(6,182,212,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center justify-center gap-2 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <><CheckCircle size={16} /> Message Sent!</>
                ) : status === "error" ? (
                  <><AlertCircle size={16} /> Try again</>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </motion.button>

              <p className="text-xs text-slate-600 text-center">
                This will open your email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
