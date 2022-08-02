import React from "react";
import { Outlet } from "react-router-dom";
import { OrdersProvider } from "../context/OrderProvider";
import { NavBar } from "../components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

export const Home = () => {
  return (
    <>
      <OrdersProvider>
        <NavBar />
        <div className="container">
          <Container className="container p-3">
            <Row>
              <Col>
                <Outlet />
              </Col>
            </Row>
          </Container>
        </div>
      </OrdersProvider>
    </>
  );
};
