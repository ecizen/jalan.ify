import images from "@/app/assets/data-image"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ADSHeader = () => {
  return (
    <div className="w-full bg-neutral-950 px-4 py-2  relative flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-6 text-white text-xs">
      <div className="flex lg:items-center text-start gap-2 text-center sm:text-left">
        <Image
          src={images.petir}
          width={16}
          height={16}
          alt="icon-header"
          className="hidden sm:block"
        />
        <p className="leading-snug text-[10px]">
          Unlock the Magic of Travel with <strong>jalanify</strong> – Your Gateway to Extraordinary Experiences
        </p>
      </div>
      <Link
        href="#"
        className="lg:flex hidden lg:relative absolute right-0 bottom-0 items-center gap-1 text-orange-500 font-medium hover:underline transition"
      >
        Get This Now
        <ArrowRight size={16} className="text-white" />
      </Link>
    </div>
  )
}

export default ADSHeader