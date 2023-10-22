import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export function useOrderContext() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }) {
  const [navOrderCount, setNavOrderCount] = useState(0);

  const updateOrderCount = () => {
    setNavOrderCount(prevCount => prevCount + 1);
  };

  return (
    <OrderContext.Provider value={{ navOrderCount, updateOrderCount }}>
      {children}
    </OrderContext.Provider>
  );
}