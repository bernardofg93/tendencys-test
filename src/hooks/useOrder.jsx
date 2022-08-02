import { useContext } from "react";
import OrdersProvider from "../context/OrderProvider";

const useOrders = () => {
  return useContext(OrdersProvider);
};

export default useOrders;
