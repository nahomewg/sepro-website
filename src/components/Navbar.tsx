import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="py-10 px-32">
        <div className="flex justify-between items-center">
            <Link href={"/"} className="flex gap-2.5">
                <Image src="/se-logo.svg" alt="logo" width={50} height={50} className="w-auto h-auto"/>
                <p className="text-lg text-white font-bold">SE PRO-GRAM</p>
            </Link>
            <ul className="hidden h-full gap-28 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                    className="text-lg font-light text-white cursor-pointer transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar