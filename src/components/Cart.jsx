import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({items, onIncrement, onDecrement, onDelete, onCartHandler}) => {

  const navigate = useNavigate();

  const onTotal = () => {
    let summ = 0;
    items.forEach(item => summ += item.quantity * item.price);

    return summ;
  }

  const onTotalQuantity = () => {
    let quantity = 0;
    items.forEach(item => quantity += item.quantity);

    return quantity;
  }

  const onSubmitHandler = () => {
    onCartHandler();
    navigate('/submit');
  }

  return (
    <>
      <div className={styles.modal} onClick={onCartHandler}></div>
      <div className={styles.wraper}>
        <div className={styles.titleWrapper}>
          <h2>You chose these products</h2>
          <button onClick={onCartHandler} className={styles.close}>X</button>
        </div>
        <div>
          <ul className={styles.cart}>
            {items.map(item => (
              <li key={item.id} className={styles.cartItem}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.price}>Price {item.price}$</p>
                <p><img src={item.image} alt={item.title} className={styles.picture}/></p>
                <div className={styles.buttonWraper}>
                  <button onClick={() => onDecrement(item.id)} className={styles.buttons}>-</button>
                  <p className={styles.quantity}>{item.quantity}</p>
                  <button onClick={() => onIncrement(item.id)} className={styles.buttons}>+</button>
                  <p className={styles.value}>Total value {(item.price*item.quantity).toFixed(2)}$</p>
                  <button onClick={() => onDelete(item.id)} className={styles.delete}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.totalWraper}>
            <div className={styles.total}>
              <p>Total products quantity - {onTotalQuantity()}</p>
              <p>Total price of all products - {(onTotal()).toFixed(2)} $</p>
            </div>
            <p>
              <button className={styles.proceed} onClick={onSubmitHandler}>Make an order</button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;