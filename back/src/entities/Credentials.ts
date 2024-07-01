import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: "credentials"
})

class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string
}

export default Credential
//cuando creamos entidad siempre la debemos pasar a el data source!