import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <>
        <hr className="mx-10 lg:mx-32 xl:mx-64 border-orange" />
        <div className="flex flex-col justify-center items-center py-24 px-10">
            <p className="text-2xl pb-5">Social Media:</p>
            <div className="flex gap-5">
                <Link href={"https://www.facebook.com/"} target="_blank">
                    <Image src="/facebook-orange.png" alt="facebook" width={64} height={64} quality={100} className="hover:scale-110"/>
                </Link>
                <Link href={"https://www.instagram.com/"} target="_blank">
                    <Image src="/instagram-orange.png" alt="instagram" width={64} height={64} quality={100} className="hover:scale-110"/>
                </Link>
                <Link href={"https://www.tiktok.com/"} target="_blank">
                    <Image src="/tiktok-orange.png" alt="tiktok" width={64} height={64} quality={100} className="hover:scale-110"/>
                </Link>
            </div>
            <div className="flex gap-5">
                <Link href={"https://www.facebook.com/"} target="_blank">
                    <Image src="/facebook.png" alt="facebook" width={64} height={64} quality={100} className="hover:scale-110"/>
                </Link>
                <Link href={"https://www.instagram.com/"} target="_blank">
                    <Image src="/instagram.png" alt="instagram" width={64} height={64} quality={100} className="hover:scale-110"/>
                </Link>
                <Link href={"https://www.tiktok.com/"} target="_blank">
                    <Image src="/tiktok.png" alt="tiktok" width={64} height={64} quality={100} className="hover:scale-110"/>
                </Link>
            </div>
        </div>
        <footer className="flex items-center justify-center py-4 px-10 lg:py-10 lg:px-32 bg-orange">
            <div className="flex w-full flex-col gap-14">
                <div className="flex flex-col items-start gap-[10%] md:flex-row">
                    <Link href={"/"} className="gap-2.5">
                        <div className="flex items-center">
                            <Image src="/se-logo.svg" alt="logo" width={50} height={50} className="w-auto h-auto"/>
                            <div className="-space-y-2">
                                <p className="text-lg font-bold"><span className="stroke-custom small-stroke">SE</span> PRO-GRAM</p>
                                <p className="text-base font-light">SE PRODUCTIONS INC.</p>
                            </div>
                        </div>
                        <p className="text-lg font-light">Created by Nahome Wolde-Giorgis. Icons by Icons8.</p>
                    </Link>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer