import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, raised, goal }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className=" p-6 rounded-lg shadow-lg flex flex-col justify-between">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span>{raised} / {goal} ETH</span>
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Donate</button>
      </div>
    </motion.div>
  );
}