'use client';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Appointment01Icon,
  FavouriteIcon,
  Home01Icon,
  Search01Icon,
  UserIcon
} from '@hugeicons/core-free-icons';
import { useState } from 'react';

export default function BottomNav() {
  const [active, setActive] = useState<number | null>(1);

  const clickNav = (id: number) => {
    setActive(id);
  };

  const dataNav = [
    { id: 1, icon: Home01Icon, label: "Home", link: "#" },
    { id: 2, icon: FavouriteIcon, label: "Favorite", link: "#" },
    { id: 3, icon: Search01Icon, label: "Search", link: "#" },
    { id: 4, icon: Appointment01Icon, label: "Appointment", link: "#" },
    { id: 5, icon: UserIcon, label: "Profile", link: "/profile" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden  grid grid-cols-5 items-center z-50 h-17 bg-white border">
      {dataNav.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={item.link}
            onClick={() => clickNav(item.id)}
            className={`flex flex-col items-center justify-center text-xs transition-all duration-200 ${
              isActive ? 'text-blue-500' : 'text-neutral-500'
            }`}
          >
            <HugeiconsIcon
              size={24}
              icon={item.icon}
              color={isActive ? 'text-blue-500' : 'rgb(115 115 115)'} // Tailwind: blue-500 / neutral-500
            />
            <span className={`ease-in-out transition-all mt-1 duration-300`}>{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}
