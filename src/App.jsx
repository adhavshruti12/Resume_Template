
import './App.css'
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'

function App() {
  const resumeData = {
    basic: {
      name: "Alex Thompson",
      title: "Senior Software Engineer",
      phone: "+1 (555) 123-4567",
      email: "alex.thompson@email.com",
      location: "San Francisco, CA",
      website: "alexthompson.dev",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: {
        linkedin: "linkedin.com/in/alexthompson",
        github: "github.com/alexthompson"
      }
    },
    profile: `Innovative Senior Software Engineer with 6+ years of experience in full-stack development, 
      cloud architecture, and leading engineering teams. Specialized in building scalable microservices 
      and implementing CI/CD pipelines. Proven track record of delivering high-impact solutions and 
      mentoring junior developers.`,
    projects: [
      {
        title: "Cloud Infrastructure Automation",
       
        description: [
          "Developed infrastructure as code using Terraform and AWS CloudFormation",
          "Implemented auto-scaling and load balancing for high availability",
          "Reduced deployment time by 70% through automation"
        ]
      },
      {
        title: "Real-time Analytics Platform",
       
        description: [
          "Built real-time data processing pipeline using Apache Kafka",
          "Implemented ElasticSearch for efficient data indexing and searching",
          "Developed dashboard using React and D3.js for data visualization"
        ]
      }
    ],
    experience: [
      {
        title: "Senior Software Engineer",
        company: "TechCorp Solutions",
        period: "2020 - Present",
        achievements: [
          "Led a team of 8 engineers in developing a microservices architecture",
          "Implemented AWS-based cloud infrastructure for 1M+ daily active users",
          "Architected and deployed Kubernetes clusters for container orchestration"
        ]
      },
      {
        title: "Software Engineer",
        company: "DataFlow Systems",
        period: "2018 - 2020",
        achievements: [
          "Developed RESTful APIs serving 500K+ requests daily",
          "Optimized database queries resulting in 60% faster response times",
          "Implemented automated testing pipeline reducing deployment time by 50%"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        period: "2016 - 2018"
      },
      {
        degree: "Bachelor of Engineering in Software Engineering",
        institution: "University of California, Berkeley",
        period: "2012 - 2016"
      }
    ],
    skills: [
      "JavaScript/TypeScript",
      "Python",
      "React/Node.js",
      "AWS/Cloud Architecture",
      "Docker/Kubernetes",
      "CI/CD",
      "System Design",
      "Database Design"
    ],
    languages: [
      "English (Native)",
      "Spanish (Professional)",
      "Mandarin (Conversational)"
    ],
    achievements: [
      "AWS Certified Solutions Architect",
      "Published 3 technical papers on cloud architecture",
      "Speaker at CloudCon 2022",
      "Led winning team in National Hackathon 2021"
    ],
    reference: {
      name: "Sarah Chen",
      title: "CTO at TechCorp Solutions",
      phone: "+1 (555) 987-6543",
      email: "sarah.chen@techcorp.com"
    },
    
  }

  return (
    <div className="resume-container">
      <div className="left-column">
        <div className="profile-image">
          <img src={resumeData.basic.image} alt="Profile" />
        </div>

        <div className="section">
          <h3>Contact</h3>
          <div className="contact-info">
            <p><FaPhone /> {resumeData.basic.phone}</p>
            <p><FaEnvelope /> {resumeData.basic.email}</p>
            <p><FaGlobe /> {resumeData.basic.website}</p>
            <p><FaMapMarkerAlt /> {resumeData.basic.location}</p>
            <p><FaLinkedin /> {resumeData.basic.social.linkedin}</p>
            <p><FaGithub /> {resumeData.basic.social.github}</p>
          </div>
        </div>

        <div className="section">
          <h3>Skills</h3>
          <ul className="skills-list">
            {resumeData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>Education</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.degree}</h4>
              <p>{edu.institution}</p>
              <p className="period">{edu.period}</p>
            </div>
          ))}
        </div>

        <div className="section">
          <h3>Languages</h3>
          <ul className="language-list">
            {resumeData.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>Reference</h3>
          <div className="reference-info">
            <h4>{resumeData.reference.name}</h4>
            <p>{resumeData.reference.title}</p>
            <p>{resumeData.reference.phone}</p>
            <p>{resumeData.reference.email}</p>
          </div>
          <div className="reference-info">
            <h4>{resumeData.reference.name}</h4>
            <p>{resumeData.reference.title}</p>
            <p>{resumeData.reference.phone}</p>
            <p>{resumeData.reference.email}</p>
          </div>
        </div>
      </div>

      <div className="right-column">
        <div className="name-title">
          <h1>{resumeData.basic.name}</h1>
          <h2>{resumeData.basic.title}</h2>
        </div>

        <div className="right-section">
          <h3>Profile</h3>
          <p className="profile-text">{resumeData.profile}</p>
        </div>

        <div className="right-section">
          <h3>Projects</h3>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <h4>{project.title}</h4>
                
              </div>
              <div className="project-content">
                <ul>
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="right-section">
          <h3>Work Experience</h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h4>{exp.title}</h4>
                <p className="company-name">{exp.company}</p>
                <p className="period">{exp.period}</p>
              </div>
              <div className="experience-content">
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="right-section">
          <h3>Achievements</h3>
          <ul className="achievements-list">
            {resumeData.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App