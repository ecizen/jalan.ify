"use client"
import { useState } from "react"
import ADSHeader from "./ads"
import NavItem from "./nav-item"

const navItems = [
  { href: "#", label: "Home" },
  { href: "#", label: "Tours" },
  { href: "#", label: "Hotels" },
  { href: "#", label: "Destinations" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contact" },
  { href: "#", label: "FAQ" },
]
const Navbar = () => {
  const [query, setQuery] = useState("")

  return (
    <header className="top-0 sticky z-20 bg-white ">
      <div className="">
        <ADSHeader/>
      </div>
      <nav className="w-full px-8 py-2 grid lg:grid-cols-5 grid-cols-2  ">
        <div className="flex items-center justify-start col-span-1 ">
          <h1 className="text-blue-600 text-xl font-semibold">Jalan.<span className="text-neutral-950">ify</span></h1>
        </div>
        <div className="lg:flex items-center justify-center col-span-3  hidden">
          <ul className="flex items-center space-x-4">
            {navItems.map((item, index) => (
              <NavItem key={index}
                href={item.href}
                label={item.label}
              />
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end col-span-1">
            <button className="text-xs text-white p-3 cursor-pointer px-4 transition-all duration-300 ease-in-out hover:bg-white hover:text-neutral-900 hover:font-semibold border hover:shadow-2xl  rounded-full bg-neutral-950">Start Your Journey</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
