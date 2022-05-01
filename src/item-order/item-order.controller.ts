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

  @Get()
  findAll(@Query() query) {
    const take = query.take || 10
    const skip = query.skip || 0
    const { type } = query

    return this.itemOrderService.findAll(type, take, skip);
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
