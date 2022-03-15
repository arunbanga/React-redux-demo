import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux/User/userAction'

const Container=({ userData ,fetchUsers})=>{
    useEffect(()=>{
        fetchUsers()
        
    },[])
    
    const deleteuser=(id)=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/1 ${id}`,{
           method:'DELETE',
       }).then((result)=>{
           result.json().then((resp)=>{
               console.warn(resp)
               
           })
       })
    
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
                 <td>{users.id}</td>
                 <td>{users.name}</td>
                 
                 <td><button onClick={()=>deleteuser(users.id)}>Delete</button></td>
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