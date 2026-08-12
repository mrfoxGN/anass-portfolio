import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";

import {
  projects,
} from "@/data/projects";

export default function AllProjectsPage() {
  return (
    <main className="page-content">
      <section className="projects-page">
        {/* =============================================
            PROJECTS PAGE TOP
        ============================================== */}

        <div className="projects-page-top">
          <Reveal y={8}>
            <Link
              href="/#projects"
              className="projects-page-back"
            >
              ← Back home
            </Link>
          </Reveal>

          <div className="projects-page-heading">
            <Reveal
              delay={0.04}
              y={8}
            >
              <p className="projects-page-eyebrow">
                Selected work
              </p>
            </Reveal>

            <Reveal
              delay={0.08}
              y={10}
            >
              <h1 className="projects-page-title">
                Projects
              </h1>
            </Reveal>

            <Reveal
              delay={0.12}
              y={10}
            >
              <p className="projects-page-intro">
                A collection of backend,
                systems, networking and
                infrastructure projects.
              </p>
            </Reveal>
          </div>
        </div>

        {/* =============================================
            PROJECT LIST
        ============================================== */}

        <div className="projects-page-list">
          {projects.map(
            (project, index) => (
              <Reveal
                key={project.slug}
                delay={Math.min(
                  index * 0.05,
                  0.15
                )}
                y={14}
              >
                <article className="projects-page-card">
                  {/* IMAGE */}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="projects-page-image"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={900}
                      height={560}
                    />

                    <span className="projects-page-number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </Link>

                  {/* INFORMATION */}

                  <div className="projects-page-info">
                    <div className="projects-page-meta">
                      <span>
                        {project.type}
                      </span>
                    </div>

                    <h2>
                      {project.title}
                    </h2>

                    <p className="projects-page-description">
                      {
                        project.description
                      }
                    </p>

                    <div className="projects-page-tech">
                      {project.technologies.map(
                        (
                          technology
                        ) => (
                          <span
                            key={
                              technology
                            }
                          >
                            {
                              technology
                            }
                          </span>
                        )
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="projects-page-link"
                    >
                      Explore project

                      <span>
                        ↗
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            )
          )}
        </div>
      </section>
    </main>
  );
}