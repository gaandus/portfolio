"use client";

import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="container">
      <header>
        <div className="header-content">
          <h1>Danny Anderson</h1>
          <Link href="https://www.linkedin.com/in/daniel-anderson-52109721" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="linkedin-icon" />
          </Link>
        </div>
        <p>Innovative Data Engineer & Architect | Problem Solver | Builder of Scalable Solutions</p>
      </header>

      <nav className="tabs">
        <button className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>About Me</button>
        <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Projects</button>
        <button className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>Experience</button>
        <button className={activeTab === 'education' ? 'active' : ''} onClick={() => setActiveTab('education')}>Education</button>
      </nav>

      {activeTab === 'about' && (
        <section className="about">
          <h2>About Me</h2>
          <p>
            Passionate about actionable insights, automation, and data-driven solutions. With a background in data engineering,
            architecture, and analytics, I thrive in cross-functional collaboration to drive business outcomes. My expertise spans SQL,
            Python, and cloud technologies, allowing me to create scalable and impactful solutions.
          </p>
        </section>
      )}

      {activeTab === 'projects' && (
        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li><strong>Always on Web Scanner:</strong> Python web scraper monitoring new comic releases with SMS notifications.</li>
            <li><strong>Bin Packing Optimization Algorithm:</strong> Utilized SCIP solver for efficient packing and resource optimization.</li>
            <li><strong>Book Recommender:</strong> Developed an LLM-powered book recommendation system with trigger warning exclusions.</li>
          </ul>
        </section>
      )}

      {activeTab === 'experience' && (
        <section className="experience">
          <h2>Experience</h2>
          <div className="job">
            <h3>CCR Technologies</h3>
            <p><strong>Data Engineer | October 2022 - Present</strong></p>
            <ul>
              <li>Led cross-functional teams to achieve business goals with strong problem-solving and communication skills.</li>
              <li>Designed and implemented NOC support software processing millions of streaming data points.</li>
              <li>Built automated AWS SNS messaging system, reducing manual workload by 10 hours daily.</li>
            </ul>
            <p><strong>Data Architect | May 2018 – October 2022</strong></p>
            <ul>
              <li>Developed scalable data structures to support enterprise applications and improve data consistency.</li>
              <li>Implemented SQL audit log standards for change tracking across multiple access points.</li>
            </ul>
            <p><strong>Business Intelligence Analyst | June 2015 – May 2018</strong></p>
            <ul>
              <li>Developed and maintained over 250 Tableau reports and dashboards integrated and delivered through the company Intranet.</li>
              <li>Designed database structure for integrating over 10GB of FCC data with internal provider data and multiple external sources.</li>
              <li>Implemented ETL tables which reduced load time of financial reporting by 250%.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Windstream Telecommunications</h3>
            <p><strong>Project Coordinator | July 2012 – June 2015</strong></p>
            <ul>
              <li>Acted as main point of contact for all internal and external clients during installation process.</li>
              <li>Scheduled and managed calls with clients, sales, engineering, and field technicians to ensure project completion per market standards.</li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === 'education' && (
        <section className="education">
          <h2>Education</h2>
          <div className="degree">
            <h3>University of Iowa</h3>
            <ul>
              <li><strong>Master of Science - Business Analytics | May 2021</strong></li>
              <ul>
                <li>Python, R, SQL</li>
                <li>Machine Learning, Data Visualization</li>
                <li>Business Intelligence</li>
              </ul>
              <li><strong>Master of Arts - Library and Information Science | May 2019</strong></li>
              <ul>
                <li>Project Management, Data Governance</li>
                <li>Information Architecture, Research Methods</li>
              </ul>
            </ul>
          </div>
          <div className="degree">
            <h3>Arizona State University</h3>
            <ul>
              <li><strong>Bachelor of Arts - English Literature | May 2007</strong></li>
              <ul>
                <li>Critical Analysis, Writing</li>
                <li>Research, Communication</li>
              </ul>
            </ul>
          </div>
        </section>
      )}

      <footer>
        <p>&copy; {new Date().getFullYear()} Danny Anderson | Built with Next.js</p>
      </footer>
    </div>
  );
}
