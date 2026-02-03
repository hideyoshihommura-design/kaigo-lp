"use client";

import { motion } from "framer-motion";
import { Users, ClipboardList, UserCog } from "lucide-react";
import { problemsData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

const iconMap = {
  Users,
  ClipboardList,
  UserCog,
};

export function Problems() {
  return (
    <section className="section-padding bg-background">
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
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-border/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-base sm:text-lg text-foreground font-medium max-w-2xl mx-auto"
        >
          {problemsData.transition}
        </motion.p>
      </div>
    </section>
  );
}
