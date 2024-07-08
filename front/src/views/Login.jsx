import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login





/*Implementar en el componente Login un formulario controlado que se encargará del login del usuario. 

Controlar el formulario de manera tal que se pueda validar que todos los datos necesarios para el login están
 completos, al mismo tiempo que los datos de los inputs son reflejados en el estado local correspondiente y viceversa. 

Una vez completos y validados los datos, se debe poder presionar un botón que dispare un evento, el cual ejecutará
 una función que se encargue de realizar la petición de tipo POST correspondiente al servidor para el login del
  usuario enviando como body el estado que se confeccionó a través del formulario.

En caso de que el login sea exitoso, informar al usuario. Del mismo modo, informar al usuario si ha ocurrido un
 error. 
 
 
 TIPS

Trabaja primero con el componente Register y LUEGO con el componente Login. De esta forma podemos luego intentar
 logearnos con el usuario nuevo que hemos registrado. 

Recuerda SIEMPRE notificar al usuario sobre el resultado de la operación que ha realizado. 

Como TIP te recomendamos deshabilitar el botón de registro o login hasta que todos los datos estén completos y validados.
 De esta forma puedes evitar envíos de peticiones incompletas.
 
 
 */