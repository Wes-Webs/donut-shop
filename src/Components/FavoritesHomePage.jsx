import React  from 'react';
import { useEffect, useState } from 'react';
import DonutModal from './DonutModal';

function FavoritesHomePage () {

    // Grab donut data
    const [donuts, setDonuts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalDonut, setModalDonut] = useState('');

    useEffect(()=> {
        fetch('https://donut-shop-442d50e335b6.herokuapp.com/flavors-favorite')
        .then(res => res.json())
        .then(data => setDonuts(data))
        .catch(err => console.log(err));
      }, [])

      const openModal = (donut) => {
        setModalDonut(donut);
        setShowModal(true);
    };

      const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section id="favorites-homepage" className="my-5 container">
            <h2 className="text-center mb-4 header-font">Best Bites!</h2>
            <div className="row">
                {donuts.map((donut) => (
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
            <DonutModal show={showModal} handleClose={closeModal} data={modalDonut} />
        </section>
    );
}

export default FavoritesHomePage