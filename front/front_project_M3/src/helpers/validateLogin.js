export const validateLogin = (data) => {
    let errors = {};
    if (!data.username) {
        errors.username = "username is required";
    }
    if (!data.password) {
        errors.password = "password is required";
    }
    return errors
}