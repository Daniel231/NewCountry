export const FETCH_USER = "FETCH_USER";

export function selectGroup(user) {
    return {
        type: FETCH_USER,
        user
    };
}