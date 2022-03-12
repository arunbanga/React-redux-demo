import {BUY_ICECREAM} from '../IceCream.jsx/IceCreamTypes'
const initialState={
    numberofIceCream:10
}

const IceCreamreducer=( state = initialState,action)=>{
 switch(action.type){
 case BUY_ICECREAM: return{
     ...state,
     numofIceCream: state.numofIceCream -1

     }
     default: return state
 }
}
export default IceCreamreducer;