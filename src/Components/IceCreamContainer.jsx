import {buyIceCream} from '../redux/index'
import {connect} from 'react-redux'
const IceCreamContainer=(props)=>{
   return(
       <>
       <h2>Number of IceCream -{props.numofIceCream}</h2>
       <button onClick={props.buyIceCream}>Buy IceCream</button>
       </>
   ) 
}
const mapStateProps= state=>{
    return{
        numofIceCream: state.numofIceCream
    }
}
const mapDispatchProps = dispatch=>{
    return{
    buyIceCream:()=> dispatch(buyIceCream())
    }
}

export default  connect(mapDispatchProps,mapStateProps)(IceCreamContainer)