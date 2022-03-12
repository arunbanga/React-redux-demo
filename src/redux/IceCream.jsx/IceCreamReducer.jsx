import {BUY_ICECREAM} from '../IceCream.jsx/IceCreamTypes'
const initialState={
    numofIceCreams: 20
}

const IceCreamReducer=(state =initialState,action)=>{
 switch(action.type){
 case BUY_ICECREAM: return{
     ...state,
     numofIceCreams: state.numofIceCreams -1

     }
     default: return state
 }
}
export default IceCreamReducer;