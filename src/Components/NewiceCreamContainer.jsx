import React,{useState} from 'react'
import { buyIceCream } from "../redux/index";
import { connect } from "react-redux";
const NewiceCreamContainer = (props) => {
    const [number,setNumber] =useState(1) 
  return (
    <>
      <h2>Number of IceCreams-{props.numofIceCreams}</h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
      <button onClick={()=>props.buyIceCream(number)}>Buy {number}IceCream</button>
    </>
  );
};
const mapStateToProps = state => {
  return {
    numofIceCreams:state.iceCream.numofIceCreams
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyIceCream:number => dispatch(buyIceCream(number))
  };
};

export default connect (mapStateToProps,mapDispatchToProps)(NewiceCreamContainer);
