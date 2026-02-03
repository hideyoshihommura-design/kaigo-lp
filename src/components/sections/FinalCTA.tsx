"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, Phone, Clock } from "lucide-react";
import { finalCtaData } from "@/data/content";

export function FinalCTA() {
  return (
    <section id="download" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 whitespace-pre-line leading-tight">
            {finalCtaData.headline}
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            {finalCtaData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#"
              className="btn-cta group"
            >
              {finalCtaData.primaryCta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://lin.ee/4V3MBVn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line group"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              {finalCtaData.secondaryCta}
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {finalCtaData.trust.map((item, i) => {
              const icons = [Clock, Phone, Shield];
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 text-white/50 text-xs sm:text-sm"
                >
                  <Icon className="w-4 h-4" />
                  {item}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
