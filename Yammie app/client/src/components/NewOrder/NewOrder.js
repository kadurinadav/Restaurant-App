import React from 'react';
import './NewOrder.css';
import OrderForm from './OrderForm';

const NewOrder = (props)=> {
    const saveOrderDataHandler = (enteredOrderData) => {
        const orderData = {
            ...enteredOrderData
        };
        props.onAddOrder(orderData);
        props.onSendOrder(orderData);
    };

    return <div className="new-order">
        <OrderForm onSaveOrderData={saveOrderDataHandler}/>
    </div>  
};

export default NewOrder;