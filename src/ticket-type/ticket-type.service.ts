import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTicketTypeDto } from './dto/create-ticket-type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket-type.dto';
import { TicketType } from './entities/ticket-type.entity';

@Injectable()
export class TicketTypeService {
  constructor(
    @InjectRepository(TicketType)
    private ticketTypesRepository: Repository<TicketType>,
  ) {}
  create(createTicketTypeDto: CreateTicketTypeDto) {
    return 'This action adds a new ticketType';
  }

  findAll() {
    return this.ticketTypesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketType`;
  }

  update(id: number, updateTicketTypeDto: UpdateTicketTypeDto) {
    return `This action updates a #${id} ticketType`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketType`;
  }
}
