'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import Modal from './Smallstuff/modal';

interface Project {
  title: string;
  description: string; // short summary, for modal
  details: string;     // longer details, for cards
  image: string;
}

const projects: Project[] = [
  {
    title: 'Forest Health Monitor',
    description:
      'This project uses satellite imagery and sensor data to provide forest managers with timely health reports and alerts about potential issues like pest outbreaks or drought stress.',
    details: 'A web app to track forest health metrics using remote sensing data.',
    image: '/Images/timber-harvester-3790865.jpg',
  },
  {
    title: 'Biodiversity Tracker',
    description:
      'A user-friendly mobile app designed for citizen scientists to easily log and track species sightings, contributing to a growing database for biodiversity research.',
    details: 'Mobile app for citizen scientists to log species sightings.',
    image: '/Images/forestry-6596153.jpg',
  },
  {
    title: 'Trail Restoration Planner',
    description:
      'This tool helps conservationists plan restoration projects by visualizing trail conditions, mapping repair tasks, and estimating resource needs.',
    details: 'Tool to plan and visualize restoration projects on hiking trails.',
    image: '/Images/forest-5441466.jpg',
  },
];


export default function ProjectsTiltFade() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="max-w-5xl mx-auto mt-12 px-4 flex flex-col gap-10 bg-black rounded-xl pb-10 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-white">
        My <span className="text-green-600">Projects</span>
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className={`relative rounded-2xl border-4 cursor-pointer shadow-lg overflow-hidden h-72 flex items-end ${
              projects.length % 2 !== 0 && i === projects.length - 1 ? 'md:col-span-2' : ''
            }`}
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            custom={i}
            whileHover={{
              rotateX: 5,
              rotateY: 10,
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            onClick={() => handleOpenModal(project)}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>

            {/* Overlay Content: show details here */}
            <div className="relative z-10 bg-black/60 backdrop-blur-md p-4 w-full">
              <h3 className="text-2xl font-bold text-white m-0">{project.title}</h3>
              <p className="mt-2 text-white text-sm leading-relaxed">{project.details}</p> {/* details */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedProject.title}
        >
          <div className="text-center p-4">
            <p className="text-sm mb-4">{selectedProject.description}</p> {/* description */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="rounded-lg w-full max-h-[300px] object-cover mx-auto"
            />
          </div>
        </Modal>
      )}
    </section>
  );
}

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.9,
    rotateX: 10,
    rotateY: -10,
  },
  onscreen: (i) => ({
    opacity: 1,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring',
      stiffness: 80,
      damping: 12,
    },
  }),
};
