import Styles from '../styles/Menu.module.css';
import Link from 'next/link';

export default function Menu({ showMenu })
{
  return (
    <div className={`${Styles.menu} ${showMenu ? Styles.showMenu: ''}`}>
      <Link href='/'><a>Home</a></Link>
      <Link href='/sport'><a>Sport</a></Link>
      <Link href='/politics'><a>Politics</a></Link>
      <Link href='/gadgets'><a>Gadgets</a></Link>
    </div>
  )
}