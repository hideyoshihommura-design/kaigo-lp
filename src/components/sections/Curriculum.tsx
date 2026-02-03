"use client";

import { motion } from "framer-motion";
import { curriculumData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Curriculum() {
  return (
    <section id="curriculum" className="section-padding bg-background">
      <div className="container-default">
        <SectionTitle title={curriculumData.sectionTitle} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto text-center mb-12 leading-relaxed"
        >
          {curriculumData.description}
        </motion.p>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {curriculumData.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-5 sm:gap-6 mb-8 last:mb-0"
              >
                {/* Number circle */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow z-10">
                  <span className="text-white font-bold text-lg sm:text-xl">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-border/30 flex-1 hover:shadow-glow transition-shadow">
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm sm:text-base text-muted mt-10 bg-surface rounded-xl p-4 max-w-2xl mx-auto"
        >
          {curriculumData.note}
        </motion.p>
      </div>
    </section>
  );
}
