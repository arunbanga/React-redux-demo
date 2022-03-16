import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE ,DELETE_USERS} from "./userTypes";

const intialState = {
    loading: false,
    users :[],
    error :''
}

const useReducer =(state=intialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
           
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
         case FETCH_USERS_FAILURE:
             return{
                 loading:false,
                 users:[],
                 error:action.payload
             }  
             
            case DELETE_USERS:
             const newlist= state.users.filter((elem=> elem.name===action.name))
             return{
                 ...state,
                 users:newlist,
              
                 
            }
            
            default : return state
    }
    
}


   
export default useReducer