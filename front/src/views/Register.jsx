import React from 'react'

const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register

/*Implementar en el componente Register un formulario controlado que se encargará del registro de usuario. 

Controlar el formulario de manera tal que se pueda validar que todos los datos necesarios para el registro están
 completos, al mismo tiempo que los datos de los inputs son reflejados en el estado local correspondiente y viceversa.

Una vez completos y validados los datos, se debe poder presionar un botón que dispare un evento, el cual ejecutará
 una función que se encargue de realizar la petición de tipo POST correspondiente al servidor para el registro del
  usuario enviando como body el estado que se confeccionó a través del formulario. 

En caso de que el registro sea exitoso, informar al usuario. Del mismo modo, informar al usuario si ha ocurrido un
 error. */