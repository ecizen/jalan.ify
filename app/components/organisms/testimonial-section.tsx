'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, Variant } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "Product Designer",
    avatar: "https://github.com/leerob.png",
    review:
      "I just returned from the most amazing trip to Europe. All thanks to this travel agency! They were incredibly helpful and created an itinerary that suited my interests and budget. I can’t wait to book my next adventure with them!",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "UX Specialist",
    avatar: "https://github.com/shadcn.png",
    review:
      "An outstanding experience from start to finish. The team listened to my needs and provided exactly what I imagined. Highly recommended!",
  },
  {
    id: 3,
    name: "Alex Johnson",
    title: "Developer Advocate",
    avatar: "https://github.com/vercel.png",
    review:
      "Excellent service, easy communication, and seamless trip execution. I felt taken care of every step of the way.",
  },
];

const fadeInVariant :any = (direction: 'left' | 'right') => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const TestimonialSection = () => {
  return (
    <div className="w-full lg:px-16 px-4 lg:py-16 py-10 bg-white">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-neutral-800">
          What Our Clients Say
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            className="h-auto bg-gray-100 px-1 rounded-md group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant(index % 2 === 0 ? 'left' : 'right')}
          >
            <div className="w-full bg-white py-4 px-4 rounded-t-md">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <HugeiconsIcon
                    key={i}
                    icon={StarIcon}
                    className="text-blue-500 w-3 h-3"
                    style={{ fill: "currentColor" }}
                  />
                ))}
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.review}
                </p>
              </div>
            </div>
            <div className="px-4 py-6 bg-gray-100 group-hover:bg-blue-600 rounded-b-md transition-all duration-300">
              <div className="flex items-center space-x-2">
                <Avatar className="size-10">
                  <AvatarImage src={item.avatar} alt={item.name} />
                  <AvatarFallback>{item.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-sm font-medium group-hover:text-white">
                    {item.name}
                  </h1>
                  <p className="text-sm text-neutral-500 group-hover:text-gray-300">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
