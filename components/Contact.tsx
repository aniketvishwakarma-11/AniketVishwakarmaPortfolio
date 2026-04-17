"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Briefcase } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      url: "mailto:aniketvis675@gmail.com",
      icon: Mail,
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      url: "https://github.com/aniketvishwakarma-11",
      icon: Code2,
      color: "hover:text-cyan-400",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aniket-vishwakarma-bb1b922b5",
      icon: Briefcase,
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out through any of these channels!
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 sm:p-12 text-center hover:border-cyan-500/60 transition-all"
        >
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-gray-400 text-xs sm:text-sm mb-2">Drop me an email</p>
            <a
              href="mailto:aniketvis675@gmail.com"
              className="text-lg sm:text-2xl md:text-3xl font-bold gradient-text hover:opacity-80 transition-opacity break-words"
            >
              aniketvis675@gmail.com
            </a>
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 sm:mb-12"></div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 sm:gap-8 flex-wrap"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 sm:p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-full ${link.color} transition-colors`}
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm mt-12"
          >
            Let's build something amazing together! 🚀
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
