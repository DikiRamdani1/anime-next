"use client"
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Pagination = ({ params, urlName, lastPage }) => {
    const count = parseInt(params)
    const [page, setPage] = useState(count)
    const router = useRouter()

    const handleNext = () => {
        setPage((page) => page + 1)
    }

    const handlePrev = () => {
        setPage((page) => page - 1)
    }

    const handleFristPage = () => {
        setPage((lastPage) => lastPage - 1062)
    }

    const handleLastPage = () => {
        setPage(lastPage)
    }

    useEffect(() => {
        if (page < 1) {
            setPage(1)
        } else if (page > lastPage) {
            setPage(lastPage)
            null
        } else {
            router.push(`/${urlName}/${page}`)
        }
    }, [page])

    return (
        <div className="w-full h-auto mt-28 flex justify-center">
            <div className="w-44 h-auto flex justify-between">
                <button className="w-auto h-auto" onClick={handlePrev}>
                    <ArrowCircleLeft size={30}/>
                </button>
                <button onClick={handleFristPage}>First</button>
                <button onClick={handleLastPage}>Last</button>
                <button className="w-auto h-auto" onClick={handleNext}>
                    <ArrowCircleRight size={30}/>
                </button>
            </div>
        </div>
    )
}

export default Pagination