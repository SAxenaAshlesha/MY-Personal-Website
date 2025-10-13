import { FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projectsData = [
    {
      title: '🎓 Edu-Transcriber',
      description: 'EdTech platform for automated transcript generation supporting English and Hindi. Built with Python & APIs, enhancing accessibility for 200+ students.',
      tags: ['Python', 'APIs', 'NLP'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: 'https://github.com/SAxenaAshlesha'
    },
    {
      title: '🌾 Crop Yield Prediction',
      description: 'Flask-based web application predicting crop yield with ~85% accuracy using historical datasets. Applied Agile sprints for iterative improvements.',
      tags: ['Python', 'Flask', 'Machine Learning', 'Agile'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: 'https://github.com/SAxenaAshlesha'
    },
    {
      title: '📊 Data Visualization Dashboards',
      description: 'Power BI dashboards analyzing sales and performance trends. Conducted SQL queries to clean and extract insights from structured datasets.',
      tags: ['Power BI', 'SQL', 'Data Analysis'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      link: 'https://github.com/SAxenaAshlesha'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image" style={{ background: project.gradient }}></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
