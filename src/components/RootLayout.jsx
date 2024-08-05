import { Outlet } from "react-router-dom";
import { useState } from 'react';
import Header from './Header';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const onCartHandler = () => {
    setShowCart(!showCart);
  }

  const onIncrement = (id) => {
    let newItems = [];

    items.forEach(item => {
      if(item.id === id) {
        item.quantity += 1;
      }
      newItems.push(item);
    });
    setItems(newItems);
  };

  const onDecrement = (id) => {
    let newItems = [];

    items.forEach(item => {
      if(item.id === id) {
        item.quantity -= 1;
      }
      newItems.push(item);
    });
    newItems = newItems.filter(item => item.quantity !== 0);
    newItems.length === 0 && setShowCart(false);
    setItems(newItems);
    }

  const onDelete = (id) => {
    const newItems = items.filter(item => item.id !== id);
    newItems.length === 0 && setShowCart(false);
    setItems(newItems);
  }

  return (
    <>
      <ToastContainer />
      <Header 
        items={items} 
        onIncrement={onIncrement} 
        onDecrement={onDecrement} 
        onDelete={onDelete}
        onCartHandler={onCartHandler}
        showCart={showCart}
      />
      <main>
        <Outlet context={[items, setItems]}/>
      </main>
    </>
  )
}

export default RootLayout;