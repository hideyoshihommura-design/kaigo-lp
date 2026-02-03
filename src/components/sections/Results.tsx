"use client";

import { motion } from "framer-motion";
import { TrendingDown, ArrowRight } from "lucide-react";
import { resultsData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Results() {
  return (
    <section className="section-padding bg-gradient-dark text-white">
      <div className="container-default">
        <SectionTitle
          title={resultsData.sectionTitle}
          subtitle={resultsData.subtitle}
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultsData.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-6 h-6 text-accent-light" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-accent-light font-medium mb-2">
                {metric.suffix}
              </div>
              <div className="text-sm text-white/60">{metric.label}</div>
              {metric.before && metric.after && (
                <div className="text-xs text-white/40 mt-2">
                  {metric.before} → {metric.after}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="#download" className="btn-cta group">
            導入事例をもっと見る
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
