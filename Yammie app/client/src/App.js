import {Fragment, useState} from 'react';
import Header from './components/Header/Header'
import NewOrder from './components/NewOrder/NewOrder';
import Modal from './components/UI/Modal';
import classes from './components/UI/ModalMessageContent.module.css';
import Menu from './menu';
import ModalErrorContent from './components/Modals/ModalErrorContent';
import ModalSuccessContent from './components/Modals/ModalSuccessContent';

function App() {

  const[order, setOrder] = useState(null)
  
  const [successMessageIsShown, setMessageSuccessIsShown] = useState(false);
  const [confirmMessageIsShown, setConfirmMessageIsShown] = useState(false);
  const [errorMessageIsShown, setErrorMessageIsShown] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [error, setError] = useState(false);

  const showSuccessMessageHandler = ()=> {
    setMessageSuccessIsShown(true);
  }
  const hideSuccessMessageHandler = ()=> {
    setMessageSuccessIsShown(false);
  }

  const showConfirmMessageHandler = ()=> {
    setConfirmMessageIsShown(true);
  }
  const hideConfirmMessageHandler = ()=> {
    setConfirmMessageIsShown(false);
  }

  const showErrorMessageHandler = ()=> {
    setErrorMessageIsShown(true);
  }
  const hideErrorMessageHandler = ()=> {
    setErrorMessageIsShown(false);
  }

  function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(input_str);
  }

  function addOrderHandler(order) {
    console.log("entered addOrderHandler!!");
    setError(false);
    // check if all inputs are valid
    for (const value of Object.values(order)) {
      if(value === ""){
          setError(true);
          showErrorMessageHandler();
          return;
      }
    }
    if(!validatePhoneNumber(order["phone number"])){
      setError(true);
      showErrorMessageHandler();
      return;
    }
    setMessageContent(order);
    showConfirmMessageHandler();
  }; 

  async function sendOrder(order) {
    console.log("entered sendOrder!!");
    console.log(order);
    // send order to the server
    try{   
      const response = await fetch('http://localhost:3000/order', {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      const data = await response.json();
      if(!response.ok){
        throw new Error('something went wrong!');
      }
      console.log(data);
      hideConfirmMessageHandler();
      showSuccessMessageHandler();
    }
    catch(error){
        setError(true);
        hideConfirmMessageHandler();
    }  
  }

  // function for updating total price and total calories for the requested order
  const setMessageContent = (order)=>{
    let mainDish = order["main dish"];
    let sideDish = order["side dish"];
    let drink = order["drink"];

    setTotalPrice(parseInt(Menu["main dish"][mainDish]["price"]) + parseInt(Menu["side dish"][sideDish]["price"]) 
    + parseInt(Menu["drink"][drink]["price"]));

    setTotalCalories(parseInt(Menu["main dish"][mainDish]["calories"]) + parseInt(Menu["side dish"][sideDish]["calories"]) 
    + parseInt(Menu["drink"][drink]["calories"]));
  };

  const ModalConfirmContent = (props) =>{

    const sendHandler = ()=> {
      console.log("enterd ModalConfirmContent")
      props.onConfirm(props.order);
    }

    return <Fragment> 
      <div className = {classes.total}>
        <span> Total Price is : {totalPrice}₪ </span>
      </div>
      <div className = {classes.total}>
        <span> Total Calories is : {totalCalories} kcal  </span> 
      </div>
      <div className= {classes.actions}>
        <button className= {classes.button} onClick = {props.onClose}> Cancel </button>
        <button className= {classes.button} onClick = {sendHandler}  > Confirm </button>
      </div>
    </Fragment>
  }

  return (
    <Fragment>
      <Header/>
      {!error && confirmMessageIsShown && <Modal><ModalConfirmContent  onConfirm = {sendOrder} order = {order} onClose = {hideConfirmMessageHandler}/></Modal>}
      {!error && !confirmMessageIsShown && successMessageIsShown && <Modal><ModalSuccessContent onClose = {hideSuccessMessageHandler}/></Modal>}
      {error && errorMessageIsShown && <Modal> <ModalErrorContent onClose = {hideErrorMessageHandler}/> </Modal>}
      <NewOrder onSendOrder = {setOrder} onAddOrder = {addOrderHandler}/>
    </Fragment>
  );
}

export default App;
