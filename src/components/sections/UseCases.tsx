"use client";

import { motion } from "framer-motion";
import { Building2, ClipboardList, Users, ArrowRight, Clock } from "lucide-react";
import { useCasesData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

const iconMap = {
  Building2,
  ClipboardList,
  Users,
};

export function UseCases() {
  return (
    <section className="section-padding bg-background">
      <div className="container-default">
        <SectionTitle title={useCasesData.sectionTitle} />

        <div className="space-y-8 sm:space-y-12">
          {useCasesData.cases.map((useCase, i) => {
            const Icon = iconMap[useCase.icon];
            const isEven = i % 2 === 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="gradient-border bg-white p-6 sm:p-8 lg:p-10"
              >
                <div className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-bold text-primary bg-primary-light px-3 py-1 rounded-full">
                        {useCase.role}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-5">
                      {useCase.headline}
                    </h3>

                    <ul className="space-y-3 mb-6">
                      {useCase.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-light flex-shrink-0 flex items-center justify-center mt-0.5">
                            <Clock className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-sm sm:text-base text-foreground/80">
                            {benefit.text}
                            {"before" in benefit && "after" in benefit && (
                              <>
                                <span className="line-through text-muted mx-1">
                                  {benefit.before}
                                </span>
                                <span className="font-bold text-accent mx-1">
                                  → {benefit.after}
                                </span>
                                {"suffix" in benefit && benefit.suffix}
                              </>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-surface rounded-xl p-4 border-l-4 border-primary">
                      <p className="text-sm sm:text-base text-foreground/70 italic">
                        「{useCase.quote}」
                      </p>
                    </div>
                  </div>

                  {/* Image placeholder */}
                  <div className="lg:w-[300px] flex-shrink-0">
                    <div className="w-full aspect-[4/3] bg-gradient-light rounded-2xl flex items-center justify-center">
                      <Icon className="w-16 h-16 text-primary/30" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="#download" className="btn-primary group">
            自分の職種でどう活用できるか、資料で詳しく見る
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
