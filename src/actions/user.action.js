export const UPDATE_LOGIN='users_updateLogin';
export function updateLogin(newUser){
    return {
        type:'users_updateLogin',
        payload:newUser
    }
}