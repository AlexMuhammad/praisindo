export const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordValidate = /^\d{8}$/;

export const getEmail = JSON.parse(localStorage.getItem("email"));