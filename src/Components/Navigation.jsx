import React  from 'react';
import { Link } from 'react-router-dom';
import GiftCardModal from './GiftCardModal';
import { useState, useEffect } from 'react';
import { useOrderContext } from './OrderContext';

function Navigation ({ number }) {
    const [showModal, setShowModal] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const { navOrderCount } = useOrderContext();

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    };

    const closeSearchBar = () => {
        setShowSearchBar(false);
    };

    const handleInputClick = (e) => {
        e.stopPropagation();
    };

    const [orderNumber, setOrderNumber] = useState(0);

    useEffect(() => {
        setOrderNumber(number);
    }, []);

    return (
        <nav id="main-navigation" className="navbar navbar-expand-lg navbar-light my-2">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="./Images/Lunas-Donut-Shop.png" alt="Big Bite Donuts Logo" className="img-fluid navigation-logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse main-text-font ${showSearchBar ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li class="nav-item mx-2">
                            <Link class="nav-link text-dark" to="/">HOME</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link class="nav-link text-dark" to="/order">ORDER ONLINE</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link class="nav-link text-dark" to="#" onClick={() => openModal()}>GIFT CARD</Link>
                        </li>
                        <li class="nav-item mx-2 d-md-none">
                            <Link class="nav-link text-dark" to="#">SIGN IN</Link>
                        </li>
                    </ul>
                    <div class="d-flex flex-row align-items-center">
                    <a className="btn btn-outline-dark mx-2" href="/order">Order for Pickup</a>
                        {/* Search bar */}
                        <div className="position-relative d-flex align-items-center">
                            {showSearchBar && (
                                <input
                                    type="text"
                                    className="form-control pr-4"
                                    placeholder="Search..."
                                    onClick={handleInputClick}
                                />
                            )}
                            {/* {showSearchBar && (
                                <i className="fas fa-times position-absolute end-0 mx-2 mt-1" onClick={closeSearchBar}></i>
                            )} */}
                            <i className={`fa ${showSearchBar ? 'fa-times' : 'fa-search'} mx-2`} onClick={toggleSearchBar}></i>
                            <i class="fa fa-user mx-2 d-none d-lg-block"></i>
                            <i class="fa fa-shopping-cart mx-2 d-none d-lg-block"></i><span>{navOrderCount}</span>
                        </div>
                    </div>
                </div>
            </div>
            <GiftCardModal show={showModal} handleClose={closeModal} />
        </nav>
    );
}

export default Navigation