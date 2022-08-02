import React from "react";
import Table from "react-bootstrap/Table";
import { ModalDialog } from "../Modal";
import useOrders from "../../hooks/useOrder";
import { Alert } from "../Toast";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import "./styles.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const OrderList = () => {
  const { orders, getOrderById, modal, showDetailOrder } = useOrders();

  if (!orders || orders.length === 0) {
    return (
      <Container className="spinner">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  const viewOrderDetail = (id) => {
    const order = orders.filter((order) => order.id === id);
    getOrderById(order);
    showDetailOrder(true);
    modal(true);
  };

  return (
    <>
      <Alert />
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th className="text-center">Number</th>
            <th className="text-center">Status</th>
            <th className="text-center">Name</th>
            <th className="text-center">Phone</th>
            <th className="w-25 text-center">Options</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((item) => (
            <tr key={item?.id}>
              <td className="text-center">{item?.name}</td>
              <td className="text-center">{item?.status.status}</td>
              <td className="text-center">
                {item?.billingAddress.firstName} {""}{" "}
                {item?.billingAddress.lastName}
              </td>
              <td className="text-center">{item?.billingAddress.phone}</td>
              <td className="flex-bx">
                <Link to={`/order/${item.id}`} type="button">
                  <Button variant="warning">View order</Button>
                </Link>
                {"   "}
                <Button
                  variant="dark"
                  onClick={() => viewOrderDetail(item?.id)}
                >
                  View Detail
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ModalDialog />
    </>
  );
};
