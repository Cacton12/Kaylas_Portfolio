"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Socials = [
  {
    title: "LinkedIn",
    url: "https://ca.linkedin.com/",
    src: "/icons8-linkedin.svg",
  },
  // You can add more socials here
];

export default function ContactMe() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6 md:px-20 border-b-2">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-green-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I'd love to connect! Whether it's about tech, projects, or opportunities — feel free to reach out.
        </motion.p>

        <motion.a
          href="mailto:kaylajricahrd@gmail.com"
          className="inline-block text-xl text-white underline mb-6 hover:text-green-500 transition"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          kaylajricahrd@gmail.com
        </motion.a>

        <div className="flex justify-center gap-8 mb-12">
          {Socials.map((soc, i) => (
            <motion.a
              key={soc.title}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
            >
              <img src={soc.src} alt={`${soc.title} Logo`} className="w-12 h-12" />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Download className="w-5 h-5" />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
