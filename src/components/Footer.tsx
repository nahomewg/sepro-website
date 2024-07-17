import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-4 px-10 lg:py-10 lg:px-32 bg-orange">
        <div className="flex w-full flex-col gap-14">
            <div className="flex flex-col items-start gap-[10%] md:flex-row">
                <Link href={"/"} className="gap-2.5">
                    <div className="flex items-center">
                        <Image src="/se-logo.svg" alt="logo" width={50} height={50} className="w-auto h-auto"/>
                        <div className="-space-y-2">
                            <p className="text-lg font-bold">SE PRO-GRAM</p>
                            <p className="text-base font-light">SE PRODUCTIONS INC.</p>
                        </div>
                    </div>
                    <p className="text-lg font-light">Created by Nahome Wolde-Giorgis. Icons by Icons8.</p>
                </Link>
            </div>
        </div>
    </footer>
    // <footer className="absolute bottom-0 w-full bg-orange flex justify-between items-center py-5 px-10 lg:py-10 lg:px-32">
    //     <div>
    //         <Link href={"/"} className="gap-2.5">
    //             <div className="flex items-center">
    //                 <Image src="/se-logo.svg" alt="logo" width={50} height={50} className="w-auto h-auto"/>
    //                 <div className="-space-y-2">
    //                     <p className="text-lg font-bold">SE PRO-GRAM</p>
    //                     <p className="text-base font-light">SE PRODUCTIONS INC.</p>
    //                 </div>
    //             </div>
    //             <p className="text-lg font-light">Created by Nahome Wolde-Giorgis. Icons by Icons8.</p>
    //         </Link>
    //     </div>
    // </footer>
  )
}

export default Footer