import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      icon: <FaGraduationCap />,
      degree: 'B.Tech – Computer Science Engineering',
      institution: 'UIT, RGPV Bhopal',
      year: '2021 - 2025',
      grade: 'CGPA: 8.21',
      description: 'Specialized in data analytics and machine learning with strong foundation in computer science fundamentals.'
    },
    {
      icon: <FaSchool />,
      degree: 'Class XII – CBSE (PCMB)',
      institution: 'Scholars\' Public H.S. School',
      year: '2021',
      grade: '93.2%',
      description: 'Completed higher secondary education with Physics, Chemistry, Mathematics, and Biology.'
    },
    {
      icon: <FaBook />,
      degree: 'Class X – CBSE',
      institution: 'Scholars\' Public H.S. School',
      year: '2019',
      grade: '94.2%',
      description: 'Completed secondary education with excellent academic performance.'
    }
  ]

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-icon">
              {edu.icon}
            </div>
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p className="education-date">{edu.year}</p>
            <div className="education-grade">{edu.grade}</div>
            <p className="education-desc">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
