import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import useOrders from "../../hooks/useOrder";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';

export const FormOrder = () => {
  const { submitOrder } = useOrders();

  const [formValues, setformValues] = useState({
    sku: "",
    name: "",
    quantity: "",
    price: "",
  });

  const handleChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitOrder(formValues);
  };

  return (
    <Form onSubmit={handleSubmit} onChange={handleChange}>
      <Container>
      <Form.Group className="mb-3">
        <Form.Label>SKU</Form.Label>
        <Form.Control type="text" name="sku" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Quatity</Form.Label>
        <Form.Control type="number" name="quantity" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <InputGroup>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            aria-label="Amount (to the nearest dollar)"
            name="price"
            required
          />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Row className="justify-content-end p-2 mt-4">
          <Button 
            variant="dark" 
            type="submit"
            className="p-2 fs-4 fw-bold"
            >
            Guardar
          </Button>
      </Row>
      </Container>
    </Form>
  );
};
