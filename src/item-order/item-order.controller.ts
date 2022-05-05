import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ItemOrderService } from './item-order.service';
import { CreateItemOrderDto } from './dto/create-item-order.dto';
import { UpdateItemOrderDto } from './dto/update-item-order.dto';

@Controller('item-order')
export class ItemOrderController {
  constructor(private readonly itemOrderService: ItemOrderService) {}

  @Post()
  create(@Body() createItemOrderDto: CreateItemOrderDto) {
    return this.itemOrderService.create(createItemOrderDto);
  }

  @Get('/ticket-type')
  findByTicketType(@Query() query) {
    const take = query.take || 10
    const skip = query.skip || 0
    const { type } = query

    return this.itemOrderService.findByTicketType(type, take, skip);
  }

  @Get('/ticket-date')
  findByDate(@Query() query) {
    const take = query.take || 10
    const skip = query.skip || 0
    const { date } = query

    return this.itemOrderService.findByDate(date, take, skip);
  }

  @Get('/check-status')
  findByDateForCheckStatus(@Query() query) {
    const take = query.take || 10
    const skip = query.skip || 0
    const { date } = query

    return this.itemOrderService.findByDateForCheckStatus(date, take, skip);
  }

  @Get('/ticket-date-type')
  findByTicketTypeAndDate(@Query() query) {
    const take = query.take || 10
    const skip = query.skip || 0
    const { type, date } = query

    return this.itemOrderService.findByTicketTypeAndDate(type, date, take, skip);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemOrderDto: UpdateItemOrderDto) {
    return this.itemOrderService.update(+id, updateItemOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemOrderService.remove(+id);
  }
}
