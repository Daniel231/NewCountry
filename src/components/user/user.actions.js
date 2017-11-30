export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_GROUP_USERS = "FETCH_GROUP_USERS";

export function selectGroup(user) {
    return {
        type: FETCH_USER,
        user
    };
}

export function getMyUser(){
    return {
        type: FETCH_USER
    };
}

export function dispatchUserDetails(user){
    return {
        type: FETCH_USER_SUCCESS,
        user
    };
}