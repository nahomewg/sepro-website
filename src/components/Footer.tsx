import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full min-h-[100px] bg-orange flex justify-between items-center py-10 px-32">
        <div>
            <Link href={"/"} className="gap-2.5">
                <div className="flex items-center">
                    <Image src="/se-logo.svg" alt="logo" width={50} height={50} className="w-auto h-auto"/>
                    <div className="-space-y-2">
                        <p className="text-lg text-white font-bold">SE PRO-GRAM</p>
                        <p className="text-base text-white font-light">SE PRODUCTIONS INC.</p>
                    </div>
                </div>
                <p className="text-lg text-white font-light">Created by Nahome Wolde-Giorgis. Icons by Icons8.</p>
            </Link>
        </div>
    </footer>
  )
}

export default Footer