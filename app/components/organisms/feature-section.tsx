'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import hotelsInBali from "@/app/data-dumy/dumy-hotel";
import FeaturedCard from "../molecules/card-feutre";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const FeatureSection = () => {
  const [selected, setSelected] = useState('bali');

  const sleceted = [
    { id: 1, name: "Bali", select: 'bali' },
    { id: 2, name: "Tokyo", select: 'tokyo' },
    { id: 3, name: "Paris", select: 'paris' },
    { id: 4, name: "New York", select: 'new-york' },
    { id: 5, name: "London", select: 'london' },
    { id: 6, name: "Sydney", select: 'sydney' },
  ];

  const filteredData = selected === 'bali'
    ? hotelsInBali
    : hotelsInBali.filter((item) => item.city === selected);

  return (
    <motion.div
      className="rounded-lg lg:p-8 px-2 py-5"
      style={{
        background: `
          radial-gradient(circle at top right, #ffe4ec 10%, transparent 30%),
          radial-gradient(circle at bottom left, #ffe4ec 10%, transparent 30%),
          linear-gradient(135deg, #f3f3f3, #e0e0e0)
        `
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <article>
        <motion.h1
          className="text-xl font-semibold text-neutral-800"
          variants={fadeUp}
        >
          Featured Properties
        </motion.h1>

        <motion.div
          className="mt-4 flex flex-wrap"
          variants={staggerContainer}
        >
          {sleceted.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setSelected(item.select)}
              className="mr-2 mb-2"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={`${
                  selected === item.select
                    ? 'bg-neutral-900 text-xs text-white font-semibold'
                    : 'text-neutral-800 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-xs'
                } inline-block px-4 py-2 rounded-xs transition-colors duration-300 ease-linear`}
              >
                {item.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="mt-6"
          variants={fadeUp}
        >
          <FeaturedCard travel={filteredData} />
        </motion.div>
      </article>
    </motion.div>
  );
};

export default FeatureSection;
