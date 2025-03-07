export default function Experience() {
    return (
      <section className="experience">
        <h2>Experience</h2>
        <hr className="header-divider" />
        
        <div className="job">
          <h3>CCR Technologies</h3>
          <p><strong>Data Engineer | October 2022 - Present</strong></p>
          <ul>
            <li>Assembled and led cross-functional teams of engineers and developers to complete multiple product-focused business outcomes.</li>
            <li>Guided the design and implementation of NOC support software, ingesting millions of streaming data points to optimize technician workflows.</li>
            <li>Developed automated AWS SNS messaging system, reducing manual support workload by 10 hours daily.</li>
          </ul>
          <p><strong>Data Architect | May 2018 – October 2022</strong></p>
          <ul>
            <li>Designed and maintained a scalable data architecture for enterprise applications, ensuring consistent ontology across departments.</li>
            <li>Implemented SQL audit log standards for tracking data changes across APIs, user interfaces, and direct queries.</li>
          </ul>
          <p><strong>Business Intelligence Analyst | June 2015 – May 2018</strong></p>
          <ul>
            <li>Developed and maintained 250+ Tableau reports and dashboards for real-time business insights.</li>
            <li>Designed database structures integrating FCC data with internal provider data and external sources.</li>
            <li>Implemented optimized ETL tables, reducing financial report load times by 250%.</li>
          </ul>
        </div>
  
        <div className="job">
          <h3>Windstream Telecommunications</h3>
          <p><strong>Project Coordinator | July 2012 – June 2015</strong></p>
          <ul>
            <li>Managed customer installations, serving as the primary contact for internal and external clients.</li>
            <li>Scheduled and coordinated calls with clients, sales teams, engineers, and field technicians to meet project deadlines.</li>
          </ul>
        </div>
      </section>
    );
  }
  