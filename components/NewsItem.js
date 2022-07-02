import Styles from '../styles/News.module.css';
import Link from 'next/link'
import Image from 'next/image'

export default function NewsItem({ newsItem })
{
  return (
    <div className={Styles.newsItem}>
      <Link href={newsItem.url} target='_blank'>
        <img className={Styles.img} src={newsItem.urlToImage} alt="News Image" />
      </Link>
      <h3>{newsItem.title}</h3>
      <p className={Styles.author}>{newsItem.author === '' ? '' : 'Author: ' + newsItem.author}</p>
      <p className={Styles.content}>{newsItem.content}</p>
    </div>
  )
}