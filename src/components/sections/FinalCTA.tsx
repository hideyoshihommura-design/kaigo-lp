"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, Phone, Clock } from "lucide-react";
import { finalCtaData } from "@/data/content";

export function FinalCTA() {
  return (
    <>
      <div className="gradient-line" />
      <section id="download" className="section-padding bg-bg-gray">
        <div className="container-article">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border-card p-8 sm:p-12 text-center"
          >
            <h2 className="section-heading mb-6">
              {finalCtaData.headline.replace("\n", "")}
            </h2>

            <div className="gradient-line-thin w-20 mx-auto mb-6" />

            <p className="text-base text-text leading-[1.8] mb-10 max-w-xl mx-auto">
              {finalCtaData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#" className="btn-primary">
                {finalCtaData.primaryCta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://lin.ee/4V3MBVn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line"
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
                    className="flex items-center gap-2 text-text-muted text-xs sm:text-sm"
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
    </>
  );
}
