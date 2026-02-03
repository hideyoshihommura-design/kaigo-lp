"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { pricingData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Pricing() {
  return (
    <>
      <div className="gradient-line" />
      <section id="pricing" className="section-padding bg-bg-gray">
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
                className={`gradient-border-card p-6 sm:p-8 ${
                  plan.recommended ? "ring-2 ring-accent-pink" : ""
                }`}
              >
                {plan.recommended && (
                  <div className="text-center mb-4">
                    <span
                      className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-btn"
                      style={{ background: "linear-gradient(91deg, #D84D6E -8.2%, #0D83F5 115.17%)" }}
                    >
                      おすすめ
                    </span>
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-bold text-text mb-1 text-center">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-muted mb-6 text-center">{plan.target}</p>

                {/* Price */}
                <div className="bg-bg-gray rounded-xl p-4 mb-6">
                  {plan.price.enrollment && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-text-muted">入学金</span>
                      <span className="text-lg font-bold text-text">
                        {plan.price.enrollment}
                      </span>
                    </div>
                  )}
                  {plan.price.monthly && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-muted">月額受講料</span>
                      <span className="text-lg font-bold text-text">
                        {plan.price.monthly}
                      </span>
                    </div>
                  )}
                  {plan.price.annual && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-text-muted">年額受講料</span>
                      <span className="text-lg font-bold text-text">
                        {plan.price.annual}
                      </span>
                    </div>
                  )}
                  {plan.price.withSubsidy && (
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <span className="text-sm font-medium text-accent-pink">助成金適用後</span>
                      <span className="text-lg font-bold text-accent-pink">
                        {plan.price.withSubsidy}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <a
                    href="#download"
                    className={`${plan.recommended ? "btn-primary" : "btn-outline"} w-full !whitespace-normal text-center !text-xs sm:!text-sm`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
