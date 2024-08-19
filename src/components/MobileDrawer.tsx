import { NAV_LINKS } from "@/constants"
import NavLinks from "./NavLinks"
import Link from "next/link"
import { usePathname } from "next/navigation";

const MobileDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const pathname = usePathname();
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
                    <Link 
                        href={link.href} 
                        className={`text-lg font-light cursor-pointer transition-all ${pathname === link.href ? 'font-bold' : 'hover:font-bold'}`}
                        onClick={onClose}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default MobileDrawer