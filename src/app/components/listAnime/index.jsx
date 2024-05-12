import { JosefinSans } from "@/app/fonts"
import { Star } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"

const ListManga = ({api, urlName}) => {

    return (
        <div className="w-full h-auto mt-8 grid grid-cols-1 sm:grid sm:grid-cols-4 md:grid md:grid-cols-5 gap-5 sm:gap-y-24 md:gap-x-7">
            {api.data?.map(data => {
                return (
                    <Link href={`/SearchById/${urlName}/${data.mal_id}`}>
                        <div className="w-full h-52 flex sm:block sm:w-36 sm:h-60 md:w-32 lg:w-48">
                            <div className="w-36 h-full sm:w-full relative overflow-hidden">
                                <Image className="w-full h-full object-cover" src={data.images.jpg.image_url} width={5000} height={5000}/>
                                <div className="hidden px-2 pt-1 sm:flex sm:absolute sm:right-0 sm:top-0 bg-white">
                                    <Star size={21}/>
                                    <p className="">{data.score ? data.score : "none"}</p>
                                </div>
                                <p className="hidden sm:block sm:absolute sm:left-0 sm:bottom-0 bg-cyan-600 rounded-r px-2">Eps {data.episodes ? data.episodes : "none"}</p>
                            </div>
                            <div className=" w-2/4 h-full sm:w-auto sm:h-auto pl-2 pt-5 sm:p-0 sm:pt-2">
                                <h3 className={`text-xl lg:text-lg sm:text-base font-bold line-clamp-2 leading-5 sm:leading-4 ${JosefinSans.className}`}>{data.title}</h3>
                                <div className="w-full h-full relative sm:hidden">
                                    <p>Eps {data.episodes ? data.episodes : "none"}</p>
                                    <p>Score {data.score ? data.score : "none"}</p>
                                    <p className="mt-4 line-clamp-3">{data.synopsis}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ListManga