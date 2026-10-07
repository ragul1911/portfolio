import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { CONTACT } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a 
          href="#"
          className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent font-mono transition-transform duration-300 hover:scale-105"
        >
          &lt;RAGUL/&gt;
        </a>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
        <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
      <div className="flex items-center justify-center gap-5 text-2xl">
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="hover:text-pink-400 transition-colors"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;