import React  from 'react';
// import { Link } from 'react-router-dom';
// import GiftCardModal from './GiftCardModal';
import { useState, useEffect } from 'react';
// import DonutModal from './DonutModal';

function NavigationCount ({ number }) {
    const [orderNumber, setOrderNumber] = useState(0);

    useEffect(() => {
        setOrderNumber(number);
      }, []);

    return (
        <div>
            {orderNumber}
        </div>
    );
}

export default NavigationCount