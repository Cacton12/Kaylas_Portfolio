// src/components/Experience.tsx

"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Forestry Technician Intern",
      organization: "City of Fredericton Parks & Trees – Fredericton, NB",
      date: "Summer 2023",
      duties: [
        "Conducted tree assessments, pruning, and removals using safe work practices",
        "Operated brush saws, pole saws, and one-ton trucks with trailers",
        "Worked closely with the public, building strong communication skills",
        "Maintained urban forest health by identifying diseases and invasive species",
      ],
    },
    {
      title: "Grounds Crew Member",
      organization: "University of New Brunswick – Fredericton, NB",
      date: "Summer 2022",
      duties: [
        "Mowed, trimmed, and maintained large outdoor areas to high standards",
        "Supported landscaping and tree-care efforts across campus grounds",
        "Developed time management skills while working independently and in teams",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-black text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-green-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="relative border-l-4 border-green-700 pl-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              className="mb-12 relative"
            >
              <motion.div
                className="w-3 h-3 rounded-full absolute -left-1 top-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-green-400 mt-1">{exp.organization}</p>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <motion.ul
                className="list-disc list-inside mt-4 space-y-2 text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.3 + 0.2, duration: 0.5 }}
              >
                {exp.duties.map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
