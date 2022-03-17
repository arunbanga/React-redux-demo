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
                const _users = [...state.users]
             const userIndex = _users.findIndex(user => user.name === action.payload)
             if(userIndex !== -1){
                 _users.splice(userIndex,1)
                 return{
                    ...state,
                users: _users,
               }
             }
             return state

            
            default : return state
    }
    
}


   
export default useReducer