import { Cinzel, JosefinSans } from "@/app/fonts"
import { List, Star } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const { default: InputSearch } = require("../search")

const Navbar = () => {
    return (
        <div className="w-full h-14 px-3 md:px-6 flex justify-between items-center fixed top-0 left-0 z-50 bg-cyan-500">
            <div className="w-auto h-auto flex justify-center items-center">
                <Link href={"/"}>
                    <h1 className={`text-xl sm:text-2xl ${Cinzel.className}`}><span className="text-yellow-500">X</span>Enime</h1>
                </Link>
            </div>
            <div className=" w-3/5">
                <InputSearch/>
            </div>
            <div className="w-auto h-auto flex items-center">
                <button className="py-1 px-1 flex bg-white rounded">
                    <Star className="text-yellow-500" size={21}/>
                    <h6 className={`hidden md:block font-bold ${JosefinSans.className}`}>Favorites</h6>
                </button>
                <button className="p-1 ml-1 md:hidden">
                    <List size={21}/>
                </button>
            </div>
        </div>
    )
}

export default Navbar