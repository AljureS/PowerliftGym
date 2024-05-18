/*
    id: ID numérico que identifica al usuario.

    name: nombre completo del usuario.

    email: dirección de email del usuario.

    birthdate: fecha de nacimiento.

    nDni: número de DNI o identificación.

    ? credentialsId: ID de las credenciales, referencia al par de credenciales que posee el usuario.
*/

interface IUser {
    id: number,
    name: string,
    email: string,
    birthdate: number,
    nDni: number,
    credentialsId: number,//
}

export default IUser