// ModalComponent.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import { useEffect, useState } from "react";

function GiftCardModal({ show, handleClose, data }) {
    const [isContentVisible, setContentVisible] = useState(false);

    const toggleContent = (value) => {
        if (value == 1) {
            setContentVisible(false);
        }
        else {
            setContentVisible(true);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='header-font'><img src="./Images/Lunas-Donut-Shop.png" alt="Big Bite Donuts Logo" class="img-fluid navigation-logo"/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className='mb-3'>Gift Card Amount</h4>
                <select class="form-control mb-3">
                    <option>$10.00</option>
                    <option>$20.00</option>
                    <option>$25.00</option>
                    <option>$50.00</option>
                </select>
                <h4 className='mb-3'>Your Details</h4>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1" hidden>Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1" hidden>Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" hidden>Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Personal message (optional)'></textarea>
                    </div>
                </form>
                <h4>Delivery Details</h4>
                <form>
                    <h6>Send this card to myself</h6>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={() => toggleContent(1)}/>
                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={() => toggleContent(0)}/>
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                    {isContentVisible && (
                        <div>
                            <div class="form-group mt-3">
                                <label for="exampleFormControlInput1" hidden>Name</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Recipient name"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1" hidden>Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Recipient's email address"/>
                            </div>
                            <h6>Delivery</h6>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="sendOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">Send Instantly</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="sendOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">Send On A Future Date</label>
                            </div>
                        </div>
                    )}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="white" onClick={handleClose} className='w-100'>
                    <b>Add to cart</b>
                </Button>
                <Button variant="warning" onClick={handleClose} className='theme-yellow'>
                    <i class="fa-solid fa-x"></i>
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default GiftCardModal;