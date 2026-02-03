"use client";

import { motion } from "framer-motion";
import { curriculumData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Curriculum() {
  return (
    <section id="curriculum" className="section-padding bg-bg">
      <div className="container-article">
        <SectionTitle title={curriculumData.sectionTitle} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base text-text max-w-2xl mx-auto text-center mb-12 leading-[1.8]"
        >
          {curriculumData.description}
        </motion.p>

        {/* Steps */}
        <div className="max-w-2xl mx-auto">
          {curriculumData.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 sm:gap-5 mb-6 last:mb-0"
            >
              {/* Number */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(91deg, #D84D6E -8.2%, #0D83F5 115.17%)" }}
              >
                <span className="text-white font-bold text-lg sm:text-xl">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="bg-white rounded-card p-4 sm:p-5 shadow-card flex-1">
                <h3 className="text-sm sm:text-lg font-bold text-text mb-1">
                  {step.title}
                </h3>
                <p className="text-[0.8rem] sm:text-sm text-text-light leading-[1.6]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 bg-white rounded-card p-5 shadow-card max-w-2xl mx-auto"
        >
          <p className="text-sm text-text-light">{curriculumData.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
