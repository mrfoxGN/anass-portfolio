import Reveal from "@/components/Reveal";

const education = [
  {
    school: "UM6P / 1337 — 42 Network",
    degree:
      "Computer Software Engineering — Common Core",
    location: "Benguerir, Morocco",
    date: "2024 — 2027",
    description:
      "Project-based software engineering program focused on C, C++, Unix systems, networking, algorithms, concurrency, containers and peer-to-peer learning.",
  },

  {
    school: "FST Beni Mellal",
    degree:
      "Bachelor's Degree in Computer Science",
    location: "Beni Mellal, Morocco",
    date: "2022 — Jun 2026",
    description:
      "Computer science studies covering programming, algorithms, databases, software engineering, web development and computer systems.",
  },
];

export default function Education() {
  return (
    <section
      className="education-reference"
      id="education"
    >
      <Reveal>
        <div className="reference-section-title">
          <span />
          <h2>Education</h2>
          <span />
        </div>
      </Reveal>

      <div className="education-reference-list">
        {education.map((item, index) => (
          <Reveal
            key={item.school}
            delay={index * 0.08}
            y={20}
          >
            <article className="education-reference-card">
              <div className="education-number">
                0{index + 1}
              </div>

              <div className="education-reference-main">
                <div className="education-reference-top">
                  <div>
                    <h3>
                      {item.school}
                    </h3>

                    <p className="education-degree">
                      {item.degree}
                    </p>
                  </div>

                  <div className="education-reference-meta">
                    <span>
                      {item.location}
                    </span>

                    <span>
                      {item.date}
                    </span>
                  </div>
                </div>

                <p className="education-reference-description">
                  {item.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}