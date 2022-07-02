import Styles from '../styles/News.module.css';
import NewsItem from './NewsItem';

export default function News({ news })
{
  const id = Math.round(Math.random() * 10000);
  return (
    <div className={Styles.news}>
      {news.map(newsItem => <NewsItem key={id} newsItem={newsItem} />)}
    </div>
  )
}