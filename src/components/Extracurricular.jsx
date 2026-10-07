import { EXTRACURRICULARS } from "../constants";
import { motion } from "motion/react";
import { FaUsers, FaLightbulb, FaCalendarCheck } from "react-icons/fa";

const icons = [FaUsers, FaLightbulb, FaCalendarCheck];

const Extracurricular = () => {
  return (
    <div id="extracurricular" className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Leadership &amp; <span className="text-neutral-500">Extracurriculars</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {EXTRACURRICULARS.map((item, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="rounded-xl border border-neutral-700 bg-neutral-800/80 p-3 text-xl text-cyan-400 w-fit mb-4">
                  <IconComponent />
                </div>
                <h3 className="text-lg font-semibold text-neutral-100">
                  {item.role}
                </h3>
                <p className="text-xs text-purple-300 font-medium mb-3">
                  {item.organization}
                </p>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Extracurricular;
