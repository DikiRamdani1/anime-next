import { InclusiveSans, JosefinSans } from "@/app/fonts"
import GetApiManga from "@/app/libs/api-libs"
import { Play } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"


const Page = async({ params }) => {
    const id = params.id
    const animeById = await GetApiManga(`anime/${id}`)
    const animeVideos = await GetApiManga(`anime/${id}/videos`)
    const upcomingAnime = await GetApiManga(`seasons/upcoming`)
    return (
        <div className="w-full h-auto flex justify-center">
            <div className="w-3/4 flex flex-col items-center">
                    <div className="w-3/4 h-96 mt-32 relative flex justify-center items-center bg-cyan-600">
                        <Image className="w-full h-full object-cover" src={animeById.data.images.jpg.large_image_url} width={5000} height={5000}/>
                        <Link className="w-20 h-20 absolute" href={animeById.data.trailer.embed_url ? animeById.data.trailer.embed_url : upcomingAnime.data.map(data => {data.trailer.embed_url})}>
                            <div className="w-full h-full flex items-center justify-center bg-black rounded-full opacity-60 hover:opacity-85">
                                <Play className="text-white" size={40}/>
                            </div>
                        </Link>
                    </div>
                <div className="w-3/4 h-auto mt-">
                    <h1 className={`text-3xl mt-3 font-bold ${JosefinSans.className}`}>{animeById.data.title}</h1>
                    <div className="w-full h-auto flex">
                        {animeById.data.genres.map(data => {
                            return (
                                <p className={`ml-2 first:m-0 ${InclusiveSans.className}`}>{data.name}</p>
                            )
                        })}
                    </div>
                    <p className="">Eps {animeById.data.episodes ? animeById.data.episodes : "none"}</p>
                    <p>Score {animeById.data.score ? animeById.data.score : "none"}</p>
                    <div className="mt-10">
                        <p className={`text-xl ${InclusiveSans.className}`}>Synopsis</p>
                        <p className="mt-4">{animeById.data.synopsis ? animeById.data.synopsis : null}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page