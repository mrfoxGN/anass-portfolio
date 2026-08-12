import Image from "next/image";

import Reveal from "@/components/Reveal";

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
      <Reveal>
        <div className="reference-section-title">
          <span />
          <h2>About</h2>
          <span />
        </div>
      </Reveal>

      <div className="about-content">
        {/* =============================================
            PHOTO
        ============================================== */}

        <Reveal
          delay={0.08}
          y={16}
        >
          <div className="about-photo-wrapper">
            <div className="about-photo-frame">
              <Image
                src="/images/anassguendaoui.jpeg"
                alt="Anass Guendaoui"
                width={400}
                height={400}
                className="about-photo"
                priority={false}
              />
            </div>
          </div>
        </Reveal>

        {/* =============================================
            INFO
        ============================================== */}

        <Reveal
          delay={0.12}
          y={16}
        >
          <div className="about-info">
            <p className="about-intro">
              I&apos;m Anass Guendaoui, a Software
              Engineering student and Full-Stack
              Developer interested in backend
              development, systems, networking and
              modern web technologies.
            </p>

            <p className="about-intro">
              I enjoy building practical software,
              learning new technologies and working on
              projects ranging from web applications to
              low-level networking and Docker
              infrastructure.
            </p>

            {/* =============================================
                SOCIALS
            ============================================== */}

            <div className="about-socials">
              {/* GitHub */}

              <a
                href="https://github.com/mrfoxGN"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
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
                title="LinkedIn"
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
                  <path d="M7 7.2v.2" />
                  <path d="M11 17v-7" />
                  <path d="M11 13.1c.7-2 5-2.3 5 1.1V17" />
                </svg>
              </a>

              {/* Email */}

              <a
                href="mailto:anass23guendaoui@gmail.com"
                aria-label="Email"
                title="Email"
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

            {/* =============================================
                SKILLS
            ============================================== */}

            <div className="about-skills">
              {skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            {/* =============================================
                RESUME
            ============================================== */}

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
    </section>
  );
}