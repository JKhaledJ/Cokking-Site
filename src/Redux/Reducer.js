import LOGIN, { LOGOUT,REGISTER } from './ActionType'
const initalLoginState = {
    name:['Khaled'],
    email: ['ab@gmail.com'],
    password: ['123'],
    error: '',
    check:false
}
const LoginCheckReducer=(state=initalLoginState,action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                check:true
            }
        case LOGOUT:
            return{
                ...state,
                check:false
            }
        case REGISTER:
            return{
                ...state,
                email:[...state.email,action.useremail],
                password:[...state.password,action.userpassword]
            }
            default:
                return{
                    ...state,
                    error:"wrong user/Password"
                }

    }
}
export default LoginCheckReducer