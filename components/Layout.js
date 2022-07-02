import Styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Searchbar from './Searchbar';
import Menu from './Menu';
import { useState } from 'react';

export default function Layout({ children })
{
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={Styles.container}>
        <Nav showSearchbar={showSearchbar} showMenu={showMenu} setShowSearchbar={setShowSearchbar} setShowMenu={setShowMenu} />
        <Searchbar showBar={showSearchbar} />
        <Menu showMenu={showMenu} />
        { children }
      </div>
    </>
  )
}