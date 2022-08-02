import { useState, useEffect, createContext } from "react";
import axios from "../axios/axios";
import { config } from "../axios/config";

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [toastShow, setToastShow] = useState(false);
  const [viewDetailOrder, setViewDetailOrder] = useState(false);
  const [numberOrder, setNumberOrder] = useState(null)

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await axios("/orders", config);
        const { orders } = data;
        setOrders(orders);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  const getOrderById = (order) => {
    setOrder(order);
  }

  const getItemsByOrder = (order) => {
    setItems(order);
  }

  const submitOrder = async order => {
    let newItem = [];
    newItem.push(order);
    setItems([...items, newItem])
    setToastShow(true);
    setModalShow(false);

  }

  const modal = (show) => {
    setModalShow(show)
  }

  const toast = (show) => {
    setToastShow(show);
  }

  const showDetailOrder = (show) => {
    setViewDetailOrder(show);
  }

  const setOrderNum = (number) => {
    setNumberOrder(number);
  }

  return (
    <OrdersContext.Provider
      value={{
        orders,
        submitOrder,
        modal,
        modalShow,
        toastShow,
        toast,
        getOrderById,
        order,
        showDetailOrder,
        viewDetailOrder,
        setOrderNum,
        numberOrder,
        getItemsByOrder,
        items
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export { OrdersProvider };

export default OrdersContext;
