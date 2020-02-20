import LOGIN from './ActionType'
import {LOGOUT} from './ActionType'
import {REGISTER} from './ActionType'
export const CheckLogin=(cUser)=>{
    return{ 
        type:LOGIN,
        currentUser:cUser
    }
}

export const CheckLogout=()=>{
    return{
        type:LOGOUT
    }
}

export const CheckRegister=(uname,uemail,upass)=>{
    return{
        type:REGISTER,
        username:uname,
        useremail:uemail,
        userpassword:upass
    }
}