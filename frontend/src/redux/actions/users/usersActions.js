import {USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL} from '../actionTypes'
import axios from 'axios'

const registerUserAction = (name,email,password)=>{
    return  async function dispatch() {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST
            })
    
            // MAKE ACTUAL CALL TO CREATE USER
    
            const config={
                headers: {
                    'Content-Type':'application/json'
                }
            }
    
            const {data} = await axios.post('/api/users/register',{name,email, password},config)
            
            dispatch({
                type:USER_REGISTER_SUCCESS,
                payload: data
            })
            // save user login info in local storage
            localStorage.setItem('userAuthData',JSON.stringify(data))
        } catch (error) {
            dispatch({
                type:USER_REGISTER_FAIL,
                payload:error.response && error.response.data.message
            })
        }

    }
}

export {registerUserAction}