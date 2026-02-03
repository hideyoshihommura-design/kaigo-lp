"use client";

import { motion } from "framer-motion";
import { GraduationCap, Monitor, MessageCircle, BadgePercent } from "lucide-react";
import { featuresData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

const iconMap = {
  GraduationCap,
  Monitor,
  MessageCircle,
  BadgePercent,
};

export function Features() {
  return (
    <section id="features" className="section-padding bg-gradient-light">
      <div className="container-default">
        <SectionTitle title={featuresData.sectionTitle} />

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {featuresData.features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-glow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
