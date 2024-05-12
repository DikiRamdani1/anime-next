"use client"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const inputSearch = useRef()
    const router = useRouter()

    const handleInputSearch = (event) => {
        const keyword = inputSearch.current.value
        if (keyword === "") {
            null
        } else if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/Search/${keyword}`)
        }
    }
    return (
        <div className="w-10/12 ml-2 sm:w-full flex justify-center relative">
            <input className="w-full  p-1 rounded-xl outline-none border border-black" type="text" placeholder="Pencarian..." ref={inputSearch} onKeyDown={handleInputSearch}/>
            <button className="absolute top-1 right-2" onClick={handleInputSearch}>
                <MagnifyingGlass size={22} className="text-black opacity-35"/>
            </button>
        </div>
    )
}

export default InputSearch