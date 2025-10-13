import { FaBriefcase, FaUsers } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experienceData = [
    {
      icon: <FaBriefcase />,
      title: 'Data Visualization Intern',
      company: 'Tata (Forage)',
      date: 'Jun 2023 - Aug 2023',
      responsibilities: [
        'Built Power BI dashboards to monitor revenue performance',
        'Identified a 15% dip in quarterly revenue, supporting corrective business actions',
        'Analyzed complex datasets to extract actionable business insights'
      ]
    },
    {
      icon: <FaUsers />,
      title: 'Public Relations Intern',
      company: 'ISTE SC MANIT',
      date: 'Aug 2022 - Dec 2022',
      responsibilities: [
        'Led campaigns that boosted student participation by 20%',
        'Strengthened brand visibility through innovative communication strategies',
        'Developed strong collaboration and teamwork skills'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-icon">
                {exp.icon}
              </div>
              <div className="experience-title">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="experience-date">{exp.date}</p>
              </div>
            </div>
            <ul className="experience-list">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
