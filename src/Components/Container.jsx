import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux/User/userAction'

const Container=({ userData ,fetchUsers})=>{
    useEffect(()=>{
        fetchUsers()
    },[])
    const deleteuser=()=>{
        alert('delete')
    }
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
                 <td>{users.name}</td>
                 <td><button onClick={()=>deleteuser(users.name)}>Delete</button></td>
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