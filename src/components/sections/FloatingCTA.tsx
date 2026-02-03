"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border shadow-2xl sm:hidden"
        >
          <div className="flex gap-2 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
            <a
              href="#download"
              className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-accent text-white font-bold rounded-2xl text-sm shadow-lg"
            >
              資料ダウンロード
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
            <a
              href="https://lin.ee/4V3MBVn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3 bg-[#06C755] text-white font-bold rounded-2xl text-sm shadow-lg"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              LINE
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
