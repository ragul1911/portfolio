import { HERO_CONTENT } from "../constants/index.js";
import heroVisual from "../assets/hero-tech.jpg";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ragul M
            </motion.h1>
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent font-medium"
            >
              Computer Science Engineering Student
            </motion.span>
            <motion.span
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="text-cyan-400 text-lg tracking-wide mt-2 font-mono"
            >
              Full Stack Developer | AI &amp; Backend Enthusiast
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight text-neutral-300 leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.3)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 mb-10"
            >
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Ragul-M-Resume.pdf"
                className="bg-white rounded-full px-6 py-3 text-sm font-semibold text-stone-900 shadow-md transition-all duration-300 hover:bg-neutral-200 hover:scale-105"
              >
                My Resume
              </a>
              <a
                href="#contact"
                className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              src={heroVisual}
              alt="Ragul M - Full Stack Developer Visual"
              className="rounded-3xl border border-neutral-800 shadow-2xl shadow-purple-950/30 max-w-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;