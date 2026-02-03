"use client";

import { motion } from "framer-motion";
import { GraduationCap, Monitor, MessageCircle, BadgePercent } from "lucide-react";
import { featuresData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

const iconMap = { GraduationCap, Monitor, MessageCircle, BadgePercent };

export function Features() {
  return (
    <>
      <div className="gradient-line" />
      <section id="features" className="section-padding bg-bg-gray">
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
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="gradient-border-card p-6 sm:p-8 hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(91deg, #D84D6E -8.2%, #0D83F5 115.17%)" }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-text mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-text-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
