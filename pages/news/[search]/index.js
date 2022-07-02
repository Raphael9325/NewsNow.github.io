import { useRouter } from "next/router";
import Meta from '../../../components/Meta';
import Header from '../../../components/Header';
import News from '../../../components/News'

export default function Index ({ newsFromApi })
{
  const router = useRouter();
  const {search} = router.query

  let news = '';

  if (newsFromApi)
  {
    news = newsFromApi.articles;
  }

  return (
    <div>
      <Meta title={search} keywords={`Get latest news on ${search}`} description={`Get latest news on ${search}`} />
      <Header title={`Top Headlines on ${search}`} />
      <News news={news} />
    </div>
  )
}

export const getServerSideProps = async(context) => 
{
  const res = await fetch(`https://newsapi.org/v2/top-headlines?language=en&q=${context.params.search}&apiKey=d61ad48b0a3c4aa0a149fd4e8a9f4b80`);
  const newsFromApi = await res.json();

  return {
    props: {
      newsFromApi
    }
  }
}
