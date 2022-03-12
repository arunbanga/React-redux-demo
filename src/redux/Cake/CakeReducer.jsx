import {BUY_CAKE} from './CakeTypes'
const initialState={
    numofCakes: 20
}

const cakeReducer =( state = initialState,action)=>{
 switch(action.type){
 case BUY_CAKE: return{
     ...state,
     numofCakes: state.numofCakes -1 ,
 }
   default :return state
 }
}
export default cakeReducer;