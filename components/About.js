export default function About() {
    return (
      <section className="about">
        <h2>About Me</h2>
        <hr className="header-divider" /> 

        <p>
          I'm a data engineer with a passion for solving complex problems and building scalable, efficient data solutions.
          With a strong foundation in SQL, cloud technologies, and data architecture, I thrive on optimizing workflows, 
          automating processes, and enabling teams to make data-driven decisions.
        </p>

        <p>
          Beyond the technical side, I believe great engineering is about collaboration, innovation, and continuous learning.
          I enjoy mentoring team members, refining development workflows, and driving initiatives that create long-term value.
          My work is guided by a mission-driven approach—seeking opportunities where I can contribute to meaningful projects that make a difference.
        </p>

        <p>
          Outside of work, I enjoy cooking, gardening, and spending time with my family.
          I have a wonderful wife and three beautiful stepdaughters who keep life exciting.
          Our home is also shared with a quirky mix of pets—a snake, a cat, and a tank full of fish.
        </p>

        <h3>I Live My Core Values By</h3>
        <div className="core-values">
          <ul>
            <li>Fostering mutually enriching relationships</li>
            <li>Humbly sharing knowledge</li>
            <li>Promoting self-improvement</li>
            <li>Practicing self-care</li>
          </ul>
          <ul>
            <li>Cultivating independent creativity</li>
            <li>Nurturing an adaptable, positive mindset</li>
            <li>Embracing leisure time</li>
            <li>Exploring the world</li>
          </ul>
        </div>

        <p className="cta">Let’s connect and build something impactful together!</p>
      </section>
    );
}
