import Image from "next/image";

import Reveal from "@/components/Reveal";
import AboutStickman from "@/components/AboutStickman";

/* =========================================================
   LINKS
========================================================= */

const GMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=anass23guendaoui@gmail.com";

const skills = [
  "C",
  "C++",
  "Java",
  "Spring Boot",
  "Next.js",
  "React",
  "PostgreSQL",
  "Docker",
  "Linux",
  "TCP/IP",
];

export default function About() {
  return (
    <section
      className="about"
      id="about"
    >
      {/* =====================================================
          TITLE
      ====================================================== */}

      <Reveal>
        <div className="reference-section-title">
          <span />

          <h2>About</h2>

          <span />
        </div>
      </Reveal>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="about-content">
        {/* ===================================================
            PHOTO
        ==================================================== */}

        <Reveal
          delay={0.08}
          y={16}
        >
          <div className="about-photo-wrapper">
            <Image
              src="/images/anassguendaoui.jpeg"
              alt="Anass Guendaoui"
              width={400}
              height={400}
              className="about-photo"
            />
          </div>
        </Reveal>

        {/* ===================================================
            INFORMATION
        ==================================================== */}

        <Reveal
          delay={0.12}
          y={16}
        >
          <div className="about-info">
            <p className="about-intro">
              I&apos;m Anass Guendaoui, a Software Engineering
              student and Full-Stack Developer interested in
              backend development, systems, networking and
              modern web technologies.
            </p>

            <p className="about-intro">
              I enjoy building practical software, learning new
              technologies and working on projects ranging from
              web applications to low-level networking and
              Docker infrastructure.
            </p>

            {/* ===============================================
                SOCIALS
            ================================================ */}

            <div className="about-socials">
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

            {/* ===============================================
                SKILLS
            ================================================ */}

            <div className="about-skills">
              {skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            {/* ===============================================
                RESUME
            ================================================ */}

            <a
              href="/cv.pdf"
              className="resume-button"
              target="_blank"
              rel="noreferrer"
            >
              <span>View Resume</span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          STICKMAN
      ====================================================== */}

      <AboutStickman />
    </section>
  );
}