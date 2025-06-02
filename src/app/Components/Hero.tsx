"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="relative h-screen flex items-center justify-center px-4 pt-24 text-center text-white overflow-hidden"
    id="home"
    >
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
         <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(/Images/aerial-view-2604483.webp)`,
            }}>
          </div>
        {/* Optional: add a dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Foreground content */}
        <motion.div
        className="relative z-10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
        <h2 className="text-5xl md:text-7xl mb-6">
            Hello, I’m <span className="text-green-500">Kayla Richard</span>
        </h2>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto text-white">
            As a dedicated forestry student, I’m committed to protecting our natural landscapes and advancing sustainable practices that nurture the environment. Exploring the wilderness and understanding ecosystems fuels my passion every day.
        </p>
        </motion.div>

    </section>
  );
}
