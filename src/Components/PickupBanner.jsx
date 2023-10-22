import React  from 'react';
import PickupModal from './PickupModal';
import { useState } from 'react';

function PickupBanner () {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

      const closeModal = () => {
        setShowModal(false);
    };
    return (
        <section id="pickup-banner" class="mb-4 container">
            <div className='d-flex flex-row align-items-start'>
                <div className='d-flex flex-column'>
                    <div>Pickup From 1234 South 56th Street</div>
                    <div class="text-muted">
                        Tomorrow at 5:50 AM
                    </div>
                </div>
                <div class="btn btn-light btn-sm mx-2" onClick={() => openModal()}>Change</div>
            </div>
            <PickupModal show={showModal} handleClose={closeModal} />
        </section>
    );
}

export default PickupBanner