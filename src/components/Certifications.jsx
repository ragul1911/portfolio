import { CERTIFICATIONS } from "../constants";
import { motion } from "motion/react";
import { FaAward } from "react-icons/fa";

const Certifications = () => {
  return (
    <div id="certifications" className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:bg-neutral-900/60"
          >
            <div className="rounded-xl border border-neutral-700 bg-neutral-800/90 p-3 text-xl text-yellow-400 flex-shrink-0">
              <FaAward />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400">
                {cert.category}
              </span>
              <h3 className="text-base font-semibold text-neutral-100 mt-1">
                {cert.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-2 font-medium">
                Issued by: <span className="text-neutral-200">{cert.issuer}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
