import React  from 'react';
import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import DonutModal from './DonutModal';
import Axios from 'axios';

function OrdersPage () {

    // Grab donut data
    const [favDonuts, setFavDonuts] = useState([]);
    const [cinRoll, setCinRoll] = useState([]);
    const [smDonuts, setSmDonuts] = useState([]);
    const [lgDonuts, setLgDonuts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalDonut, setModalDonut] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);

    useEffect(()=> {
        fetch('https://donut-shop-442d50e335b6.herokuapp.com/flavors-favorite')
        .then(res => res.json())
        .then(data => setFavDonuts(data))
        .catch(err => console.log(err));
      }, [])

    useEffect(()=> {
        fetch('https://donut-shop-442d50e335b6.herokuapp.com/flavors-cinroll')
        .then(res => res.json())
        .then(data => setCinRoll(data))
        .catch(err => console.log(err));
    }, [])

    useEffect(()=> {
        fetch('https://donut-shop-442d50e335b6.herokuapp.com/flavors-sm')
        .then(res => res.json())
        .then(data => setSmDonuts(data))
        .catch(err => console.log(err));
    }, [])

    useEffect(()=> {
        fetch('https://donut-shop-442d50e335b6.herokuapp.com/flavors-lg')
        .then(res => res.json())
        .then(data => setLgDonuts(data))
        .catch(err => console.log(err));
    }, [])

    const openModal = (donut) => {
        setModalDonut(donut);
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

    return (
        <section id="favorites-homepage" className="my-5 container">

            <div className='d-none d-md-block'>
                <div class="row border-bottom pb-4 mb-5 align-items-center">
                    <div className='border p-2 rounded text-right' onClick={toggleSearchBar}>
                    <i className={`fa ${showSearchBar ? 'fa-times' : 'fa-search'} mx-2 mb-2`} onClick={toggleSearchBar}></i>
                    </div>
                    {showSearchBar && (
                        <input
                            type="text"
                            className="form-control ml-3 pr-4 w-25"
                            placeholder="Search..."
                            onClick={handleInputClick} // Prevent the click event from propagating
                        />
                    )}
                    <nav>
                        <a href="#popular" className='mx-3 text-dark'>
                            Most Popular
                        </a>
                        <a href="#cinRoll" className='mx-3 text-dark'>
                            Cinnamon Roll
                        </a>
                        <a href="#smDonuts" className='mx-3 text-dark'>
                            Small Donuts
                        </a>
                        <a href="#lgDonuts" className='mx-3 text-dark'>
                            Large Donuts
                        </a>
                    </nav>
                </div>
            </div>

            <h3 id="popular" className="text-left mb-3 header-font">Most Popular</h3>
            <div className="row mb-5">
                {favDonuts.map((donut) => (
                    <div key={donut.id} className="col-lg-6 col-md-6 col-12">
                        <div className="d-flex flex-row justify-content-between py-3 px-4 mt-3 border border-secondary rounded main-text-font" onClick={() => openModal(donut)}>
                            <div className="d-flex flex-column">
                                <div className="text-bold">{donut.name}</div>
                                <div>${donut.price}</div>
                            </div>
                            <div>
                                <img alt="Big Bite Donuts Logo" src={donut.image} className="img-fluid navigation-logo"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h3 id="cinRoll" className="text-left mb-3 header-font">Cinnamon Roll</h3>
            <div className="row mb-5">
                {cinRoll.map((donut) => (
                    <div key={donut.id} class="col-lg-6 col-md-6 col-12">
                        <div className="d-flex flex-row justify-content-between py-3 px-4 mt-3 border border-secondary rounded main-text-font" onClick={() => openModal(donut)}>
                            <div className="d-flex flex-column">
                                <div className="text-bold">{donut.name}</div>
                                <div>${donut.price}</div>
                            </div>
                            <div>
                                <img alt="Big Bite Donuts Logo header-font" src={donut.image} className="img-fluid navigation-logo"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h3 id="smDonuts" className="text-left mb-3 header-font">Small Donuts</h3>
            <div className="row mb-5">
                {smDonuts.map((donut) => (
                    <div key={donut.id} class="col-lg-6 col-md-6 col-12">
                        <div className="d-flex flex-row justify-content-between py-3 px-4 mt-3 border border-secondary rounded main-text-font" onClick={() => openModal(donut)}>
                            <div className="d-flex flex-column">
                                <div className="text-bold">{donut.name}</div>
                                <div>${donut.price}</div>
                            </div>
                            <div>
                                <img alt="Big Bite Donuts Logo" src={donut.image} className="img-fluid navigation-logo"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h3 id="lgDonuts" className="text-left mb-3 header-font">Large Donuts</h3>
            <div className="row mb-5">
                {lgDonuts.map((donut) => (
                    <div key={donut.id} class="col-lg-6 col-md-6 col-12">
                        <div className="d-flex flex-row justify-content-between py-3 px-4 mt-3 border border-secondary rounded main-text-font" onClick={() => openModal(donut)}>
                            <div className="d-flex flex-column">
                                <div className="text-bold">{donut.name}</div>
                                <div>${donut.price}</div>
                            </div>
                            <div>
                                <img alt="Big Bite Donuts Logo" src={donut.image} className="img-fluid navigation-logo"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <Button variant="primary" onClick={() => openModal('This is some data.')}>
                Open Modal
            </Button> */}
            <DonutModal show={showModal} handleClose={closeModal} data={modalDonut} />
        </section>
    );
}

export default OrdersPage