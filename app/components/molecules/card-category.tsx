'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import travelData from '@/app/data-dumy/dumy';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import {motion} from 'framer-motion'
import React, { useState } from 'react';

type filteredData = {
    id: number;
    name: string;
    location: string;
    price: number;
    imageUrl: string;
    category: string;
}
type TravelData ={
    travel? : filteredData[];
}   
    


const CardCategory: React.FC<TravelData> = ({travel}) => {

    const [activeLike, setActiveLike] = useState<number | null>(null);
    const addLike = (id: number) => {
    if (activeLike === id) {
      setActiveLike(null);
      alert('You have removed this item from your favorites.');
    } else {
      setActiveLike(id);
        alert('You have added this item to your favorites.');
    }
}
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      
      breakpoints={{
        1024: {
        slidesPerView: 5,
        },
        768: {
         slidesPerView: 3,
        },
        0: {
         slidesPerView: 1,
    },
  }}
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      {travel && travel.map((item: any) => (

          <SwiperSlide key={item.id}>
          <div className="bg-white rounded-lg shadow  relative flex justify-center">
            <div className='absolute max-w-[90%] rounded-xl w-full bg-white  bottom-3 p-2 px-4 flex items-center justify-between'>
                <div>
                    <h3 className="mt-2 text-sm font-semibold line-clamp-1">{item.name}</h3>
                    <p className='text-sm mt-2'>{item.location}</p>
                    <p className=" text-blue-700
                     font-bold text-sm mt-2">
                    Rp {item.price.toLocaleString('id-ID')}
                    </p>
                </div>
                <button   onClick={() => addLike(item.id)} className={ `${activeLike === item.id ? 'bg-blue-50': 'bg-[#d1d1cb7c] border'} p-2 flex items-center justify-center  rounded-full bg-[#d1d1cb7c] border`}>
                    <Heart size={18} className={`${activeLike === item.id? 'text-blue-600 scale-125': 'text-neutral-800 shadow-lg'} transition-all ease-in-out duration-500 `}/>
                </button>
              </div>
            <img
              src={item.imageUrl}
              alt={item.name}
              className="rounded-lg w-full h-[260px] object-cover"
              />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardCategory;