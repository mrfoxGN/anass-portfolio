import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const dynamicParams = false;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];

  const previousProject =
    projectIndex > 0
      ? projects[projectIndex - 1]
      : null;

  const nextProject =
    projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;

  const projectNumber = String(
    projectIndex + 1
  ).padStart(2, "0");

  const totalProjects = String(
    projects.length
  ).padStart(2, "0");

  return (
    <>
      <Navbar />

      <main className="page-content">
        <article className="project-case-study">
          {/* =============================================
              TOP NAVIGATION
          ============================================== */}

          <div className="project-case-top">
            <Link
              href="/projects"
              className="project-case-back"
            >
              ← All projects
            </Link>

            <span className="project-case-counter">
              {projectNumber} / {totalProjects}
            </span>
          </div>

          {/* =============================================
              HERO
          ============================================== */}

          <header className="project-case-hero">
            <p className="project-case-type">
              {project.type}
            </p>

            <h1>{project.title}</h1>

            <p className="project-case-description">
              {project.longDescription}
            </p>

            <div className="project-case-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-github-button"
              >
                <span>View GitHub</span>
                <span>↗</span>
              </a>
            </div>
          </header>

          {/* =============================================
              PROJECT IMAGE
          ============================================== */}

          <div className="project-case-image">
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={850}
              priority
            />
          </div>

          {/* =============================================
              ABOUT PROJECT
          ============================================== */}

          <section className="project-about">
            <div className="project-case-section-label">
              <span>01</span>

              <h2>About the project</h2>
            </div>

            <div className="project-about-content">
              <p>
                {project.longDescription}
              </p>
            </div>
          </section>

          {/* =============================================
              TECHNOLOGIES
          ============================================== */}

          <section className="project-technologies">
            <div className="project-case-section-label">
              <span>02</span>

              <h2>Technologies</h2>
            </div>

            <div className="project-case-tech-list">
              {project.technologies.map(
                (technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                )
              )}
            </div>
          </section>

          {/* =============================================
              FEATURES
          ============================================== */}

          <section className="project-features-section">
            <div className="project-case-section-label">
              <span>03</span>

              <h2>Key features</h2>
            </div>

            <div className="project-case-features">
              {project.features.map(
                (feature, index) => (
                  <div
                    className="project-feature-row"
                    key={feature}
                  >
                    <span className="project-feature-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <p>{feature}</p>
                  </div>
                )
              )}
            </div>
          </section>

          {/* =============================================
              BOTTOM NAVIGATION
          ============================================== */}

          <nav className="project-case-navigation">
            <div className="project-navigation-side">
              {previousProject ? (
                <Link
                  href={`/projects/${previousProject.slug}`}
                  className="project-navigation-link"
                >
                  <span className="project-navigation-label">
                    Previous
                  </span>

                  <span className="project-navigation-title">
                    ← {previousProject.title}
                  </span>
                </Link>
              ) : (
                <div className="project-navigation-empty" />
              )}
            </div>

            <Link
              href="/projects"
              className="project-navigation-all"
            >
              All projects
            </Link>

            <div className="project-navigation-side project-navigation-side-right">
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="project-navigation-link project-navigation-next"
                >
                  <span className="project-navigation-label">
                    Next
                  </span>

                  <span className="project-navigation-title">
                    {nextProject.title} →
                  </span>
                </Link>
              ) : (
                <div className="project-navigation-empty" />
              )}
            </div>
          </nav>
        </article>
      </main>
    </>
  );
}