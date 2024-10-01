import React from 'react';
import { FaLinkedin, FaGithub, FaBlog } from 'react-icons/fa';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1 className="name">Engin Karatas</h1>
        <p className="address">Gebze, Turkey</p>
        <p className="contact">
        </p>
        <div className="social-links">
          <a href="https://linkedin.com/in/enginkaratas" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/enginkaratas" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </header>

      <section className="profile">
        <h2 className="section-title">My Music Profile</h2>
        Here is The Galloping Horesmen Song made by me
        <br />
        <iframe width="560" height="202" src="https://www.bandlab.com/embed/?id=062d618f-f968-ee11-9937-000d3a41ec2a" allowfullscreen></iframe>

      </section>

      <section className="profile">
        <h2 className="section-title">Profile</h2>
        
        <p className="profile-description">Accomplished front-end developer with over 2 years of experience in delivering high-quality, scalable web and mobile applications. Primarily focused on high-scale business apps with front-end Javascript frameworks. Recognized for leading a successful migration of Vue.js, benefiting over 300,000 users, and earning multiple awards including the Future Star Medal and Sparkling Reward. Proven ability to drive efficiency improvements, having enhanced data processing by 30%. Skilled in partnering, and collaborating with cross-functional teams on complex projects, consistently delivering creative solutions.</p>

      </section>

      <section className="education">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3 className="institution">University Name</h3>
          <p className="degree">Bachelor of Computer Engineering - GPA - 3.33/4 - department second degree.</p>
          <p className="date">08/2018 to 09/2022</p>
        </div>
      </section>

      <section className="experience">
        <h2 className="section-title">Experience</h2>
        <div className="job">
          <h3 className="company">Tech Company</h3>
          <p className="position">Assistant Software Engineer (Remote)</p>
          <p className="date">09/2022 to 09/2024</p>
          <ul className="achievements">
            <li>Future Star Medal for outstanding sustainable successes in the 3 different projects.</li>
            <li>Sparkling Reward for key contributor and team lead in upgrading Vue.js 2 to Vue.js 3, guiding and supporting team members.</li>
            <li>Commendation letter from HQ delivering high-quality work to over 300,000 users engaging with the released product.</li>
            <li>Worked with 4+ teams and 6+ projects. Primary responsibilities develop and maintain web and mobile applications using Vue.js, Javascript, TypeScript, HTML, CSS, and company-specific technologies.</li>
          </ul>
        </div>
      </section>
s    </div>
  );
};

export default HomePage;
