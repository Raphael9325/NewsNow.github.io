import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import Styles from '../styles/Searchbar.module.css';
import Link from 'next/link'

export default function Searchbar({ showBar })
{
  const [news, setNews] = useState('');

  return (
    <div className={`${Styles.searchContainer} ${showBar ? Styles.showBar : ''}`}>
      <div>
        <input id={Styles.searchbar} type="text" placeholder="Search News" value={news} onChange={(e) => setNews(e.target.value)} />
        <Link href='/news/[search]' as={`/news/${news}`}>
          <FaSearch />
        </Link>
      </div>
    </div>
  )
}