import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Item from '../components/Item';
import styles from './Products.module.css';
import Filter from '../components/Filter';
import Loader from '../components/Loader';

const Products = ({category}) => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useOutletContext([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  }

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(inputValue.trim().toLowerCase())
  );

  const onAddItem = (item) => {
    const newItemIndex = products.findIndex(device => device.id === item.id);

    const newIndex = items.findIndex(item => item.id === products[newItemIndex].id);

    if (newIndex === -1) {
      const newItem = products[newItemIndex];
      newItem.quantity = 1;
      setItems(prev => [...prev, newItem])
    } 
    if(newIndex !== -1) {
      setItems(prev => ([...prev.filter(item => item.id !== prev[newIndex].id), {...prev[newIndex], quantity: prev[newIndex].quantity + 1}]) )
    }
  }

  let url = `https://fakestoreapi.com/products/category/${category}`;

  if (!category) {
    url = 'https://fakestoreapi.com/products/';
  }

    useEffect(() => {
      const fetchData = async() => {
        setLoading(true);
        const data = await fetch(url);
        const json = await data.json();
        setLoading(false);
        setProducts(json);
      }

      fetchData();

      }, [url]);


  return (
    <>
      <Filter inputValue={inputValue} onChangeHandler={inputHandler}/>
      {loading ? <Loader /> : <ul className={styles.goods}>
        {filteredProducts.map(item => <Item 
            key={item.id} 
            title={item.title}
            price={item.price}
            image={item.image}
            item={item}
            onAddItem={onAddItem}
          />)}
      </ul>}
    </>
  )
}

export default Products;