import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column()
  zipCode: string;

  @Column()
  country: string;
  
  @ManyToOne(() => User, {lazy: true})
  @JoinColumn({name: 'userId'})
  user: User
}