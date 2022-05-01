import { ItemOrder } from 'src/item-order/entities/item-order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TicketType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  price: number;

  @Column()
  amount: number;

  @Column()
  minimum: number;

  @OneToMany(() => ItemOrder, itemOrder => itemOrder.id)
  itemOrder: ItemOrder[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}