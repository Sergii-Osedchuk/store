import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import Cart from "./Cart";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = ({items, onIncrement, onDecrement, onDelete, showCart, onCartHandler}) => {

  return (
    <header>
      <div>
        <nav>
          <div>
            <ul className={styles.list}>
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
          </div>
          <div className={styles.cart}>
            <MdOutlineShoppingCart onClick={onCartHandler} className={styles.icon} />
            <div onClick = {onCartHandler} className={styles.length}>{items.length}</div>
          </div>
        </nav>
        {showCart && items.length > 0 && <Cart items={items} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} onCartHandler={onCartHandler}/>}
      </div>
    </header>
  )
}

export default Header;