import Footer from "@/app/components/footer"
import ListManga from "@/app/components/listAnime"
import Title from "@/app/components/listAnime/title"

const { default: GetApiManga } = require("@/app/libs/api-libs")

const Page = async({ params }) => {
    const keyword = params.keyword
    const searchAnime = await GetApiManga("anime", `q=${keyword}`)
    return (
        <div className="w-full h-auto">

            <section className="w-full mt-40 px-7">
                <Title title={`Search`} link={""}/>
                <ListManga api={searchAnime} urlName={"Anime"}/>
            </section>

            <Footer/>

        </div>
    )

}

export default Page