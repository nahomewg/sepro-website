import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <>
            <section className="w-full h-[660px] relative">
                <div className="bg-contact-background h-full w-full bg-cover bg-center opacity-70 absolute" />
                <Link href="#form" className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-center text-5xl z-10">Contact Us</h1>
                    <Image src="/Down.png" alt="Down arrow" className="w-16 h-16 self-center" width={64} height={64} />
                </Link>
            </section>
            <ContactForm id="form" />
        </>
    )
}