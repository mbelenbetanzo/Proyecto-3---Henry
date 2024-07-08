export const validateLogin = (form) => {
    const errors = {}

    const regExp = {
        password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
        username: /^[a-zA-Z0-9_]{3,20}$/,
      };

    if(form.password && !regExp.password.test(form.password)) {
        errors.password = "Ingresa una contraseña válida"
    }

    if(form.username && !regExp.username.test(form.username)) {
        errors.username = "Ingresa un nombre válido"
    }

    return errors
};