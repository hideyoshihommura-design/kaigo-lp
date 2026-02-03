"use client";

import { motion } from "framer-motion";
import { Users, ClipboardList, UserCog } from "lucide-react";
import { problemsData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

const iconMap = { Users, ClipboardList, UserCog };

export function Problems() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-default">
        <SectionTitle title={problemsData.sectionTitle} />

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {problemsData.problems.map((problem, i) => {
            const Icon = iconMap[problem.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="gradient-border-card p-6 sm:p-8"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-base sm:text-lg text-text font-medium max-w-2xl mx-auto leading-relaxed">
            {problemsData.transition}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
