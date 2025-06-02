// src/components/Education.tsx

"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-green-500">
          Education
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-neutral-900 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-semibold">Diploma in Forest Technology</h3>
          <p className="text-green-400 mt-1">New Brunswick Community College (NBCC) – Miramichi, NB</p>
          <p className="text-sm text-neutral-400">Graduated: June 2024</p>

          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
            <li>Sustainable forest management, GIS mapping, and silviculture</li>
            <li>Fieldwork in timber cruising, forest measurements, and eco-classification</li>
            <li>Collaborated on local conservation projects</li>
            <li>Certified in WHMIS, Chainsaw Safety, and Wilderness First Aid</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
