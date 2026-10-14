"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Mail, MessageSquare } from "lucide-react";

const LINKEDIN = "https://www.linkedin.com/in/aniket-vishwakarma-bb1b922b5";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.652h3.554v1.366c.43-.664 1.202-1.61 2.923-1.61 2.136 0 3.74 1.393 3.74 4.385v5.511zM5.337 8.855c-1.144 0-1.915-.757-1.915-1.704 0-.951.768-1.703 1.96-1.703 1.189 0 1.914.752 1.939 1.703 0 .947-.751 1.704-1.984 1.704zm1.581 11.597H3.721V9.8h3.197v10.652zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

/** Sticky bottom bar on phones: always-reachable contact actions. */
export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const [blocked, setBlocked] = useState(false);

  // Show after the hero has scrolled away
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide while a modal or the mobile menu has locked body scrolling
  useEffect(() => {
    const check = () => setBlocked(document.body.style.overflow === "hidden");
    const observer = new MutationObserver(check);
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });
    check();
    return () => observer.disconnect();
  }, []);

  const show = visible && !blocked;
  const itemClass =
    "flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium text-slate-300 active:text-cyan-300";

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          aria-label="Quick actions"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 300 }}
          className="md:hidden fixed bottom-0 inset-x-0 z-40 flex items-stretch border-t border-white/10 bg-[#070b14]/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
        >
          <button
            className={itemClass}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MessageSquare size={18} />
            Contact
          </button>
          <a className={itemClass} href="mailto:aniketvis675@gmail.com">
            <Mail size={18} />
            Email
          </a>
          <a className={itemClass} href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            LinkedIn
          </a>
          <button className={itemClass} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <ArrowUp size={18} />
            Top
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
