'use client';
import React, { useState } from 'react';

type filteredData = {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  city: string;
  imageUrl: string;
  facilities: string | string[];
};

type TravelData = {
  travel?: filteredData[];
};

const FeaturedCard: React.FC<TravelData> = ({ travel }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedTravel = showAll ? travel : travel?.slice(0, 4);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid lg:grid-cols-5 grid-cols-2 mt-2 lg:gap-6 gap-2">
        {displayedTravel &&
          displayedTravel.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative">
              <div className="rounded-t-lg w-full h-[250px] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="hover:scale-110 transition-transform duration-300 ease-in-out hover:brightness-75 w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="bg-white px-4 py-3 rounded-b-lg">
                <div className="flex items-center justify-between">
                  <h1 className="text-xs font-semibold line-clamp-1">{item.name}</h1>
                  <h5 className="text-xs">
                    (<span className="text-yellow-600 text-xs font-semibold">{item.rating}</span>)
                  </h5>
                </div>
                <h5 className="text-xs text-gray-500 mt-2">{item.reviews} reviews</h5>
                <div className="mt-4 flex items-center justify-between">
                  <h1 className="text-sm font-semibold">Rp {item.price.toLocaleString('id-ID')}</h1>
                  <button className="text-yellow-600 text-xs font-bold rounded-md">Book Now</button>
                </div>
              </div>
            </div>
          ))}

        {/* Card Promo di akhir */}
        <div className="rounded-t-lg w-full h-[350px] overflow-hidden relative col-span-2 lg:col-span-1">
          <div className="absolute w-full bottom-4 px-4 z-20">
            <h1 className="text-sm max-w-sm text-white text-center font-bold leading-snug">
              Discover great deals on hotels around the world
            </h1>
            <div className="mt-2">
              <button className="w-full text-center text-sm font-semibold text-white bg-blue-600 rounded-md h-10">
                Go Now
              </button>
            </div>
          </div>
          <img
            src="https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/mbr-1657190156-S8bl9/01-br-1664372169-V7niT.jpg"
            alt="Featured Image"
            className="hover:scale-110 transition-transform duration-300 ease-in-out hover:brightness-75 w-full h-full object-cover rounded-t-lg brightness-50"
          />
        </div>
      </div>

      {/* Tombol Load More */}
      {travel && travel.length > 4 && !showAll && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-yellow-600 text-white rounded-md text-sm font-semibold"
          >
            Search More Properties
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedCard;
