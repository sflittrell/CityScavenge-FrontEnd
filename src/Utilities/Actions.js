export const checkToken = () => {
    if (window.localStorage.token) {
        return true;
    }
}