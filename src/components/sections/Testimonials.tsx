"use client";

import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import { testimonialsData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Testimonials() {
  return (
    <>
      <div className="gradient-line" />
      <section id="testimonials" className="section-padding bg-bg-gray">
        <div className="container-default">
          <SectionTitle title={testimonialsData.sectionTitle} />

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="gradient-border-card p-6 sm:p-8 flex flex-col"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <h3 className="text-sm sm:text-base font-bold text-text mb-3 leading-[1.6]">
                  {testimonial.quote}
                </h3>
                <p className="text-[0.8rem] sm:text-sm text-text-light leading-[1.8] flex-1 mb-6">
                  {testimonial.detail}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(91deg, #D84D6E -8.2%, #0D83F5 115.17%)" }}
                  >
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text">{testimonial.name}</p>
                    <p className="text-xs text-text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
