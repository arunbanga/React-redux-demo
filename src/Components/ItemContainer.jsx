import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux';
const ItemContainer =(Props)=>{
    return(
        <>
         <h2>Item -{Props.item} </h2>
         <button onClick={Props.buyItem}>Buy Items</button>
        </>
    )
}

const mapStateToProps=(state,ownProps) => {
 const itemState = ownProps.cake ?state.cake.numofCakes : state.iceCream.numofIceCreams
 return{
     item:itemState
 }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFunction =ownProps.cake?
    ()=>dispatch(buyCake()):
    ()=> dispatch(buyIceCream())
    return{
        buyItem :dispatchFunction
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ItemContainer)