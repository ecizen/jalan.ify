'use client';

import { motion, Variants } from "framer-motion";

const stats = [
  { id: 1, value: '10+', label: 'Your Experience Client' },
  { id: 2, value: '12K', label: 'Happy Clients' },
  { id: 3, value: '4.8', label: 'Overall Rating' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const RattingSection = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-12 px-4 pb-16 gap-6">
      {stats.map((item, i) => (
        <motion.div
          key={item.id}
          className="p-6 h-[300px] bg-gradient-to-br from-white to-blue-50 rounded-xl  flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h1 className="text-7xl font-bold text-blue-600">{item.value}</h1>
          <p className="text-sm mt-2 text-gray-600 tracking-wide">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default RattingSection;
