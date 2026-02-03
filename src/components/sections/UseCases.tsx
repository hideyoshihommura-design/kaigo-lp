"use client";

import { motion } from "framer-motion";
import { Building2, ClipboardList, Users, Clock } from "lucide-react";
import { useCasesData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

const iconMap = { Building2, ClipboardList, Users };

export function UseCases() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-default">
        <SectionTitle
          title={useCasesData.sectionTitle}
          subtitle="介護現場の3つの職種で、AIがどう役立つかをご紹介します"
        />

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {useCasesData.cases.map((useCase, i) => {
            const Icon = iconMap[useCase.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="gradient-border-card overflow-hidden"
              >
                {/* Image area */}
                <div className="aspect-[16/9] bg-bg-gray flex items-center justify-center">
                  <Icon className="w-16 h-16 text-primary/20" />
                </div>

                <div className="p-6">
                  {/* Role badge */}
                  <span className="inline-block text-xs font-bold text-white bg-primary px-3 py-1 rounded mb-3">
                    {useCase.role}
                  </span>

                  <h3 className="text-lg font-bold text-text mb-4">
                    {useCase.headline}
                  </h3>

                  <ul className="space-y-2.5 mb-5">
                    {useCase.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-light">
                        <Clock className="w-4 h-4 text-accent-pink flex-shrink-0 mt-0.5" />
                        <span>
                          {benefit.text}
                          {"before" in benefit && "after" in benefit && (
                            <>
                              <span className="line-through text-text-muted mx-1">
                                {benefit.before}
                              </span>
                              <span className="font-bold gradient-text mx-1">
                                → {benefit.after}
                              </span>
                              {"suffix" in benefit && benefit.suffix}
                            </>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Quote */}
                  <div className="bg-bg-gray rounded-lg p-3 border-l-4 border-primary">
                    <p className="text-xs text-text-light italic leading-relaxed">
                      「{useCase.quote}」
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a href="#download" className="btn-primary !whitespace-normal">
            職種別の活用事例を資料で見る
          </a>
        </div>
      </div>
    </section>
  );
}
