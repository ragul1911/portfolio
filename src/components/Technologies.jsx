import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3, FaJs, FaPython, FaNodeJs, FaGitAlt, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiFastapi, SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "SQL (Basic)"],
  },
  {
    title: "Frontend & UI",
    skills: ["React.js", "PyQt5", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend & AI",
    skills: ["FastAPI", "Node.js", "Express.js", "LLM APIs", "Vision AI", "RESTful APIs"],
  },
  {
    title: "Database & Tools",
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "Postman", "VS Code", "npm"],
  },
];

const Technologies = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Technologies &amp; <span className="text-neutral-500">Skills</span>
      </motion.h2>

      {/* Floating Animated Tech Icons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-16"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Python"
        >
          <FaPython className="text-6xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="JavaScript"
        >
          <FaJs className="text-6xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="React.js"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="FastAPI"
        >
          <SiFastapi className="text-6xl text-teal-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Node.js"
        >
          <FaNodeJs className="text-6xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Express.js"
        >
          <SiExpress className="text-6xl text-stone-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="MongoDB"
        >
          <SiMongodb className="text-6xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="MySQL"
        >
          <SiMysql className="text-6xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Tailwind CSS"
        >
          <SiTailwindcss className="text-6xl text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Git & GitHub"
        >
          <FaGitAlt className="text-6xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Postman"
        >
          <SiPostman className="text-6xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="HTML5"
        >
          <FaHtml5 className="text-6xl text-orange-500" />
        </motion.div>
      </motion.div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-purple-300 mb-4 border-b border-neutral-800 pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-lg bg-neutral-800/80 px-3 py-1 text-xs font-medium text-neutral-300 border border-neutral-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;