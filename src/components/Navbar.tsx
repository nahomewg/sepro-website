'use client'
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center py-10 px-10 lg:block lg:px-32">
        <div className="flex justify-between items-center">
            <Link href={"/"} className="flex gap-2.5 items-center group">
                <Image src="/se-logo.svg" alt="logo" width={50} height={50} className="w-auto h-auto"/>
                <p className="text-lg font-bold group-hover:font-extrabold group-hover:drop-shadow-[2px_2px_2px_#f28a12] group-hover:transition-all"><span className="stroke-custom small-stroke">SE</span> PRO-GRAM</p>
            </Link>
            <ul className="hidden h-full gap-28 lg:flex">
                {NAV_LINKS.map((link) => (
                    <li key={link.id}>
                        <Link 
                            href={link.href} 
                            className={`text-lg font-light cursor-pointer transition-all ${pathname === link.href ? 'font-bold' : 'hover:font-bold'}`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
