import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "../styles/projects.css";

export default function Projects() {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  const toggleTechnicalDetails = () => {
    setShowTechnicalDetails((prev) => !prev);
  };

  return (
    <section className="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <button onClick={toggleTechnicalDetails}>
          {showTechnicalDetails ? "Hide Technical Details" : "Show Technical Details"}
        </button>
      </div>
      <hr className="header-divider" />

      <ul>
        <li>
          {/* Wrap Project Title with GitHub Link & Icon */}
          <a href="https://github.com/gaandus/comic_scanner" target="_blank" rel="noopener noreferrer" className="project-link">
            <strong>Always on Web Scanner</strong>
            <FaGithub className="github-icon" />
          </a>
          <p>Python web scraper that tracks new comic book drops and notifies via SMS.</p>
          {showTechnicalDetails && (
            <ul className="technical-details">
              <li><strong>Languages:</strong> Python</li>
              <li><strong>Libraries:</strong> BeautifulSoup, Twilio API</li>
            </ul>
          )}
        </li>

        <li>
          <a href="https://github.com/gaandus/bin_packing" target="_blank" rel="noopener noreferrer" className="project-link">
            <strong>Bin Packing Optimization Algorithm</strong>
            <FaGithub className="github-icon" />
          </a>
          <p>Uses SCIP solver to minimize bins or maximize capacity.</p>
          {showTechnicalDetails && (
            <ul className="technical-details">
              <li><strong>Languages:</strong> Python</li>
              <li><strong>Libraries:</strong> SCIP Optimization, NumPy</li>
            </ul>
          )}
        </li>

        <li>
          <a href="https://github.com/gaandus/romance_books" target="_blank" rel="noopener noreferrer" className="project-link">
            <strong>Romance Book Recommender</strong>
            <FaGithub className="github-icon" />
          </a>
          <p>Uses LLM to recommend books based on user preferences.</p>
          {showTechnicalDetails && (
            <ul className="technical-details">
              <li><strong>Languages:</strong> Python</li>
              <li><strong>APIs:</strong> OpenAI API</li>
              <li><strong>Libraries:</strong> Pandas</li>
            </ul>
          )}
        </li>

        <li>
          <a href="https://github.com/gaandus/site_d3" target="_blank" rel="noopener noreferrer" className="project-link">
            <strong>Site Level Force Graph</strong>
            <FaGithub className="github-icon" />
          </a>
          <p>Displays visual representation of a sites hardware such as routers & access points.</p>
          {showTechnicalDetails && (
            <ul className="technical-details">
              <li><strong>Languages:</strong> D3, Javascript, HTML, CSS</li>
              <li><strong>Libraries:</strong> TBD</li>
            </ul>
          )}
        </li>

      </ul>
    </section>
  );
}
