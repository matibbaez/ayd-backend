import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CausasService } from './causas.service';
import { CausasController } from './causas.controller';
import { Causa } from './entities/causa.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Causa])], 
  controllers: [CausasController],
  providers: [CausasService],
})
export class CausasModule {}