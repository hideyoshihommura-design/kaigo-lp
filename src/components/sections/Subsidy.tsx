"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, BadgePercent } from "lucide-react";
import { subsidyData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Subsidy() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle
          title={subsidyData.sectionTitle}
          subtitle={subsidyData.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          {/* Normal price */}
          <div className="bg-surface rounded-2xl p-6 text-center mb-4">
            <p className="text-sm text-muted mb-2">通常料金（4名分）</p>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">
              {subsidyData.comparison.normal.total}
            </p>
            <p className="text-sm text-muted mt-1">
              1名あたり {subsidyData.comparison.normal.perPerson}
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-4">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-glow-accent">
              <ArrowDown className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Subsidy price */}
          <div className="gradient-border bg-white rounded-2xl p-6 text-center">
            <div className="inline-flex items-center gap-2 bg-accent text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              <BadgePercent className="w-4 h-4" />
              助成金適用で最大75%OFF
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-accent mb-1">
              {subsidyData.comparison.withSubsidy.total}
            </p>
            <p className="text-sm text-muted mt-1">
              1名あたり{" "}
              <span className="font-bold text-accent">
                {subsidyData.comparison.withSubsidy.perPerson}
              </span>
            </p>
          </div>

          <p className="text-xs text-muted text-center mt-4">
            {subsidyData.note}
          </p>

          <p className="text-sm sm:text-base text-foreground/80 text-center mt-6 leading-relaxed">
            {subsidyData.description}
          </p>

          <div className="text-center mt-8">
            <a href="#download" className="btn-primary group">
              助成金の詳細を資料で確認する
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
