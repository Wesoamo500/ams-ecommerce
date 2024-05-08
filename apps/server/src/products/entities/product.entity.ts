import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  productId: string;

  @Column()
  company: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  tags: string;

  @Column()
  price: number;

  @Column()
  discountPercent: number;

  @Column()
  quantity: number;

  @Column()
  productImage: string

  @Column()
  thumbnail1: string

  @Column()
  thumbnail2: string

  @Column()
  thumbnail3: string
}
