"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { heroData } from "@/data/content";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/kaigo-lp/images/hero-bg.jpg)",
          backgroundColor: "#4a5568",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container-default relative z-10 py-16 sm:py-20">
        {/* Mobile: center, Desktop: right-aligned */}
        <div className="max-w-2xl mx-auto sm:ml-auto sm:mr-0 text-center sm:text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary text-white text-xs sm:text-sm font-bold px-4 py-2 rounded mb-4 sm:mb-6">
              {heroData.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight mb-4 sm:mb-6"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}
          >
            「ホリエモンAI学校 介護校」は、
            <br className="hidden sm:block" />
            <span className="text-yellow-300">介護業界に特化</span>した
            <br className="hidden sm:block" />
            AI活用スクールです。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.3)" }}
          >
            {heroData.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-end"
          >
            <a href={heroData.ctaLinks.download} className="btn-primary !px-6 sm:!px-14 !text-sm sm:!text-base">
              {heroData.primaryCta}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href={heroData.ctaLinks.line}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line !px-6 sm:!px-10 !text-sm sm:!text-base"
            >
              <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              {heroData.secondaryCta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
