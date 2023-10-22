import React  from 'react';
import { useState } from "react";
import Axios from 'axios';

function SignUp () {
    const [subscriber, setSubscriber] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

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
            setShowAlert(false);
            setShowErrorAlert(true);
        });
    };

    return (
        <section id="sign-up" className='container'>
            <form onSubmit={handleSubscriber}>
            <div class="d-flex justify-content-center">
                <div class="d-flex justify-content-center flex-column text-center pb-4">
                    <h4 class="mb-3 header-font">Stay in the loop</h4>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" style={{height: '50px'}} placeholder="Recipient's username" aria-label="Email" aria-describedby="basic-addon2" onChange={updateSubscriber}/>
                        <div class="input-group-append">
                            <button class="btn theme-yellow" type="submit">Sign Up</button>
                        </div>
                    </div>
                    <div class="text-muted"><small>This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small></div>
                    {showAlert && (
                        <div class="alert alert-success mt-3 text-center" role="alert">
                            Thank you for subscribing!
                        </div>
                    )}
                    {showErrorAlert && (
                        <div class="alert alert-danger mt-3 text-center" role="alert">
                            Email already exists. Please use a different email.
                        </div>
                    )}
                </div>
            </div>
            </form>
        </section>
    );
}

export default SignUp