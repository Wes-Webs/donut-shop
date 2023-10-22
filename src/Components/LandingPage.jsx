import React from 'react';
import './css/LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage () {
    return (
        <section id="landing-page">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="landing-page-background">
                    <h1 className="text-black main mb-5 header-font">Creating smiles daily since 2017</h1>
                </div>
                <div className="btn theme-yellow landing-button py-3">
                    <Link to="/order" className="text-dark">Order Now!</Link>
                </div>
            </div>
        </section>
    );
}

export default LandingPage