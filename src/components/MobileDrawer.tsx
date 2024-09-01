import { NAV_LINKS } from "@/constants"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const MobileDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
    const pathname = usePathname();

    const handleLinkClick = (id: string, isOpen: boolean) => {
        setOpenDropdowns({...openDropdowns, [id]: isOpen});
    }
    return (
    <div className={`fixed flex flex-col justify-center items-center z-20 top-0 right-0 h-full w-full bg-black
    text-black transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute right-7 top-4 p-3" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <ul className="flex flex-col justify-center items-center space-y-4">
            {NAV_LINKS.map((link) => (
                <li key={link.id}>
                    {link.children ?
                        <Dropdown isOpen={!!openDropdowns[link.id]} className="bg-black">
                            <DropdownTrigger>
                                <p
                                    onClick={() => handleLinkClick(link.id, !openDropdowns[link.id])}
                                    className={`flex gap-2 text-base font-light cursor-pointer uppercase transition-all ${pathname === link.href ? 'font-bold' : 'hover:font-bold'}`}>
                                    {link.label}
                                    <Image src={"/chevron-down.png"} width={15} height={10} alt="down arrow" className="w-auto h-auto"/>
                                </p>
                            </DropdownTrigger>
                            <DropdownMenu color="primary">
                                {link.children.map((child) => (
                                    <DropdownItem key={child.id} href={child.href} onClick={onClose} className="text-base uppercase font-light">
                                        {child.label}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    :
                        <Link 
                            href={link.href} 
                            className={`text-lg uppercase font-light cursor-pointer transition-all ${pathname === link.href ? 'font-bold' : 'hover:font-bold'}`}
                            onClick={onClose}
                        >
                            {link.label}
                        </Link>
                    }
                </li>
            ))}
        </ul>
    </div>
    )
}

export default MobileDrawer