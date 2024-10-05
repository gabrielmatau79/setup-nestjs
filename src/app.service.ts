import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Items } from './schemas/items'
import { Model } from 'mongoose'

@Injectable()
export class AppService {
  private logger: Logger

  constructor(
    // Inject model mogoose
    @InjectModel(Items.name) private itemModel: Model<Items>,
  ) {
    this.logger = new Logger(AppService.name)
  }

  async findAll(id: string): Promise<any> {
    this.logger.log(`[findAll items] initialize findAll service`)
    try {
      return await this.itemModel.find().exec()
    } catch (error) {
      return
    }
  }

  getHello(): string {
    return 'Hello World!'
  }
}
