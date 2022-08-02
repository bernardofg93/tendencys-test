import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import useOrders from "../../hooks/useOrder";

export const Alert = () => {
  const { toastShow, toast } = useOrders();
  
  return (
    <Row>
      <Col xs={6}>
        <Toast 
          onClose={() => toast(false)} 
          show={toastShow} 
          delay={3000} 
          autohide 
          className="bg-warning"
          role="alert" 
          >
          <Toast.Body className="fw-bold">added item!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};
