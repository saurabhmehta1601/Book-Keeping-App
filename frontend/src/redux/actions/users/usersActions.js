import {USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL, USER_PROFILE_SUCCESS, USER_PROFILE_REQUEST, USER_PROFILE_FAIL, USER_LOGOUT_SUCCESS} from '../actionTypes'
import axios from 'axios'

const registerUserAction = (name,email,password)=>{
    return  async function (dispatch) {
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

const loginUserAction = (email,password)=>{
    return async dispatch =>{
        try{
            dispatch({
                type:USER_LOGIN_REQUEST                
            })
            // ACTUAL API CALL
            const config={
                headers:{
                    'Content-Type':'application/json'
                }}
            
                const {data} = await axios.post("/api/users/login",{email,password},config)
                console.log(data)
            
            dispatch({
                type:USER_LOGIN_SUCCESS,
                payload:data
            })
            localStorage.setItem('userAuthData',JSON.stringify(data))
            
        }catch(error){

            dispatch({
                type:USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message 
            })
        }
    }
}

const logoutUserAction = ()=>{
    return async dispatch =>{
        try {
            // Remove item from local storage
            localStorage.removeItem('userAuthData')

            dispatch({
                type: USER_LOGOUT_SUCCESS,
            })
        } catch (error) {
            
        }
    }
} 


const getUserProfileAction = () =>{
    return async (dispatch,getState) =>{
        // grab token from store
        const {userInfo} = getState().userLogin
 

        try {
            dispatch({
                type:USER_PROFILE_REQUEST,
            })

            const config = {
                headers:{
                    "authorization":`Bearer ${userInfo.token}`
                }
            }
                // make a request
                const {data} = await axios.get('/api/users/profile',config)
              
                dispatch({
                    type:USER_PROFILE_SUCCESS,
                    payload:data
                })
            } catch (error) {   
            dispatch({
                type:USER_PROFILE_FAIL,
                payload:error.response && error.response.data.message
            })
        }
    }
}

export {registerUserAction,loginUserAction,logoutUserAction,getUserProfileAction}