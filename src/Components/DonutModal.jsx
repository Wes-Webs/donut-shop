// ModalComponent.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useOrderContext } from './OrderContext';

function DonutModal({ show, handleClose, data  }) {
  const parsedPrice = Number(data.price);
  const initialPrice = !isNaN(Number(parsedPrice)) ? parsedPrice : "Unavailable";

  const [donutCount, setDonutCount] = useState(1);
  const [totalPrice = initialPrice, setTotalPrice] = useState(initialPrice);

  useEffect(() => {
    setTotalPrice(donutCount * initialPrice);
  }, [donutCount, initialPrice]);

  const updateCount = (newValue) => {
    const newCount = Math.max(1, newValue);
    setDonutCount(newCount);
  };

  const updatePrice = (newValue) => {
    const newPrice = Math.max(initialPrice, newValue);
    setTotalPrice(newPrice);
  };

  const resetState = () => {
    setDonutCount(1);
  };

  const handleCloseModal = () => {
    resetState(); // Call reset function when the modal is closed
    handleClose();
  };

  const { updateOrderCount } = useOrderContext();

  const handleOrderCount = () => {
    updateOrderCount();
    handleCloseModal();
  };

  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header>
        <Modal.Title className='header-font'>{data.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-0'>
        {/* Display the data received */}
        <img alt="Big Bite Donuts Logo" src={data.image} className="w-100 h-100 "/>
      </Modal.Body>
      <Modal.Body className=''>
        {/* Display the data received */}
        <h4>${data.price}</h4>
        <div className='d-flex flex-row align-items-center'>
            <i class="fa-solid fa-square-plus fa-2x" onClick={() => {updateCount(donutCount + 1); updatePrice(totalPrice + initialPrice);}}></i>
            <div className='h4 mx-2 my-3'>
              {donutCount}
            </div>
            <i class="fa-solid fa-square-minus fa-2x" onClick={() => {updateCount(donutCount - 1); updatePrice(totalPrice - initialPrice);}}></i>
        </div>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="white" onClick={handleOrderCount} className='w-100'>
              <b>Add to order</b> <span className='text-secondary'>${totalPrice}</span>
          </Button>
          <Button variant="warning" onClick={handleClose} className='theme-yellow'>
              <i class="fa-solid fa-x"></i>
          </Button>
      </Modal.Footer>
      {/* <Navigation number={navOrderCount} /> */}
    </Modal>
  );
}

export default DonutModal;