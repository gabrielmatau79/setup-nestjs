import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, HydratedDocument } from 'mongoose'

/**
 * Represents a Items stored in the database.
 *
 * @typedef {HydratedDocument<Items>} ItemsDocument - The Mongoose document type for a live session.
 */
export type ItemsDocument = HydratedDocument<Items>

@Schema({ timestamps: true })
export class Items extends Document {
  @Prop({ required: true, index: true })
  name: string

  @Prop()
  description?: string

  @Prop({ required: true })
  price: number
}

/**
 * The schema definition for the Items model.
 * Includes timestamps for creation and update times.
 */
export const ItemsSchema = SchemaFactory.createForClass(Items)
