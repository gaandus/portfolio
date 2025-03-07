export default function Tabs({ activeTab, setActiveTab }) {
    return (
      <nav className="tabs">
        <button className={activeTab === "about" ? "active" : ""} onClick={() => setActiveTab("about")}>About Me</button>
        <button className={activeTab === "projects" ? "active" : ""} onClick={() => setActiveTab("projects")}>Projects</button>
        <button className={activeTab === "experience" ? "active" : ""} onClick={() => setActiveTab("experience")}>Experience</button>
        <button className={activeTab === "education" ? "active" : ""} onClick={() => setActiveTab("education")}>Education</button>
      </nav>
    );
  }
  