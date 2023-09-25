import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
    timestamps: false,
    tableName: "planets"
})

export class Planets extends Model{
    @Column({
        type:  DataType.STRING,
        allowNull: false
    })
    name!: string

    @Column({
        type:  DataType.STRING,
        allowNull: false
    })
    type!: string

    @Column({
        type:  DataType.STRING,
        allowNull: false
    })
    image!: string
}