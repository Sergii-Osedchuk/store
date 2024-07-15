import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './ProductDetail.module.css';
import Loader from '../components/Loader';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [items, setItems] = useOutletContext([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate('/products');
  }

  let { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const result = await data.json();
      setLoading(false);

      setProduct(result);
    }

    fetchData();
  }, [productId]);

  const onAddItem = () => {
    const newItems = [];

    items.forEach(item => {
      if (item.id === product.id) {
        item.quantity += 1;
      }
      newItems.push(item);
    }
    );
    if (items.filter(item => item.id !== product.id).length === items.length){
      newItems.push({...product, quantity: 1})
    }
    setItems(newItems)
  };

  return (
    <>
      {loading ? <Loader /> : <div className={styles.wraper}>
        <div className={styles.titleWraper}>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.category}>Category - {product.category}</p>
          <button onClick={onNavigate} className={styles.button}>X</button>
        </div>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p className={styles.price}>Price {product.price}$</p>
        <button onClick={onAddItem} className={`${styles.button} ${styles.addButton}`}>Add to Cart</button>
      </div>}
    </>
  );
};

export default ProductDetail;
