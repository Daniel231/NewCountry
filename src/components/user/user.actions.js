export const FETCH_USER = "FETCH_USER";
export const FETCH_GROUP_USERS = "FETCH_GROUP_USERS";

export function selectGroup(user) {
    return {
        type: FETCH_USER,
        user
    };
}