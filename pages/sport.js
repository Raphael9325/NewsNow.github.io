
import Meta from '../components/Meta';
import Header from '../components/Header';
import News from '../components/News';

export default function Home({ newsFromApi }) {
  
  let news = '';

  if (newsFromApi)
  {
    news = newsFromApi.articles;
  }

  return (
    <div>
      <Meta title='NewsNow' keywords='Get latest sports news now' description='Get News on sports' />
      <Header title='TOP HEADLINES' />
      <News news={news} />
    </div>
  )
}

export const getStaticProps = async() => 
{
  const res = await fetch('https://newsapi.org/v2/top-headlines?q=sports&apiKey=d61ad48b0a3c4aa0a149fd4e8a9f4b80');
  const newsFromApi = await res.json();

  return {
    props: {
      newsFromApi
    }
  }
}
