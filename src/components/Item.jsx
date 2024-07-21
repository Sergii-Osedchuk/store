import styles from '../components/Item.module.css';
import { useNavigate } from 'react-router-dom';


const Item = ({title, price, image, onAddItem, item}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.good}>
      <img src={image} alt={item.title} onClick={() => navigate(`/products/${item.id}`)}/>
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>{price} $</p>
      <button type='text' className={styles.add} onClick={() => onAddItem(item)}>Add to Cart</button>
    </div>
  )
}

export default Item;