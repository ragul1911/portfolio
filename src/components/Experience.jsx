import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mb-2 lg:mb-0"
            >
              <p className="text-sm font-semibold text-cyan-400">{experience.year}</p>
              {experience.location && (
                <p className="text-xs text-neutral-500 mt-1">{experience.location}</p>
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-2xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-lg">
                {experience.role} -{" "}
                <span className="text-sm font-medium text-purple-300">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 leading-relaxed font-light">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {experience.technologies.map((tech, tIndex) => (
                  <span
                    className="rounded bg-neutral-900 px-2.5 py-1 text-xs font-medium text-purple-400 border border-neutral-800"
                    key={tIndex}
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

export default Experience;