import { CONTACT } from "../constants";
import { motion } from "motion/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-light"
      >
        Get in <span className="text-neutral-500">Touch</span>
      </motion.h2>

      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-neutral-300"
        >
          {CONTACT.address}
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="my-6 flex justify-center items-center gap-6 text-2xl"
        >
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
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b border-cyan-400/50 pb-0.5 text-cyan-300 hover:text-cyan-100 hover:border-cyan-300 transition-colors text-lg"
          >
            {CONTACT.email}
          </a>
        </motion.div>

        <p className="mt-16 text-xs text-neutral-600 font-mono">
          &copy; {new Date().getFullYear()} Ragul M. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default Contact;