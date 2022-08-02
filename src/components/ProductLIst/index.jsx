import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { ModalDialog } from "../Modal";
import useOrders from "../../hooks/useOrder";
import { Alert } from "../Toast";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const ProductList = () => {
  const {
    orders,
    getItemsByOrder,
    items,
    setOrderNum,
  } = useOrders();
  const { id } = useParams();

  useEffect(() => {
   const fetchOrders = async () => {
    const order = await orders.filter((item) => item.id === id);
    setOrderNum(order[0]?.number);
    const items = order.map((order) => order.items);
    getItemsByOrder(items);
   }
   fetchOrders(); 
  }, [id, orders]);

  if (!items || items.length === 0) {
    return (
      <Container className="spinner">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <>
      <Alert />
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item[0].id}>
              <td>{item[0]?.sku}</td>
              <td>{item[0]?.name}</td>
              <td>{item[0]?.quantity}</td>
              <td>{item[0]?.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Link to="/">
        <Button variant="warning">Go back</Button>
      </Link>
      <ModalDialog />
    </>
  );
};
