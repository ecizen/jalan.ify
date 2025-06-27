"use client";
import { useState } from "react";
import Sele from "../molecules/selected-category";
import SelectCategory from "../molecules/selected-category";
import CardCategory from "../molecules/card-category";
import travelData from "@/app/data-dumy/dumy";
import { motion } from "framer-motion";

const CategorySection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
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

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    { id: 0, name: "Semua", selectValue: "All" },
    { id: 1, name: "Staycation", selectValue: "staycation" },
    { id: 2, name: "Hotel", selectValue: "hotel" },
    { id: 3, name: "Wisata Kuliner", selectValue: "kuliner" },
    { id: 4, name: "Wisata Alam", selectValue: "alam" },
    { id: 5, name: "Tempat Bermain", selectValue: "sejarah" },
    { id: 6, name: "Hidden Gems", selectValue: "hidden-gems" },
    { id: 7, name: "Lainnya", selectValue: "lainya" },
  ];
  const filteredCategories =
    selectedCategory === "All"
      ? travelData
      : travelData.filter((item) => item.category === selectedCategory);

  return (
    <div className="lg:px-8 px-2 ">
      <div className="lg:mt-12">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-start lg:text-xl  md:text-xl text-md font-semibold text-neutral-700"
        >
          Yang Lagi Hits Banget Sekarang!📍🤩
        </motion.h1>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 lg:flex items-center grid md:grid-cols-3 grid-cols-2 gap-4"
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={fadeUp}>
              <SelectCategory
                categories={[cat]}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6"
        >
          <CardCategory travel={filteredCategories} />
        </motion.div>
      </div>
    </div>
  );
};

export default CategorySection;
