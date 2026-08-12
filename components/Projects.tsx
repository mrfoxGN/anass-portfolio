import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";

import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      className="projects-reference"
      id="projects"
    >
      <Reveal>
        <div className="reference-section-title">
          <span />
          <h2>Projects</h2>
          <span />
        </div>
      </Reveal>

      <div className="projects-reference-list">
        {featuredProjects.map(
          (project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.07}
              y={24}
            >
              <article className="project-reference-card">
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-reference-image"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={450}
                  />

                  <span className="project-card-number">
                    0{index + 1}
                  </span>
                </Link>

                <div className="project-reference-info">
                  <p className="project-card-type">
                    {project.type}
                  </p>

                  <h3>
                    {project.title}
                  </h3>

                  <p className="project-card-description">
                    {project.description}
                  </p>

                  <div className="project-card-tech">
                    {project.technologies
                      .slice(0, 4)
                      .map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="project-reference-link"
                  >
                    <span>
                      View project
                    </span>

                    <span className="project-link-arrow">
                      ↗
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          )
        )}
      </div>

      <Reveal delay={0.1}>
        <div className="all-projects-wrapper">
          <Link
            href="/projects"
            className="all-projects-link"
          >
            <span>
              View all projects
            </span>

            <span>→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}