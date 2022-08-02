import React from "react";
import useOrders from "../../hooks/useOrder";

export const DetailOrder = () => {
  const { order } = useOrders();

  return (
    <>
      {order.map((data) => (
        <div key={data.id} className="d-flex">
          <ul>
            <li className="d-flex">
              {" "}
              <p className="fw-bold me-2">order id:</p>
              {data.id}
            </li>
            <li className="d-flex">
              {" "}
              <p className="fw-bold me-2">number:</p> {data.number}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">name:</p> {data.name}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">currency:</p>
              {data.currency}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">total:</p>
              {data.totals.total}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">discount:</p>
              {data.totals.discount}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">tax:</p>
              {data.totals.tax}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">weight:</p>
              {data.totals.weight}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">shipping:</p>
              {data.totals.shipping}
            </li>
          </ul>

          <ul>
            <li className="d-flex">
              {" "}
              <p className="fw-bold me-2">status:</p>
              {data.status.status}
            </li>
            <li className="d-flex">
              {" "}
              <p className="fw-bold me-2">financial:</p> {data.status.financial}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">ecartapi:</p> {data.status.ecartapi}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">tags:</p>
              {data.tags[0]}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">first name:</p>
              {data.billingAddress.firstName}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">last name:</p>
              {data.billingAddress.lastName}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">address:</p>
              {data.billingAddress.address1}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">country:</p>
              {data.billingAddress.country.name}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">code:</p>
              {data.billingAddress.country.code}
            </li>
          </ul>

          <ul>
            <li className="d-flex">
              {" "}
              <p className="fw-bold me-2">state:</p>
              {data.billingAddress.state.name}
            </li>
            <li className="d-flex">
              {" "}
              <p className="fw-bold me-2">city:</p> {data.billingAddress.city}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">postal code:</p>{" "}
              {data.billingAddress.postalCode}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">phone:</p>
              {data.billingAddress.phone}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">company:</p>
              {data.billingAddress.company}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">shipping Address:</p>
              {data.shippingAddress.country.name}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">created:</p>
              {data.billingAddress.address1}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">country:</p>
              {data.dates.createdAt}
            </li>
            <li className="d-flex">
              <p className="fw-bold me-2">Paid:</p>
              {data.dates.paidAt}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};
