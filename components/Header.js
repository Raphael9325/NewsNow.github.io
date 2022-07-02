import Styles from '../styles/Header.module.css';

export default function Header({ title })
{
  return (
    <div className={Styles.header}>
      <h2>{ title } </h2>
    </div>
  )
}