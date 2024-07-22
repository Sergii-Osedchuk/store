import styles from '../components/Item.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Item = ({title, price, image, onAddItem, item}) => {
  const navigate = useNavigate();
  const [addedItem, setAddedItem] = useState(false);
  let buttonName = 'Add to cart';
  let bgc = '#ed1c24'

  const addItemHandler = () => {
    onAddItem(item);
    setAddedItem(true);
  }

  if (addedItem) {
    buttonName = 'In the cart';
    bgc='violet';
  }

  return (
    <div className={styles.good}>
      <img src={image} alt={item.title} onClick={() => navigate(`/products/${item.id}`)}/>
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>{price} $</p>
      <button type='text' className={styles.add} onClick={addItemHandler} style={{backgroundColor: bgc}}>{buttonName}</button>
    </div>
  )
}

export default Item;