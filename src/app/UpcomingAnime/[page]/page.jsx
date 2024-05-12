import ListManga from "@/app/components/listAnime"
import Title from "@/app/components/listAnime/title"
import Footer from "../../components/footer"
import Pagination from "../../components/pagination"

const { default: GetApiManga } = require("@/app/libs/api-libs")

const Page = async({ params }) => {
    const page = params.page
    const upcomingAnime = await GetApiManga("seasons/upcoming", `page=${page}`)

    return (
        <div className="w-full h-auto">

            <section className="w-full mt-40 px-7">
                <Title title={`Yang Akan Datang`} link={""}/>
                <ListManga api={upcomingAnime} urlName={"Anime"}/>
            </section>

            <Pagination params={page} urlName={"UpcomingAnime"} lastPage={upcomingAnime.pagination.last_visible_page}/>

            <Footer/>
        </div>
    )

}

export default Page