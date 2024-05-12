import { GloriaHallelujah, JosefinSans } from "@/app/fonts"
import Link from "next/link"

const Title = ({ title, link }) => {
    return (
        <div className="w-full flex justify-between items-center">
            <h1 className={`w-auto text-4xl font-bold sm:text-5xl md:8xl ${JosefinSans.className}`}>{title}</h1>
            {link ? 
                <Link href={link}>
                    <h6 className={`${GloriaHallelujah.className} w-28 m-0 lg:mr-9 text-black hover:text-gray-700`}>Lihat Semua</h6>
                </Link>
            : null}
        </div>
    )
}

export default Title