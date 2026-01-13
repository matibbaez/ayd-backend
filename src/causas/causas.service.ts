import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCausaDto } from './dto/create-causa.dto';
import { Causa } from './entities/causa.entity';

@Injectable()
export class CausasService {
  constructor(
    @InjectRepository(Causa)
    private causasRepository: Repository<Causa>,
  ) {}

  create(createCausaDto: CreateCausaDto) {
    const nuevaCausa = this.causasRepository.create(createCausaDto);
    return this.causasRepository.save(nuevaCausa);
  }

  findAll() {
    // Acá usamos 'relations' para que traiga también los datos del cliente
    return this.causasRepository.find({
      relations: ['cliente'], 
    });
  }

  findOne(id: number) {
    return this.causasRepository.findOne({ 
      where: { id },
      relations: ['cliente'] 
    });
  }

  // ... update y remove dejálos vacíos por ahora
}