"use client";

import { motion } from "framer-motion";
import { Video, Gift, ArrowRight } from "lucide-react";
import { seminarData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Seminar() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-article">
        <SectionTitle title={seminarData.sectionTitle} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border-card p-6 sm:p-10 max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: "linear-gradient(91deg, #D84D6E -8.2%, #0D83F5 115.17%)" }}
            >
              <Video className="w-8 h-8 text-white" />
            </div>
            <p className="text-base text-text leading-[1.8] mb-2">
              {seminarData.description}
            </p>
            <p className="text-sm text-text-light">
              {seminarData.subDescription}
            </p>
          </div>

          <div className="bg-bg-gray rounded-xl p-5 mb-8">
            <dl className="space-y-3">
              {seminarData.details.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4"
                >
                  <dt className="text-sm font-bold text-text w-24 flex-shrink-0">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-text-light">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex items-center gap-2 rounded-xl p-4 mb-8"
            style={{ background: "rgba(216, 77, 110, 0.08)" }}
          >
            <Gift className="w-5 h-5 text-accent-pink flex-shrink-0" />
            <p className="text-sm font-medium text-accent-pink">
              参加者全員に「介護×AI活用ガイドブック」PDFプレゼント
            </p>
          </div>

          <div className="text-center">
            <a href="#download" className="btn-primary">
              {seminarData.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
