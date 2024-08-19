import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const pathname = usePathname();
    return (
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
    )
}

export default NavLinks