import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/img/logo.jpeg";
import Button from "react-bootstrap/Button";
import useOrders from "../../hooks/useOrder";
import "./styles.css";
import { useParams } from "react-router-dom";

export const NavBar = () => {
  const { modal, numberOrder, orders } = useOrders();
  const { id } = useParams();

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">
          <img
            alt=""
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        {!id ? <span> Test: Bernardo Flores </span> : ""}
        <div className="bx-number">
          {!id ? "Total orders" : "Number order"}
          <div className="number-container">
            {!id ? <>{orders.length}</> : numberOrder}
          </div>
        </div>
        {!id ? (
          <></>
        ) : (
          <Button variant="dark" onClick={() => modal(true)}>
            Add product
          </Button>
        )}
      </Container>
    </Navbar>
  );
};
