import React from 'react';
import './experience.css'
import { SiTypescript, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiPython, SiNodedotjs, SiMysql, SiCsharp, SiAmazonaws } from 'react-icons/si';

const Experience = () => {
  const frontendSkills = [
    {
      id: 1,
      icon: <SiTypescript />,
      name: "Typescript"
    },
    {
      id: 2,
      icon: <SiReact />,
      name: "React.js"
    },
    {
      id: 3,
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      id: 4,
      icon: <SiHtml5 />,
      name: "HTML"
    },
    {
      id: 5,
      icon: <SiCss3 />,
      name: "CSS"
    }
  ];

  const backendSkills = [
    {
      id: 1,
      icon: <SiPython />,
      name: "Python"
    },
    {
      id: 2,
      icon: <SiNodedotjs />,
      name: "Node.js"
    },
    {
      id: 3,
      icon: <SiMysql />,
      name: "SQL"
    },
    {
      id: 4,
      icon: <SiCsharp />,
      name: "C#"
    },
    {
      id: 5,
      icon: <SiAmazonaws />,
      name: "AWS",
      description: "Lambda, S3, EC2, Load Balancer"
    }
  ];

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendSkills.map(skill => (
              <article key={skill.id} className="experience__details">
                <div className="experience__icon">
                  {skill.icon}
                </div>
                <div>
                  <h4>{skill.name}</h4>
                  {skill.description && <p>{skill.description}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend & Cloud Development</h3>
          <div className="experience__content">
            {backendSkills.map(skill => (
              <article key={skill.id} className={`experience__details${skill.description ? ' aws' : ''}`}>
                <div className="experience__icon">
                  {skill.icon}
                </div>
                <div>
                  <h4>{skill.name}</h4>
                  {skill.description && <p>{skill.description}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
