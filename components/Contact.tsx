"use client";

import {
  type FormEvent,
  useState,
} from "react";

import Reveal from "@/components/Reveal";

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const EMAIL =
  "anass23guendaoui@gmail.com";

const GMAIL_URL =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

export default function Contact() {
  const [
    name,
    setName,
  ] = useState("");

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    message,
    setMessage,
  ] = useState("");

  /* =======================================================
     SEND MESSAGE

     For now we open Gmail Web directly.

     IMPORTANT:
     We do NOT use mailto:, so Ubuntu cannot redirect
     the visitor to Firefox/Thunderbird/etc.
  ======================================================= */

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const subject =
      `Portfolio contact from ${name}`;

    const body = [
      `Hi Anass,`,
      ``,
      message,
      ``,
      `--------------------`,
      `Name: ${name}`,
      `Email: ${email}`,
    ].join("\n");

    const composeUrl =
      "https://mail.google.com/mail/?" +
      "view=cm" +
      "&fs=1" +
      `&to=${encodeURIComponent(EMAIL)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(
      composeUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >
      {/* =====================================================
          TITLE
      ====================================================== */}

      <Reveal>
        <div className="reference-section-title">
          <span />

          <h2>
            Let&apos;s talk
          </h2>

          <span />
        </div>
      </Reveal>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}

      <div className="contact-container">
        <Reveal
          delay={0.08}
          y={12}
        >
          <div className="contact-intro">
            <p className="contact-small">
              Have a project, opportunity or just want to say hello?
            </p>

            {/* =================================================
                BIG EMAIL

                Opens Gmail Web.
            ================================================= */}

            <a
              href={GMAIL_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-email"
            >
              {EMAIL}
            </a>

            {/* =================================================
                SOCIAL ICONS
            ================================================= */}

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
                  <path
                    d="
                      M12 2
                      C6.48 2 2 6.58 2 12.24
                      c0 4.53 2.87 8.37 6.84 9.73
                      .5.1 .68-.22 .68-.49
                      0-.24-.01-1.04-.02-1.89
                      -2.78.62-3.37-1.2-3.37-1.2
                      -.45-1.17-1.11-1.48-1.11-1.48
                      -.91-.64.07-.63.07-.63
                      1 .07 1.53 1.05 1.53 1.05
                      .89 1.56 2.34 1.11 2.91.85
                      .09-.66.35-1.11.64-1.36
                      -2.22-.26-4.56-1.14-4.56-5.08
                      0-1.12.39-2.04 1.03-2.76
                      -.1-.26-.45-1.31.1-2.73
                      0 0 .84-.28 2.75 1.05
                      .8-.23 1.65-.35 2.5-.35
                      .85 0 1.7.12 2.5.35
                      1.91-1.33 2.75-1.05 2.75-1.05
                      .55 1.42.2 2.47.1 2.73
                      .64.72 1.03 1.64 1.03 2.76
                      0 3.95-2.35 4.82-4.58 5.08
                      .36.32.68.95.68 1.92
                      0 1.39-.01 2.51-.01 2.85
                      0 .28.18.61.69.49
                      A10.25 10.25 0 0 0 22 12.24
                      C22 6.58 17.52 2 12 2Z
                    "
                  />
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

                  <path d="M7.5 10v7" />
                  <path d="M7.5 7v.01" />

                  <path
                    d="
                      M11 17v-7
                      M11 13
                      c0-1.7 1.1-3 2.8-3
                      1.8 0 2.7 1.2 2.7 3.2
                      V17
                    "
                  />
                </svg>
              </a>

              {/* Email -> Gmail Web */}

              <a
                href={GMAIL_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Email Anass"
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
                    rx="2"
                  />

                  <path d="M4 7l8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            CONTACT FORM
        ====================================================== */}

        <Reveal
          delay={0.14}
          y={14}
        >
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* ===============================================
                NAME + EMAIL
            ================================================ */}

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(event) =>
                    setName(
                      event.target.value
                    )
                  }
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(event) =>
                    setEmail(
                      event.target.value
                    )
                  }
                  required
                />
              </div>
            </div>

            {/* ===============================================
                MESSAGE
            ================================================ */}

            <div className="contact-field">
              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your idea, opportunity or project..."
                value={message}
                onChange={(event) =>
                  setMessage(
                    event.target.value
                  )
                }
                required
              />
            </div>

            {/* ===============================================
                SUBMIT
            ================================================ */}

            <button
              type="submit"
              className="contact-submit"
            >
              Send message

              <span aria-hidden="true">
                ↗
              </span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}