import { footerData } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-10 pb-28 sm:pb-10">
      <div className="container-default">
        <div className="text-center mb-6">
          <p className="text-base font-bold mb-4">{footerData.company}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerData.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-xs sm:text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="text-xs text-white/30 text-center">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}
