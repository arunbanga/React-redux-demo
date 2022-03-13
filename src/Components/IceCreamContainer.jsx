import { buyIceCream } from "../redux/index";
import { connect } from "react-redux";
const IceCreamContainer = (props) => {
  return (
    <>
      <h2>Number of IceCreams-{props.numofIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
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
    buyIceCream:() => dispatch(buyIceCream())
  };
};

export default connect (mapStateToProps,mapDispatchToProps)(IceCreamContainer);
