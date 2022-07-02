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
      <Meta title='Gadgets' keywords='Get your gadgets News now' description='Get News on gadgets and latest tech.' />
      <Header title='TOP HEADLINES' />
      <News news={news} />
    </div>
  )
}

export const getStaticProps = async() => 
{
  const res = await fetch('https://newsapi.org/v2/top-headlines?q=tech&apiKey=d61ad48b0a3c4aa0a149fd4e8a9f4b80');
  const newsFromApi = await res.json();

  return {
    props: {
      newsFromApi
    }
  }
}
