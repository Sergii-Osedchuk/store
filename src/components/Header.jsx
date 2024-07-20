import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from './Header.module.css';
import Cart from "./Cart";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = ({items, onIncrement, onDecrement, onDelete, showCart, onCartHandler}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${showMenu && styles.active}`}>
        <div className={`${styles.hamburger} ${showMenu && styles.active}`} onClick={handleClick}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={`${styles.list} ${showMenu && styles.active}`} onClick={handleClick} >
          <li>
            <NavLink to='/' className={({isActive}) => 
              isActive ? styles.active : undefined}>Our vibe</NavLink>
          </li>
          <li>
            <NavLink to='/products' className={({isActive}) => 
              isActive ? styles.active : undefined}>All products</NavLink>
          </li>
          <li>
            <NavLink to='/man' className={({isActive}) => 
              isActive ? styles.active : undefined}>Men`s clothing</NavLink>
          </li>
          <li>
            <NavLink to='/woman' className={({isActive}) => 
              isActive ? styles.active : undefined}>Women`s clothing</NavLink>
          </li>
          <li>
            <NavLink to='/jewellery' className={({isActive}) => 
              isActive ? styles.active : undefined}>Jewellery</NavLink>
          </li>
          <li>
            <NavLink to='/electronics' className={({isActive}) => 
              isActive ? styles.active : undefined}>Electronics</NavLink>
          </li>
          <li>
            <NavLink to='/contacts' className={({isActive}) => 
              isActive ? styles.active : undefined}>Contacts</NavLink>
          </li>
        </ul>
        <div className={styles.cart}>
          <MdOutlineShoppingCart onClick={onCartHandler} className={styles.icon} />
          <div onClick = {onCartHandler} className={styles.length}>{items.length}</div>
        </div>
      </nav>
      {showCart && items.length > 0 && <Cart items={items} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} onCartHandler={onCartHandler}/>}
    </header>
  )
}

export default Header;