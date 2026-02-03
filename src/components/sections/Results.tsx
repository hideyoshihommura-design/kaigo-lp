"use client";

import { motion } from "framer-motion";
import { TrendingDown } from "lucide-react";
import { resultsData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Results() {
  return (
    <>
      <div className="gradient-line" />
      <section className="section-padding bg-bg-gray">
        <div className="container-default">
          <SectionTitle
            title={resultsData.sectionTitle}
            subtitle={resultsData.subtitle}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resultsData.metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-card p-6 text-center shadow-card"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-accent-pink mb-2">
                  {metric.suffix}
                </div>
                <div className="text-xs text-text-muted">{metric.label}</div>
                {metric.before && metric.after && (
                  <div className="text-xs text-text-muted mt-1 pt-1 border-t border-gray-100">
                    {metric.before} → {metric.after}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
