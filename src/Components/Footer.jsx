import React  from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Axios from 'axios';
import GiftCardModal from './GiftCardModal';


function Navigation () {
    const [subscriber, setSubscriber] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const updateSubscriber = (event) => {
        const newSubscriber = event.target.value;
        setSubscriber(newSubscriber);
    };

    const handleSubscriber = (event) => {
        event.preventDefault();
        console.log(subscriber);
        Axios.post("https://donut-shop-442d50e335b6.herokuapp.com/subscribers", {
            email: subscriber
        }).then(() => {
            console.log("Success");
            setShowAlert(true);
            setShowErrorAlert(false);
        }).catch(error => {
            console.error("Error:", error);
            setShowAlert(false); // Hide success alert if shown previously
            setShowErrorAlert(true); // Show the error alert;
        });
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section id="footer" class="mt-2 theme-yellow">
            <div class="container">
                <div class="mb-4 text-center text-md-left">
                    <img alt="Big Bite Donuts Logo" src="./Images/donut-logo-v2.png" class="img-fluid navigation-logo"/>
                </div>
                <div class="d-flex flex-lg-row flex-column justify-content-between align-items-center border-bottom border-dark pb-4 mb-4">
                    <div class="d-flex flex-row align-items-start mb-4 mb-lg-0 main-text-font">
                        <div class="mr-5"><Link to="/" className="text-dark">Home</Link></div>
                        <div class="mr-5"><Link to="/order" className="text-dark">Order Online</Link></div>
                        <div class=""><Link class="text-dark" to="#" onClick={() => openModal()}>Gift Card</Link></div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="mr-2"><i class="fa-solid fa-envelope fa-lg"></i></div>
                        <div class="mr-2"><i class="fa-brands fa-square-instagram fa-lg"></i></div>
                        <div class="mr-2"><i class="fa-brands fa-facebook fa-lg"></i></div>
                        <div class=""><i class="fa-brands fa-square-twitter fa-lg"></i></div>
                    </div>
                </div>
                <div className='d-flex flex-lg-row flex-column justify-content-between align-items-top'>
                    <div class="d-flex flex-column pb-4 text-center text-md-left">
                        <h4 class="mb-3 header-font">Stay in the loop</h4>
                        <form onSubmit={handleSubscriber}>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" style={{height: '50px'}} placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={updateSubscriber}/>
                                <div class="input-group-append">
                                    <button class="btn btn-dark text-white" type="submit">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <div class="text-muted"><small>This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small></div>
                        {showAlert && (
                            <div class="alert alert-success mt-3" role="alert">
                                Thank you for subscribing!
                            </div>
                        )}
                        {showErrorAlert && (
                            <div class="alert alert-danger mt-3" role="alert">
                                Email already exists. Please use a different email.
                            </div>
                        )}
                    </div>
                    <div className='d-flex flex-row justify-content-center'>
                        <i class="fa-brands fa-cc-visa fa-2x px-2"></i>
                        <i class="fa-brands fa-cc-mastercard fa-2x px-2"></i>
                        <i class="fa-brands fa-cc-discover fa-2x px-2"></i>
                        <i class="fa-brands fa-cc-amex fa-2x px-2"></i>
                        <i class="fa-brands fa-cc-amazon-pay fa-2x px-2"></i>
                        <i class="fa-brands fa-cc-stripe fa-2x px-2"></i>
                        <i class="fa-brands fa-cc-paypal fa-2x pl-2"></i>
                    </div>
                </div>
            </div>
            <GiftCardModal show={showModal} handleClose={closeModal} />
        </section>
    );
}

export default Navigation