import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { useState } from "react";
import Image from "next/image";

const NavLinks = () => {
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
    const pathname = usePathname();

    const handleMouseEnter = (id: string) => {
        setOpenDropdowns({ ...openDropdowns, [id]: true });
    }

    const handleMouseLeave = (id: string) => {
        setOpenDropdowns({ ...openDropdowns, [id]: false });
    }

    return (
    <ul className="hidden h-full gap-28 items-center lg:flex">
        {NAV_LINKS.map((link) => (
            <li key={link.id}>
                {link.children ?
                    <Dropdown isOpen={!!openDropdowns[link.id]} onMouseLeave={() => handleMouseLeave(link.id)} className="bg-black">
                        <DropdownTrigger>
                            <p
                                onMouseEnter={() => {
                                    handleMouseEnter(link.id);
                                    }}
                                className={`flex gap-2 text-base font-light cursor-pointer uppercase transition-all ${pathname === link.href ? 'font-bold' : 'hover:font-bold'}`}>
                                {link.label}
                                <Image src={"/chevron-down.png"} width={20} height={10} alt="down arrow"/>
                            </p>
                        </DropdownTrigger>
                        <DropdownMenu color="primary">
                            {link.children.map((child) => (
                                <DropdownItem key={child.id} href={child.href} className="text-base uppercase font-light">
                                    {child.label}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                : 
                    <Link 
                        href={link.href} 
                        className={`text-base font-light cursor-pointer uppercase transition-all ${pathname === link.href ? 'font-bold' : 'hover:font-bold'}`}
                    >
                        {link.label}
                    </Link>
                }
            </li>
        ))}
    </ul>
    )
}

export default NavLinks