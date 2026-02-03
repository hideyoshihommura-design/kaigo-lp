"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { headerData } from "@/data/content";

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-gray-100">
      <div className="container-default flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="font-bold text-sm sm:text-base text-text">
          {headerData.logo}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {headerData.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-text hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href={headerData.cta.href} className="btn-primary text-sm !py-2.5 !px-8">
            {headerData.cta.label}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-text"
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
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <nav className="container-default py-4 flex flex-col gap-1">
              {headerData.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-text py-3 border-b border-gray-50 text-sm"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={headerData.cta.href}
                onClick={() => setIsMobileOpen(false)}
                className="btn-primary text-sm text-center mt-3"
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
