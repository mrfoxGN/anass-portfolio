import Reveal from "@/components/Reveal";

const technologies = [
  "Spring Boot",
  "Next.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "REST APIs",
];

export default function Experience() {
  return (
    <section
      className="experience-reference"
      id="experience"
    >
      <Reveal>
        <div className="reference-section-title">
          <span />
          <h2>Experience</h2>
          <span />
        </div>
      </Reveal>

      <div className="experience-reference-list">
        <Reveal
          delay={0.1}
          y={24}
        >
          <article className="experience-reference-item">
            <div className="experience-timeline">
              <span className="experience-dot" />
              <span className="experience-line" />
            </div>

            <div className="experience-reference-content">
              <div className="experience-reference-top">
                <div>
                  <p className="experience-reference-date">
                    Mar 2026 — Jun 2026
                  </p>

                  <h3>
                    E-Commerce Bookstore Platform
                  </h3>

                  <p className="experience-reference-role">
                    Backend / Full-Stack Developer
                  </p>
                </div>

                <span className="experience-location">
                  Morocco
                </span>
              </div>

              <div className="experience-reference-description">
                <p>
                  Developed a full-stack bookstore
                  platform including product catalog,
                  cart, checkout, order management and
                  an administration dashboard.
                </p>

                <p>
                  Built REST APIs with Spring Boot,
                  PostgreSQL data models, responsive
                  Next.js interfaces and Dockerized
                  application services.
                </p>

                <p>
                  Worked across backend, frontend and
                  infrastructure while maintaining a
                  clear separation between application
                  services.
                </p>
              </div>

              <div className="experience-reference-tech">
                {technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}