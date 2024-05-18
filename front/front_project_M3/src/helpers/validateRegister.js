export const validateRegister = (registerForm) => {
    let errors = {};

    // Validar Name: suponiendo que quisiste decir que NO debe tener números.
    if (!registerForm.name) {
        errors.name = "Name is required";
    } else if (/[\d]/.test(registerForm.name)) {
        errors.name = "Name must not contain numbers";
    }

    // Validar Email
    if (!registerForm.email) {
        errors.email = "Email is required";
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(registerForm.email)) {
        errors.email = "Email is invalid";
    }

    // Validar Birthdate
    if (!registerForm.birthdate) {
        errors.birthdate = "Birthdate is required";
    } else if (!/\d{4}-\d{2}-\d{2}/.test(registerForm.birthdate) || new Date(registerForm.birthdate).toString() === "Invalid Date") {
        errors.birthdate = "Birthdate is invalid";
    }

    // Validar nDni - Solo números
    if (!registerForm.nDni) {
        errors.nDni = "Identification number is required";
    } else if (!/^\d+$/.test(registerForm.nDni)) {
        errors.nDni = "Identification number must contain only numbers";
    }

    // Validar Username
    if (!registerForm.username) {
        errors.username = "Username is required";
    }

    // Validar Password - Mínimo 8 caracteres
    if (!registerForm.password) {
        errors.password = "Password is required";
    } else if (registerForm.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }

    return errors;
};
