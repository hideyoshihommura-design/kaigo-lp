"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { headerData } from "@/data/content";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-default flex items-center justify-between h-16 sm:h-20">
        <a
          href="#"
          className={`font-bold text-sm sm:text-lg transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
        >
          {headerData.logo}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {headerData.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href={headerData.cta.href} className="btn-primary text-sm py-2.5 px-6">
            {headerData.cta.label}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`lg:hidden p-2 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
          aria-label="メニュー"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <nav className="container-default py-4 flex flex-col gap-3">
              {headerData.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-foreground font-medium py-2 border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={headerData.cta.href}
                onClick={() => setIsMobileOpen(false)}
                className="btn-primary text-sm text-center mt-2"
              >
                {headerData.cta.label}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
