import Footer from "./components/footer"
import ListManga from "./components/listAnime"
import Title from "./components/listAnime/title"
import GetApiManga from "./libs/api-libs"

const Page = async() => {
  const topAnime = await GetApiManga("top/anime", "limit=5")
  const nowAnime = await GetApiManga("seasons/now", "limit=5")
  const upcomingAnime = await GetApiManga("seasons/upcoming", "limit=5")

  return (
    <div className="w-full h-auto">

      <section className="w-full mt-52 px-7">
        <Title title={"Trending"} link={"/TrendingAnime/1"}/>
        <ListManga api={topAnime} urlName={"Anime"}/>
      </section>

      <section className="w-full mt-40 px-7">
        <Title title={"Terbaru"} link={"/NowAnime/1"}/>
        <ListManga api={nowAnime} urlName={"Anime"}/>
      </section>

      <section className="w-full mt-40 px-7">
        <Title title={"Yang Akan Datang"} link={"/UpcomingAnime/1"}/>
        <ListManga api={upcomingAnime} urlName={"Anime"}/>
      </section>

      <Footer/>

    </div>
  )
}

export default Page