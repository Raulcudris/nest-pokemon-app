import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon {

  @Prop({
        type: Number,
        unique: true,
        index: true,
    })
    no!: number;

  @Prop({
        type: String,
        unique: true,
        trim: true,
    })
    name!: string;
}

export type PokemonDocument = Pokemon & Document;

export const PokemonSchema =
  SchemaFactory.createForClass(Pokemon);