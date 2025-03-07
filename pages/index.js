"use client";

import { useState } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Footer from "../components/Footer";
import "../styles/global.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "about" && <About />}
      {activeTab === "projects" && <Projects />}
      {activeTab === "experience" && <Experience />}
      {activeTab === "education" && <Education />}
      <Footer />
    </div>
  );
}
