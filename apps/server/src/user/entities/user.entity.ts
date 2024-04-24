import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Address } from './address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  hashedPassword: string;

  @Column({nullable: true})
  permanentAddress: string;

  @Column({nullable: true})
  country: string;

  @Column({nullable: true})
  profileImage: string

  @Column({nullable: true})
  city: string;

  @Column({nullable: true})
  username: string;

  @Column({nullable: true})
  postalCode: string;

  @Column({nullable: true})
  phoneNumber: string;

  @Column({nullable: true})
  dateOfBirth: string;

  @OneToMany(() => Address, (address)=>address.user)
  addresses: Address[];
}
