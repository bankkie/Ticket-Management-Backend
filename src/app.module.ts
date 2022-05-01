import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ItemOrderModule } from './item-order/item-order.module';
import { TicketTypeModule } from './ticket-type/ticket-type.module';
import { ItemOrder } from './item-order/entities/item-order.entity';
import { TicketType } from './ticket-type/entities/ticket-type.entity';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'ticket_management',
      entities: [User, ItemOrder, TicketType],
      synchronize: true,
      logging: true,
    }),
    ItemOrderModule,
    TicketTypeModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
