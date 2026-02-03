"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { solutionData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Solution() {
  return (
    <>
      {/* Gradient divider */}
      <div className="gradient-line" />

      <section className="section-padding bg-bg-gray">
        <div className="container-article">
          <SectionTitle title={solutionData.sectionTitle} />

          <div className="max-w-2xl mx-auto text-center">
            {solutionData.description.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-base text-text leading-[1.8] mb-4"
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8 mb-10 justify-center"
            >
              {solutionData.features.map((feature, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-btn text-sm font-medium text-text shadow-card"
                >
                  <Check className="w-4 h-4 text-primary" />
                  {feature}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#download" className="btn-primary !whitespace-normal">
                無料で資料をダウンロードする
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
