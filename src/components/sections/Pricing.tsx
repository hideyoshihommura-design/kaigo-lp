"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { pricingData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Badge } from "@/components/shared/Badge";

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gradient-light">
      <div className="container-default">
        <SectionTitle title={pricingData.sectionTitle} />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {pricingData.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-glow-lg transition-all duration-300 ${
                plan.recommended ? "ring-2 ring-accent" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="gradient" size="sm" className="bg-gradient-accent shadow-glow-accent">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {plan.recommended && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    おすすめ
                  </span>
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted mb-6">{plan.target}</p>

              {/* Price */}
              <div className="bg-surface rounded-xl p-4 mb-6">
                {plan.price.enrollment && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted">入学金</span>
                    <span className="text-lg font-bold text-foreground">
                      {plan.price.enrollment}
                    </span>
                  </div>
                )}
                {plan.price.monthly && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">月額受講料</span>
                    <span className="text-lg font-bold text-foreground">
                      {plan.price.monthly}
                    </span>
                  </div>
                )}
                {plan.price.annual && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted">年額受講料</span>
                    <span className="text-lg font-bold text-foreground">
                      {plan.price.annual}
                    </span>
                  </div>
                )}
                {plan.price.withSubsidy && (
                  <div className="flex justify-between items-center pt-2 border-t border-border/50">
                    <span className="text-sm font-medium text-accent">助成金適用後</span>
                    <span className="text-lg font-bold text-accent">
                      {plan.price.withSubsidy}
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`w-full text-center ${
                  plan.recommended ? "btn-cta" : "btn-secondary"
                } group`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
