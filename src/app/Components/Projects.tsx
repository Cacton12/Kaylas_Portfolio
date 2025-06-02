'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './Smallstuff/modal';

interface Project {
  title: string;
  description: string;
  details: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Forest Health Monitor',
    description: 'This project uses satellite imagery and sensor data to provide forest managers with timely health reports and alerts about potential issues like pest outbreaks or drought stress.',
    details: 'A web app to track forest health metrics using remote sensing data.',
    image: '/Images/timber-harvester-3790865.webp',
  },
  {
    title: 'Biodiversity Tracker',
    description: 'A user-friendly mobile app designed for citizen scientists to easily log and track species sightings, contributing to a growing database for biodiversity research.',
    details: 'Mobile app for citizen scientists to log species sightings.',
    image: '/Images/forestry-6596153.webp',
  },
  {
    title: 'Trail Restoration Planner',
    description: 'This tool helps conservationists plan restoration projects by visualizing trail conditions, mapping repair tasks, and estimating resource needs.',
    details: 'Tool to plan and visualize restoration projects on hiking trails.',
    image: '/Images/forest-5441466.webp',
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
    <section id='projects' className="max-w-5xl mx-auto pt-25 px-4 flex flex-col gap-10 bg-black rounded-xl pb-10 overflow-hidden scroll-mt-20">
      <h2 className="text-4xl font-bold text-center text-white">
        My <span className="text-green-600">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className={`relative rounded-2xl border cursor-pointer shadow-md overflow-hidden h-64 flex items-end ${
              projects.length % 2 !== 0 && i === projects.length - 1 ? 'md:col-span-2' : ''
            }`}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
            onClick={() => handleOpenModal(project)}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10 bg-black/50 backdrop-blur-sm p-4 w-full pointer-events-none">
              <h3 className="text-2xl font-bold text-white m-0">{project.title}</h3>
              <p className="mt-2 text-white text-sm leading-relaxed">{project.details}</p>
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
            <p className="text-sm mb-4">{selectedProject.description}</p>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              loading="lazy"
              className="rounded-lg w-full max-h-[300px] object-cover mx-auto"
            />
          </div>
        </Modal>
      )}
    </section>
  );
}
