import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Featured <span className="text-neutral-500">Projects</span>
      </motion.h2>

      <div className="space-y-16">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center items-center gap-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3"
            >
              <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-2xl lg:w-7/12"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold text-neutral-100">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
                  >
                    <FaGithub /> GitHub <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
              <p className="mb-4 text-neutral-400 font-light leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded bg-neutral-900 px-2.5 py-1 text-xs font-medium text-purple-400 border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;