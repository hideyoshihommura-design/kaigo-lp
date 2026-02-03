"use client";

import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import { testimonialsData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-light">
      <div className="container-default">
        <SectionTitle title={testimonialsData.sectionTitle} />

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-glow-lg transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 leading-snug">
                {testimonial.quote}
              </h3>
              <p className="text-sm text-muted leading-relaxed flex-1 mb-6">
                {testimonial.detail}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
