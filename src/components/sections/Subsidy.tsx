"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { subsidyData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Subsidy() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-article">
        <SectionTitle
          title={subsidyData.sectionTitle}
          subtitle={subsidyData.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          {/* Normal price */}
          <div className="bg-white rounded-card p-6 text-center shadow-card mb-4">
            <p className="text-sm text-text-muted mb-2">通常料金（4名分）</p>
            <p className="text-2xl sm:text-3xl font-bold text-text">
              {subsidyData.comparison.normal.total}
            </p>
            <p className="text-sm text-text-muted mt-1">
              1名あたり {subsidyData.comparison.normal.perPerson}
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(91deg, #D84D6E -8.2%, #0D83F5 115.17%)" }}
            >
              <ArrowDown className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Subsidy price */}
          <div className="gradient-border-card p-6 text-center">
            <span
              className="inline-block text-white text-sm font-bold px-4 py-1.5 rounded-btn mb-4"
              style={{ background: "linear-gradient(91deg, #D84D6E -8.2%, #0D83F5 115.17%)" }}
            >
              助成金適用で最大75%OFF
            </span>
            <p className="text-2xl sm:text-4xl font-bold gradient-text mb-1">
              {subsidyData.comparison.withSubsidy.total}
            </p>
            <p className="text-sm text-text-muted mt-1">
              1名あたり{" "}
              <span className="font-bold text-accent-pink">
                {subsidyData.comparison.withSubsidy.perPerson}
              </span>
            </p>
          </div>

          <p className="text-xs text-text-muted text-center mt-4">
            {subsidyData.note}
          </p>

          <p className="text-sm text-text text-center mt-6 leading-[1.8]">
            {subsidyData.description}
          </p>

          <div className="text-center mt-8">
            <a href="#download" className="btn-primary !whitespace-normal">
              助成金の詳細を資料で確認する
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
