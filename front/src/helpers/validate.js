export const validate = (form) => {
    const errors = {}

    const regExp = {
        name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
        username: /^[a-zA-Z0-9_]{3,20}$/,
        birthdate: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/,
        nDni: /^\d{7,9}$/,
      };

    if(form.name && !regExp.name.test(form.name)) {
        errors.name = "Ingresa un nombre válido"
    }

    if(form.email && !regExp.email.test(form.email)) {
        errors.email = "Ingresa un email válido"
    }

    if(form.password && !regExp.password.test(form.password)) {
        errors.password = "Ingresa una contraseña válida"
    }

    if(form.username && !regExp.username.test(form.username)) {
        errors.username = "Ingresa un nombre válido"
    }

    if(form.birthdate && !regExp.birthdate.test(form.birthdate)) {
        errors.birthdate = "Ingresa una fecha de nacimiento válida"
    }

    if(form.nDni && !regExp.nDni.test(form.nDni)) {
        errors.nDni = "Ingresa un DNI válido"
    }

    return errors
};