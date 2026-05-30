import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';



import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { Pokemon, PokemonSchema } from '../pokemon/entities/pokemon.entity';



@Module({

  controllers: [SeedController],

  providers: [
    SeedService,
    AxiosAdapter,
  ],

  imports: [

    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      },
    ]),

  ],

})
export class SeedModule {}