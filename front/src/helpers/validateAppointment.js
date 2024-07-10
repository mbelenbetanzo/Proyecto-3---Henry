


export const validateAppointment = (form) => {
    const errors = {}

    if(!form.date) {
        errors.date = "Ingresa una fecha"
    }

    if(!form.time) {
        errors.time = "Ingresa un horario válido"
    }

    if(!form.description) {
        errors.description = "Ingresa el tratamiento que deseas realizarte"
    }

    return errors;
};

