'use client';
import { useState } from "react";
import Sele from "../molecules/selected-category";
import SelectCategory from "../molecules/selected-category";
import CardCategory from "../molecules/card-category";
import travelData from "@/app/data-dumy/dumy";

const CategorySection = () => {
   

    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = [
        { id: 0, name: "Semua", selectValue: 'All' },
        { id: 1, name: "Staycation", selectValue: 'staycation' },
        { id: 2, name: "Hotel", selectValue: 'hotel' },
        { id: 3, name: "Wisata Kuliner", selectValue: 'kuliner' },
        { id: 4, name: "Wisata Alam", selectValue: 'alam' },
        { id: 5, name: "Tempat Bermain", selectValue: 'sejarah' },
        { id: 6, name: "Hidden Gems", selectValue: 'hidden-gems' },
        { id: 7, name: "Lainnya", selectValue: 'lainya' },
    ];
    const filteredCategories = selectedCategory === 'All'
        ? travelData : travelData.filter((item) => item.category === selectedCategory);

    return (
        <div className="lg:px-8 px-2 ">
            <div className="lg:mt-12">
                <h1 className="text-start lg:text-xl  md:text-xl text-md font-semibold text-neutral-700">
                    Yang Lagi Hits Banget Sekarang!📍🤩
                </h1>
                <div className="mt-6 lg:flex items-center grid md:grid-cols-3 grid-cols-2 gap-4">
                  <SelectCategory
                   categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
              </div>
              <div  className="mt-6">
                <CardCategory
                  travel={filteredCategories}
                />
              </div>
            </div>
        </div>
    );
};

export default CategorySection;
