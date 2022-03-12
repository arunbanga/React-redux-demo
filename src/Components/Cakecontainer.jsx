import { buyCake } from "../redux/index";
import { connect } from "react-redux";
const Cakecontainer = (props) => {
  return (
    <>
      <h2>Number of cakes -{props.numofCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    numofCakes: state.numofCakes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cakecontainer);
