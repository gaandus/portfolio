export default function Home() {
  return (
    <div className="container">
      <h1>Danny Anderson</h1>
      <p>Data Engineer | Business Intelligence | Cloud Solutions</p>
      <p>📍 Marion, IA | 📧 danielthomasanderson@gmail.com</p>
      <h2>About Me</h2>
      <p>
        I am a passionate data engineer with extensive experience in designing
        scalable data solutions, cloud deployments, and automation processes.
        My expertise lies in SQL, Python, Kubernetes, and data pipeline development.
      </p>
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>CCR Technologies - Data Engineer</strong> (Oct 2022 - Present)
          <ul>
            <li>Led cross-functional teams to build scalable data solutions.</li>
            <li>Implemented NOC support software for streaming data insights.</li>
            <li>Designed AWS SNS-based alerting system saving 10+ hours daily.</li>
          </ul>
        </li>
        <li>
          <strong>CCR Technologies - Data Architect</strong> (May 2018 - Oct 2022)
          <ul>
            <li>Built relational databases for enterprise applications.</li>
            <li>Created SQL audit log standards for tracking data changes.</li>
          </ul>
        </li>
        <li>
          <strong>Windstream Telecommunications - Project Coordinator</strong> (Jul 2012 - Jun 2015)
          <ul>
            <li>Managed installation projects ensuring timely client deliveries.</li>
          </ul>
        </li>
      </ul>
      <h2>Projects</h2>
      <ul>
        <li>📌 <strong>Always-on Web Scanner:</strong> Python web scraper for tracking new comic releases.</li>
        <li>📌 <strong>Bin Packing Optimization:</strong> SCIP-based solver for efficient packing.</li>
        <li>📌 <strong>Book Recommender:</strong> LLM-powered book recommendations with trigger warnings.</li>
      </ul>
    </div>
  );
}