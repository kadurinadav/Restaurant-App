import {Fragment} from 'react';
import classes from '../UI/ModalMessageContent.module.css';

const ModalSuccessContent = (props) =>
<Fragment>
  <p className = {classes.para}> Your order is on the way! </p>
  <div className= {classes.actions}>
    <button className= {classes.button} onClick = {props.onClose}> Close </button>
  </div>
</Fragment>

export default ModalSuccessContent;