import { EDUCATION } from "../constants";
import { motion } from "motion/react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div id="education" className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Education
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 backdrop-blur-sm shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-3 text-2xl text-cyan-400">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-100">
                  {edu.institution}
                </h3>
                <p className="text-sm text-purple-300 font-medium mt-1">
                  {edu.degree}
                </p>
                <p className="text-xs text-neutral-400 mt-1">{edu.location}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <span className="inline-block rounded-full bg-cyan-950/80 border border-cyan-500/40 px-3.5 py-1 text-xs font-mono text-cyan-300">
                {edu.duration}
              </span>
              <p className="text-sm font-semibold text-neutral-200 mt-2">
                {edu.score}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
