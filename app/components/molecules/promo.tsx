'use client';
import images from "@/app/assets/data-image";
import { id } from "date-fns/locale";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// pastikan ini sudah benar

const PromoSection = () => {
    const dataPromo =[
        {id: 1, image: images.promoSchool},
        {id: 2, image: images.promoSchool},
    ]
    const dataPromo2 = [
      {id: 1, image: images.hotelPromo},
      {id: 2, image: images.hotelPromo},
    ]
  return (
   <div className="lg:mt-12 pt-12 lg:pb-0 pb-6 lg:px-8 px-2 flex items-center justify-between gap-6 overflow-x-auto lg:overflow-x-hidden scrollPromo">
  <button className=" cursor-pointer group relative w-[700px] h-[200px] bg-amber-100 rounded-lg lg:block hidden">
    <Image
      className="rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
      src={images.banner}
      alt="Promo School"
      layout="fill"
      objectFit=""
      priority={true}
    />
  </button>

  <div className="w-fit "> {/* <= Batasi lebar container Swiper */}
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 3000 }}
      style={{ width: "300px", height: "200px" }} 
      
      // Batasi ukuran
    >
      {dataPromo.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative w-[300px] h-[200px]">
            <Image
              className="rounded-lg"
              src={item.image}
              alt={`Promo ${item.id}`}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  <div className="w-fit"> {/* <= Batasi lebar container Swiper */}
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 3000 }}
      style={{ width: "300px", height: "200px" }} // Batasi ukuran
    >
      {dataPromo2.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative w-[300px] h-[200px]">
            <Image
              className="rounded-lg"
              src={item.image}
              alt={`Promo ${item.id}`}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

  );
};

export default PromoSection;
