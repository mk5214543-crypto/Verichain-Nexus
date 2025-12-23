import { motion } from 'framer-motion';
import ProjectCard from '../../../Projectcard/ProjectCard';

const demoProjects = [
  { title: 'Clean Water for All', description: 'Provide clean water to remote villages.', raised: 1.2, goal: 5 },
  { title: 'School Supplies', description: 'Donate books and supplies for children.', raised: 2.5, goal: 6 },
  { title: 'Medical Aid', description: 'Support local clinics and healthcare.', raised: 0.8, goal: 3 }
];

export default function Projects() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {demoProjects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}