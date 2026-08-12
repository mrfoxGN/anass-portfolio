import Reveal from "@/components/Reveal";

const skills = [
  "C",
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "Spring Boot",
  "Next.js",
  "React",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Docker Compose",
  "Linux",
  "Git",
  "REST APIs",
  "TCP/IP",
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <Reveal>
        <div className="section-header">
          <p className="section-label">Skills</p>
          <h2>Technologies I work with</h2>
        </div>
      </Reveal>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Reveal
            key={skill}
            delay={index * 0.03}
          >
            <div className="skill-item">
              {skill}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}