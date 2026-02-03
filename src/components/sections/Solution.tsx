"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { solutionData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Solution() {
  return (
    <section className="section-padding bg-gradient-light">
      <div className="container-narrow">
        <SectionTitle title={solutionData.sectionTitle} />

        <div className="max-w-2xl mx-auto">
          {solutionData.description.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4"
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mt-8 mb-10 justify-center"
          >
            {solutionData.features.map((feature, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-primary shadow-sm"
              >
                <Check className="w-4 h-4" />
                {feature}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <a href="#download" className="btn-primary group">
              無料で資料をダウンロードする
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
