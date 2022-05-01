import { Module } from '@nestjs/common';
import { ItemOrderService } from './item-order.service';
import { ItemOrderController } from './item-order.controller';
import { ItemOrder } from './entities/item-order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ItemOrder])],
  controllers: [ItemOrderController],
  providers: [ItemOrderService]
})
export class ItemOrderModule {}
