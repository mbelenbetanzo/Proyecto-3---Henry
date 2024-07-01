interface IUser {
    id: number; //este tampoco ya que se genera dinamicamente
    name: string;
    email: string;
    birthdate: Date;
    dni: string;
    credentialsId: number; //este no lo utilizo cuando creo el usuario
};

export default IUser; 


