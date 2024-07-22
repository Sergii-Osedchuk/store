import styles from './SubmitPage.module.css';
import { useOutletContext, useNavigate } from 'react-router-dom';

const SubmitPage = () => {

  const [items, setItems] = useOutletContext();

  const navigate = useNavigate();
  
  const onTotal = () => {
    let summ = 0;
    items.forEach(item => summ += item.quantity * item.price);

    return summ.toFixed(2);
  }

  const onTotalQuantity = () => {
    let quantity = 0;
    items.forEach(item => quantity += item.quantity);

    return quantity;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    navigate('/final');
    setItems([]);
  }

  return (
    <div>
        <p className={styles.checkout}>Checkout information</p>
          <div className={styles.wraper}>
            <form action='' method='post' onSubmit={submitHandler}>
              <div className={styles.form}>
                <legend>Delivery information</legend>
                <label htmlFor='name'>Name*</label>
                <input id='name' autoComplete='on' required></input>
                <label htmlFor='surname'>Surname*</label>
                <input id='surname' autoComplete='on' required></input>
                <label htmlFor='address'>Delivery address*</label>
                <input id='address' autoComplete='on' required></input>
                <label htmlFor='phone'>Phone number*</label>
                <input id='phone' autoComplete='on' type='tel' required></input>
                <label htmlFor='mail'>Email*</label>
                <input id='mail' autoComplete='on' type='email' required></input>
                <label htmlFor='comment'>Comment to your order</label>
                <textarea id='comment'></textarea>
                <p>Please check your order before submit</p>
                <button type='submit' className={styles.submit} >Submit</button>
              </div>
            </form>
              <div className={styles.orderWraper}>
                <p className={styles.order}>Your order</p>
                <div>
                  <ul className={styles.cart}>
                    {items.map(item => (
                      <li key={item.id} className={styles.cartItem}>
                        <h2 className={styles.title}>{item.title}</h2>
                        <p className={styles.price}>Price {item.price}$</p>
                        <p><img src={item.image} alt={item.title} className={styles.picture}/></p>
                        <p className={styles.quantity}> {item.quantity} </p>
                        <p className={styles.value}>Total value {(item.price*item.quantity).toFixed(2)}$</p>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.total}>
                    <p className={styles.total__quantity}>Total quantity {onTotalQuantity()}</p>
                    <p className={styles.total__value}>Total value {onTotal()} $</p>
                  </div>
                </div>
              </div>
            </div>
      </div>
  )
}

export default SubmitPage;