import './About.css'

const About = () => {
  const skills = [
    'Python', 'SQL', 'Power BI', 'Data Analysis', 'Pandas', 'NumPy',
    'Matplotlib', 'Excel', 'Flask', 'Machine Learning', 'Azure ML',
    'AWS', 'GitHub', 'Agile/Scrum'
  ]

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hello! I'm Ashlesha, a Computer Science Engineering graduate (CGPA: 8.21) with proven skills in Python, SQL, Power BI, and data visualization.</p>
          <p>I have hands-on experience in data analysis projects, dashboards, and applied machine learning. I'm passionate about transforming complex data into actionable insights and building innovative solutions that make a real impact.</p>
          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="profile-image">
          <img src="/profile.jpg" alt="Ashlesha Saxena" className="profile-img" />
        </div>
      </div>
    </section>
  )
}

export default About
