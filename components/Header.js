import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        {/* Logo Container for Responsive Scaling */}
        <div className="logo-container">
          <Image 
            src="/danny-anderson-logo.svg" 
            alt="Danny Anderson Logo" 
            layout="intrinsic" /* Allows scaling */
            width={250} /* Default width */
            height={80} /* Default height */
            priority 
          />
        </div>
      </div>

      <p>Innovative Data Engineer & Architect | Problem Solver | Builder of Scalable Solutions</p>

      <div className="icons">
        <Link href="https://www.linkedin.com/in/daniel-anderson-52109721" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </Link>
        <Link href="https://github.com/gaandus" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </Link>
      </div>
    </header>
  );
}
