import Styles from '../styles/Nav.module.css';
import { FaBars } from 'react-icons/fa';
import  { FaSearch }  from 'react-icons/fa';
import { useState } from 'react';

export default function Nav({ showSearchbar, showMenu, setShowSearchbar, setShowMenu })
{
  return (
    <div className={Styles.navbar}>
      <h1>NewsNow</h1>
      <ul className={Styles.menu}>
        <li>
          <FaSearch onClick={() => setShowSearchbar(!showSearchbar)} />
        </li>
        <li>
          <FaBars onClick={() => setShowMenu(!showMenu)} />
        </li>
      </ul>
    </div>
  )
}