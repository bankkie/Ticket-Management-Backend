import { Module } from '@nestjs/common';
import { TicketTypeService } from './ticket-type.service';
import { TicketTypeController } from './ticket-type.controller';
import { TicketType } from './entities/ticket-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TicketType])],
  controllers: [TicketTypeController],
  providers: [TicketTypeService]
})
export class TicketTypeModule {}
