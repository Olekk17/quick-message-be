import { DataTypes } from 'sequelize';
import {
  AllowNull,
  Column,
  PrimaryKey,
  Table,
  Model,
  AutoIncrement
} from "sequelize-typescript";

@Table({
  tableName: "users",
  createdAt: true,
  updatedAt: true
})

export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataTypes.INTEGER
  })
  id!: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  
  })
  email!: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  
  })
  username!: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
  password!: string;

  @AllowNull(true)
  @Column({
    type: DataTypes.STRING
  })
  token!: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.BOOLEAN
  })
  emailVerified!: boolean;
}