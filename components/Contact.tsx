"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      url: "mailto:aniketvis675@gmail.com",
      icon: "email",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      url: "https://github.com/aniketvishwakarma-11",
      icon: "github",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aniket-vishwakarma-bb1b922b5",
      icon: "linkedin",
      color: "hover:text-blue-500",
    },
  ];

  // GitHub Logo SVG
  const GitHubIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  // LinkedIn Logo SVG
  const LinkedInIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.652h3.554v1.366c.43-.664 1.202-1.61 2.923-1.61 2.136 0 3.74 1.393 3.74 4.385v5.511zM5.337 8.855c-1.144 0-1.915-.757-1.915-1.704 0-.951.768-1.703 1.96-1.703 1.189 0 1.914.752 1.939 1.703 0 .947-.751 1.704-1.984 1.704zm1.581 11.597H3.721V9.8h3.197v10.652zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>
  );

  // Email Icon (using lucide-react)
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "github":
        return <GitHubIcon />;
      case "linkedin":
        return <LinkedInIcon />;
      case "email":
        return <Mail size={24} />;
      default:
        return null;
    }
  };

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
            {socialLinks.map((link, index) => (
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
                {renderIcon(link.icon)}
              </motion.a>
            ))}
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
