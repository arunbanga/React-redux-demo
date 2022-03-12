import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux';

const HooksCakeContiner=()=>{
    const numofCakes = useSelector(state => state.cake.numofCakes)
    const dispatch = useDispatch()
    return(
        <>
        <h2>Number of cakes-{numofCakes}</h2>
        <button onClick = {()=>dispatch(buyCake())}>Buy cake</button>
        </>
    )
}
export default HooksCakeContiner;