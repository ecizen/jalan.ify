'use client';
import hotelsInBali from "@/app/data-dumy/dumy-hotel";
import { useState } from "react";
import FeaturedCard from "../molecules/card-feutre";

const FeatureSection = () => {
    const [selected, setSelected] = useState('bali');

    const sleceted=[
        {id: 1, name: "Bali", select: 'bali'},
        {id: 2, name: "Tokyo", select: 'tokyo'},
        {id: 3, name: "Paris", select: 'paris'},
        {id: 4, name: "New York", select: 'new-york'},
        {id: 5, name: "London", select: 'london'},
        {id: 6, name: "Sydney", select: 'sydney'},
    ]
    const filteredData = selected === 'bali'
     ? hotelsInBali : hotelsInBali.filter((item)=> item.city === selected)
    return(
    <div 
  style={{
    background: `
      radial-gradient(circle at top right, #ffe4ec 10%, transparent 30%),
      radial-gradient(circle at bottom left, #ffe4ec 10%, transparent 30%),
      linear-gradient(135deg, #f3f3f3, #e0e0e0)
    `
  }}
    className="min-h-screen rounded-lg lg:p-8 px-2 py-5">
        <article>
            <h1 className="text-xl font-semibold text-neutral-800">Featured Properties</h1>  
            <div className="mt-4">
                {sleceted.map((item) => (
                    <button key={item.id} onClick={() => setSelected(item.select)} className="mr-2 mb-2">
                        <span className={` ${selected === item.select ? 'bg-neutral-900 text-xs text-white font-semibold': 'text-neutral-800 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-xs'} inline-block  text-neutral-700 px-4 py-2 rounded-xs mr-2 mb-2 transition-colors duration-300 ease-linear `}>
                            {item.name}
                        </span>
                    </button>
                ))}
            </div>
            <FeaturedCard
            travel={filteredData}
            />
        </article>
    </div>
    )

}
export default FeatureSection;