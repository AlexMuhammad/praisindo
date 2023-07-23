export const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordValidate = /^\d{8}$/;

export const setToken = () => {
    localStorage.setItem("token", "aisudfhilyr3qur023iqrhuuieqw34y78dhswfr87324y5rjjf9382ghdfs");
}

export const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
}

export const getEmail = JSON.parse(localStorage.getItem("email"));