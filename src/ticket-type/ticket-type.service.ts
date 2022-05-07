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
  async create(createTicketTypeDto: CreateTicketTypeDto) {
    const ticket = this.ticketTypesRepository.create({
      ...createTicketTypeDto
    });
    return await this.ticketTypesRepository.save(ticket);
  }

  findAll() {
    return this.ticketTypesRepository.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} ticketType`;
  }

  async update(id: string, updateTicketTypeDto: UpdateTicketTypeDto) {
    return await this.ticketTypesRepository.save(updateTicketTypeDto);
  }

  remove(id: string) {
    this.ticketTypesRepository.delete(id);
    return `This action removes a #${id} ticketType`;
  }
}
