"use client";

import { motion } from "framer-motion";
import { Video, Gift, ArrowRight } from "lucide-react";
import { seminarData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Seminar() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionTitle title={seminarData.sectionTitle} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border bg-white rounded-2xl p-6 sm:p-10 max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-5">
              <Video className="w-8 h-8 text-white" />
            </div>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-2">
              {seminarData.description}
            </p>
            <p className="text-sm text-muted">
              {seminarData.subDescription}
            </p>
          </div>

          <div className="bg-surface rounded-xl p-5 mb-8">
            <dl className="space-y-3">
              {seminarData.details.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4"
                >
                  <dt className="text-sm font-bold text-foreground w-24 flex-shrink-0">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-foreground/80">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex items-center gap-2 bg-accent-light rounded-xl p-4 mb-8">
            <Gift className="w-5 h-5 text-accent flex-shrink-0" />
            <p className="text-sm font-medium text-accent">
              参加者全員に「介護×AI活用ガイドブック」PDFプレゼント
            </p>
          </div>

          <div className="text-center">
            <a href="#download" className="btn-cta group">
              {seminarData.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
