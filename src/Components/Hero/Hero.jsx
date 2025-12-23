import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Empower Charity with Blockchain
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl mb-6"
      >
        Transparent, Secure, and Decentralized Donations
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-orange-500 px-6 py-3 rounded text-white font-semibold"
      >
        Explore Projects
      </motion.button>
    </section>
  );
}