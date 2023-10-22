// ModalComponent.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';

function PickupModal({ show, handleClose, data }) {
  // const donuts = JSON.parse(donut);
    const initialDate = new Date();
// const [modalPickup, setModalPickup] = useState('');
    const [selectedDate, setSelectedDate] = useState(initialDate);
    const [selectedTime, setSelectedTime] = useState('12:00');

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='header-font'><img src="./Images/Lunas-Donut-Shop.png" alt="Big Bite Donuts Logo" class="img-fluid navigation-logo"/></Modal.Title>
            </Modal.Header>
            <Modal.Body className='border-bottom'>
                <div className='mb-3 px-3 py-2 text-secondary bg-light'><i class="fa-solid fa-map-pin"></i> Pickup From 1234 South 56th Street</div>
                <h4 className='header-font mb-4'>Schedule Order</h4>
                <div><i class="fa fa-check-circle" aria-hidden="true"></i> $10.00 minimum</div>
            </Modal.Body>
            <Modal.Body>
                <div className='mb-2 font-weight-bold'>Select pickup time slot</div>
                <div className='mb-1'>Date:</div>
                <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="MMMM d, yyyy" placeholderText="Select a date" className='mb-3'/>
                <div className='mb-1'>Time:</div>
                <TimePicker
                    value={selectedTime}
                    onChange={time => setSelectedTime(time)}
                    format="HH:mm"
                    disableClock={true}
                    maxDetail="minute"
                    minTime="08:00"
                    maxTime="18:00"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="white" onClick={handleClose} className='w-100'>
                    <b>Change</b><span className='text-secondary'>{" " + format(selectedDate, 'MMM d') + " " + "(" + selectedTime + ")"}</span>
                </Button>
                <Button variant="warning" onClick={handleClose} className='theme-yellow'>
                    <i class="fa-solid fa-x"></i>
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PickupModal;