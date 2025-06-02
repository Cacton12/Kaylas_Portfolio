'use client';

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="bg-black text-green-100 border-b-2 p-6 pt-15 pb-15">
      <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
        {/* Left side - About Me and My Mission side by side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-2">
              About Me
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              I&apos;m <span className="text-green-400 font-semibold">Kayla</span>, a dedicated forestry student with a deep respect for the natural world. 
              My academic background and hands-on experiences have fueled a strong interest in sustainable forest management, ecological preservation, 
              and habitat restoration. I take pride in combining traditional knowledge with modern science to protect the diverse ecosystems we depend on.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              With a keen eye for identifying native species and a love for fieldwork, I thrive in environments where I can both learn and lead. 
              Through my studies and field experience, I’ve developed a solid foundation in forest ecology, silviculture, and environmental policy.
            </p>
          </motion.div>

          {/* My Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-2">
              My Mission
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              My mission is to support healthy forests through ethical stewardship and informed action. Whether I’m working on trail restoration, 
              contributing to biodiversity projects, or engaging with the community, I believe every step toward sustainability counts.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              I aim to be part of the next generation of forestry professionals who prioritize balance—between conservation and use, research and action, 
              and people and the planet.
            </p>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full"
        >
          <div className="overflow-hidden w-full h-full shadow-xl">
            <img
              src="/Images/lumber-84678.webp"
              alt="Kayla in the forest"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
