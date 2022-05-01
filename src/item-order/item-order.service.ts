import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemOrderDto } from './dto/create-item-order.dto';
import { UpdateItemOrderDto } from './dto/update-item-order.dto';
import { ItemOrder } from './entities/item-order.entity';

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

  async findAll(type, take, skip) {
  const [data, count] = await this.itemOrdersRepository.findAndCount({
        relations: ['ticketType'],
          where: {
            ticketType: {
              type: 'A'
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
