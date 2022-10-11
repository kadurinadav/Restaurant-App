import {Fragment} from 'react';
import classes from '../UI/ModalMessageContent.module.css';

  const ModalErrorContent = (props) =>
  <Fragment>
      <p className = {classes.para}> There was a problem with your order, please try again later! </p>
      <div className= {classes.actions}>
        <button className= {classes.button} onClick = {props.onClose}> Close </button>
      </div>
  </Fragment>

  export default ModalErrorContent;