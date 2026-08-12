"use client";

import type { FormEvent } from "react";

import Reveal from "@/components/Reveal";

export default function Contact() {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(
      `Portfolio contact from ${name}`
    );

    const body = encodeURIComponent(
      `Hi Anass,

My name is ${name}.
Email: ${email}

${message}`
    );

    window.location.href =
      `mailto:anass23guendaoui@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >
      {/* =============================================
          TITLE
      ============================================== */}

      <Reveal>
        <div className="reference-section-title">
          <span />
          <h2>Let&apos;s talk</h2>
          <span />
        </div>
      </Reveal>

      <div className="contact-container">
        {/* =============================================
            CONTACT INTRO
        ============================================== */}

        <Reveal
          delay={0.08}
          y={20}
        >
          <div className="contact-intro">
            <p className="contact-small">
              Have a project, opportunity or just want
              to say hello?
            </p>

            <a
              href="mailto:anass23guendaoui@gmail.com"
              className="contact-email"
            >
              anass23guendaoui@gmail.com
            </a>

            {/* =============================================
                SOCIAL ICONS
            ============================================== */}

            <div className="contact-socials">
              {/* GitHub */}

              <a
                href="https://github.com/mrfoxGN"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.8a9.3 9.3 0 0 0-2.94 18.12c.46.08.63-.2.63-.44v-1.64c-2.56.56-3.1-1.08-3.1-1.08-.42-1.07-1.03-1.35-1.03-1.35-.84-.57.06-.56.06-.56.93.07 1.42.96 1.42.96.83 1.42 2.17 1.01 2.7.77.08-.6.32-1.01.59-1.24-2.04-.23-4.18-1.02-4.18-4.56 0-1.01.36-1.83.95-2.47-.1-.23-.41-1.17.09-2.44 0 0 .78-.25 2.55.94a8.9 8.9 0 0 1 4.64 0c1.77-1.19 2.55-.94 2.55-.94.5 1.27.19 2.21.09 2.44.59.64.95 1.46.95 2.47 0 3.55-2.15 4.33-4.2 4.56.33.29.63.85.63 1.72v2.42c0 .24.16.52.63.43A9.3 9.3 0 0 0 12 2.8Z" />
                </svg>
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/anass-guendaoui-b42abb2b1/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                  />

                  <path d="M7 10v7" />

                  <path d="M7 7.3v.2" />

                  <path d="M11 17v-7" />

                  <path d="M11 13.1c.7-2 5-2.3 5 1.1V17" />
                </svg>
              </a>

              {/* Email */}

              <a
                href="mailto:anass23guendaoui@gmail.com"
                aria-label="Email"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="1.5"
                  />

                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        {/* =============================================
            CONTACT FORM
        ============================================== */}

        <Reveal
          delay={0.15}
          y={24}
        >
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-row">
              {/* NAME */}

              <div className="contact-field">
                <label htmlFor="contact-name">
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* EMAIL */}

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                />
              </div>
            </div>

            {/* MESSAGE */}

            <div className="contact-field">
              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Tell me about your idea, opportunity or project..."
                required
              />
            </div>

            {/* SEND */}

            <button
              type="submit"
              className="contact-submit"
            >
              Send message

              <span>↗</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}