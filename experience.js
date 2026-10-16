import { createElement } from "react";
import { createRoot } from "react-dom/client";
import htm from "htm";

const html = htm.bind(createElement);

const ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const frontendSkills = [
  { name: "HTML", level: "Intermediate", icon: `${ICON}/html5/html5-original.svg` },
  { name: "CSS", level: "Intermediate", icon: `${ICON}/css3/css3-original.svg` },
  { name: "JavaScript", level: "Intermediate", icon: `${ICON}/javascript/javascript-original.svg` },
  { name: "React", level: "Intermediate", icon: `${ICON}/react/react-original.svg` },
  { name: "TypeScript", level: "Basic", icon: `${ICON}/typescript/typescript-original.svg` },
];

const backendSkills = [
  { name: "Java", level: "Intermediate", icon: `${ICON}/java/java-original.svg` },
  { name: "Python", level: "Advanced", icon: `${ICON}/python/python-original.svg` },
  { name: "SQL", level: "Intermediate", icon: `${ICON}/mysql/mysql-original.svg` },
  { name: "Swift", level: "Basic", icon: `${ICON}/swift/swift-original.svg` },
  { name: "Node.js", level: "Basic", icon: `${ICON}/nodejs/nodejs-original.svg` },
];

function SkillCard({ name, level, icon }) {
  return html`
    <article className="skill-card">
      <div className="skill-card-logo">
        <img src=${icon} alt=${`${name} logo`} className="skill-card-icon" />
      </div>
      <p className="skill-level">${level}</p>
    </article>
  `;
}

function SkillScroller({ skills, label }) {
  return html`
    <div className="skill-row">
      <h2 className="experience-sub-title skill-row-title">${label}</h2>
      <div className="skill-scroller">
        ${skills.map(
          (skill) => html`
            <${SkillCard}
              key=${skill.name}
              name=${skill.name}
              level=${skill.level}
              icon=${skill.icon}
            />
          `
        )}
      </div>
    </div>
  `;
}

function Experience() {
  return html`
    <div className="experience-board">
      <${SkillScroller} label="Frontend Development" skills=${frontendSkills} />
      <${SkillScroller} label="Backend Development" skills=${backendSkills} />
    </div>
  `;
}

const root = document.getElementById("experience-root");
if (root) {
  createRoot(root).render(html`<${Experience} />`);
}
