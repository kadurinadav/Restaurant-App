import React, {useState} from 'react';
import './OrderForm.css';

const NewOrder = (props)=> {

    const [enteredName, setEnteredName] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredMainDish, setEnteredMainDish] = useState('');
    const [enteredSideDish, setEnteredSideDish] = useState('');
    const [enteredDrink, setEnteredDrink] = useState('');

    const nameChangeHandler = (event)=>{
        setEnteredName(event.target.value);
    };

    const phoneChangeHandler = (event)=>{
        setEnteredPhone(event.target.value);
    };

    const emailChangeHandler = (event)=>{
        setEnteredEmail(event.target.value);
    };

    const addressChangeHandler = (event)=>{
        setEnteredAddress(event.target.value);
    };

    const mainDishChangeHandler = (event)=>{
        setEnteredMainDish(event.target.value);
    };

    const sideDishChangeHandler = (event)=>{
        setEnteredSideDish(event.target.value);
    };

    const drinkChangeHandler = (event)=>{
        setEnteredDrink(event.target.value);
    };

    const submitHandler = (event)=> {
        event.preventDefault();

        const orderData = {
            "name" : enteredName,
            "phone number" : enteredPhone,
            "email" : enteredEmail,
            "address" : enteredAddress,
            "main dish" : enteredMainDish,
            "side dish" : enteredSideDish,
            "drink": enteredDrink
        };

        props.onSaveOrderData(orderData);
        setEnteredName('');
        setEnteredPhone('');
        setEnteredEmail('');
        setEnteredAddress('');
        setEnteredMainDish('');
        setEnteredSideDish('');
        setEnteredDrink('');
    };


    return <form onSubmit={submitHandler}>
        <div className="new-order__controls">
            <div className="new-order__control">
                <label> Name</label>
                <input type  = "text" placeholder="Enter your full name"  value={enteredName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-order__control">
                <label> Phone Number</label>
                <input type = "tel" placeholder="Enter your phone number" pattern="^[0-9]{10}$" 
                value={enteredPhone} onChange={phoneChangeHandler} required/>
            </div>
            <div className="new-order__control">
                <label> Email</label>
                <input type = "email" placeholder="Enter your email address" pattern= "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={enteredEmail} 
                onChange={emailChangeHandler}/>
            </div>
            <div className="new-order__control">
                <label> Address</label>
                <input type = "text" placeholder="Enter your home address" value={enteredAddress} onChange={addressChangeHandler}/>
            </div>
            <div className="new-order__control">
                <label> Main dish
                    <select value={enteredMainDish} onChange={mainDishChangeHandler}>
                        <option> Choose main dish </option>
                        <option className='option__label' value="Pizza">Pizza</option>
                        <option className='option__label' value="Pasta">Pasta</option>
                        <option className='option__label' value="Big salad">Big salad</option>
                    </select>
                </label>
            </div>
            <div className="new-order__control">
                <label> Side dish
                    <select value={enteredSideDish} onChange={sideDishChangeHandler}>
                            <option> Choose side dish </option>
                            <option className='option__label' value="Rice">Rice</option>
                            <option className='option__label' value="Green beans">Green beans</option>
                            <option className='option__label' value="Small salad">Small salad</option>
                        </select>
                </label>
            </div>
            <div className="new-order__control">
                <label> Drink
                    <select value={enteredDrink} onChange={drinkChangeHandler}>
                        <option> Choose drink </option>
                        <option className='option__label' value="Water">Water</option>
                        <option className='option__label' value="Soda">Soda</option>
                        <option className='option__label' value="Coke">Coke</option>
                    </select>
                </label>
            </div>
        </div>
        <div>
            <button type= "submit" onClick={props.onClick}> Send Order </button>
        </div>
    </form>
};

export default NewOrder;