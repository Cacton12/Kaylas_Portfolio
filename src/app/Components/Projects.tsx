'use client';

import { motion, Variants } from 'framer-motion';

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: 'Forest Health Monitor',
    description: 'A web app to track forest health metrics using remote sensing data.',
  },
  {
    title: 'Biodiversity Tracker',
    description: 'Mobile app for citizen scientists to log species sightings.',
  },
  {
    title: 'Trail Restoration Planner',
    description: 'Tool to plan and visualize restoration projects on hiking trails.',
  },
  // Add more projects as needed
];

export default function ProjectsTiltFade() {
  return (
    <section style={container}>
        <h2 className='text-4xl font-bold mx-auto'>My <span className='text-green-600'>Projects</span></h2>
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} i={i} />
      ))}
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  i: number;
}

function ProjectCard({ project, i }: ProjectCardProps) {
  return (
    <motion.div
      style={card}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.7 }}
      variants={cardVariants}
      custom={i}
      whileHover={{
        rotateX: 5,
        rotateY: 10,
        scale: 1.05,
        boxShadow: '0 8px 15px rgba(46, 125, 50, 0.4)', // softer shadow without glow
        transition: { duration: 0.3 },
      }}
    >
      <h3 style={title}>{project.title}</h3>
      <p style={description}>{project.description}</p>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.8,
    rotateX: 15,
    rotateY: -15,
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

/** Styles **/

const container: React.CSSProperties = {
  maxWidth: 700,
  margin: '3rem auto',
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  background: '#000000', // changed to black
  borderRadius: '12px',
};

const card: React.CSSProperties = {
  background: '#e6f2e6',
  padding: '2rem',
  borderRadius: '16px',
  boxShadow: '0 8px 20px rgba(46, 125, 50, 0.3)', // subtle shadow
  border: '4px solid #2e7d32',
  cursor: 'pointer',
  transformStyle: 'preserve-3d',
};

const title: React.CSSProperties = {
  margin: 0,
  fontSize: '1.75rem',
  fontWeight: '700',
  color: '#2e7d32',
};

const description: React.CSSProperties = {
  marginTop: '0.5rem',
  fontSize: '1rem',
  color: '#2e7d32',
  lineHeight: 1.5,
};
