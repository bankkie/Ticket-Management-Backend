import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemOrderDto } from './dto/create-item-order.dto';
import { UpdateItemOrderDto } from './dto/update-item-order.dto';
import { ItemOrder } from './entities/item-order.entity';
import { TicketType } from '../ticket-type/entities/ticket-type.entity';

@Injectable()
export class ItemOrderService {
  constructor(
    @InjectRepository(ItemOrder)
    private itemOrdersRepository: Repository<ItemOrder>,
  ) {}

  async create(createItemOrderDto: CreateItemOrderDto) {
    const itemorder =   this.itemOrdersRepository.create({
      ...createItemOrderDto
    })
    return await this.itemOrdersRepository.save(itemorder);
  }

  async findByTicketType(type, take, skip) {
  const [data, count] = await this.itemOrdersRepository.findAndCount({
        relations: ['ticketType'],
          where: {
            ticketType: {
              type: type
            }
          },
          take: take,
          skip: skip
      })
    return {
      data: data,
      count: count
    }
  }

  async findByDate(date, take, skip) {
    const [data, count] = await this.itemOrdersRepository.findAndCount({
      relations: ['ticketType'],
      where: {
        date: date
      },
      take: take,
      skip: skip
    })
    return {
       data: data,
       count: count
    }
  }

  async findByDateForCheckStatus(date, take, skip) {
    console.log('xxxx')
    const query =  this.itemOrdersRepository.createQueryBuilder('itemOrder')
    query.select(["SUM(itemOrder.amount) AS sum"])
      .addSelect(['ticketType.type', 'ticketType.id'])
      .leftJoinAndMapOne("itemOrder.ticketType", TicketType , 'ticketType',  "itemOrder.ticketType = ticketType.id")
      .where("itemOrder.date=:dateTody", {dateTody:date})
      .groupBy("ticketType.id")
      const data = await query.getRawMany()

    return {
       data: data
    }
  }

    async findByTicketTypeAndDate(type, date, take, skip) {
      const [data, count] = await this.itemOrdersRepository.findAndCount({
        relations: ['ticketType'],
        where: {
          ticketType: {
            type: type
          },
          date:date
        },
        take: take,
        skip: skip
      })
      return {
        data: data,
        count: count
      }
    }

  findOne(id: number) {
    return `This action returns a #${id} itemOrder`;
  }

  update(id: number, updateItemOrderDto: UpdateItemOrderDto) {
    return `This action updates a #${id} itemOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemOrder`;
  }
}
