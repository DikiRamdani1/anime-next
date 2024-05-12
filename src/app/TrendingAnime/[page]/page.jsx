import ListManga from "@/app/components/listAnime"
import Title from "@/app/components/listAnime/title"
import Footer from "../../components/footer"
import Pagination from "../../components/pagination"

const { default: GetApiManga } = require("@/app/libs/api-libs")

const Page = async({ params }) => {
    const page = params.page
    const topAnime = await GetApiManga("top/anime", `page=${page}`)

    return (
        <div className="w-full h-auto">

            <section className="w-full mt-40 px-7">
                <Title title={`Trending`} link={""}/>
                <ListManga api={topAnime} urlName={"Anime"}/>
            </section>

            <Pagination params={page} urlName={"TrendingAnime"} lastPage={topAnime.pagination.last_visible_page}/>

            <Footer/>
        </div>
    )

}

export default Page