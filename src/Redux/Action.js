import LOGIN from './ActionType'
import {LOGOUT} from './ActionType'
import {REGISTER} from './ActionType'
export const CheckLogin=()=>{
    return{ 
        type:LOGIN
    }
}

export const CheckLogout=()=>{
    return{
        type:LOGOUT
    }
}

export const CheckRegister=(uemail,upass)=>{
    return{
        type:REGISTER,
        useremail:uemail,
        userpassword:upass
    }
}