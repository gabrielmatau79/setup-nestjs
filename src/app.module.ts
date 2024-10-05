import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import appConfig from './config/app-config'
import { HandledMongooseModule } from './modules/db/mongo.module' //you can add this module if you need
import { MongooseModule } from '@nestjs/mongoose'
import { Items, ItemsSchema } from './schemas/items'
//import { HandledRedisModule } from './modules/db/redis.module' //you can add this module if you need

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [appConfig],
      isGlobal: true,
    }),
    HandledMongooseModule,
    MongooseModule.forFeature([{ name: Items.name, schema: ItemsSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
