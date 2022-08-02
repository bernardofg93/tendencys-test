import React from "react";
import Modal from "react-bootstrap/Modal";
import { FormOrder } from "../Form";
import useOrders from "../../hooks/useOrder";
import { DetailOrder } from "../DetailOrder";

export const ModalDialog = () => {
  const { modalShow, modal, showDetailOrder, viewDetailOrder } = useOrders();

  const onHide = (val) => {
    modal(val);
    showDetailOrder(false);
  };

  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => onHide(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {!viewDetailOrder ? 'Add product' : 'Order detail' }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{!viewDetailOrder ? <FormOrder /> : <DetailOrder />}</Modal.Body>
      </Modal>
    </>
  );
};
