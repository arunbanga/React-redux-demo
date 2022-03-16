import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers,deleteUsers} from '../redux/User/userAction'

import {useDispatch} from 'react-redux'
const Container=({ userData ,fetchUsers})=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchUsers()
        
    },[])
    
    
    return userData.loading ?(
        <h2>Loading</h2>
    ) : userData.error ?(
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>user list</h2>
            
            <div>
            
               {
                userData && userData.users && userData.users.map(users =>
                <tr>
                 <td>{users.id}</td>
                 <td>{users.name}</td>
                 
                 <td><button onClick={()=>dispatch(deleteUsers(users.name))}>Delete</button></td>
                 </tr>
                )}
                
                
         </div>
              
        </div>
                
    )
}
const mapStateToProps = state =>{
    return{
        userData :state.user
    }
}
const mapDispatchToProps= dispatch =>{
    return{
        fetchUsers:()=>dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Container)