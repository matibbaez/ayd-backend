import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // <--- Importante
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity'; // <--- Importante

@Injectable()
export class ClientesService {
  
  // 👇 1. Inyectamos el Repositorio (la conexión a la DB)
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClienteDto) {
    const nuevo = this.clientesRepository.create(createClienteDto);
    return this.clientesRepository.save(nuevo);
  }

  findAll() {
    return this.clientesRepository.find(); 
  }

  findOne(id: number) {
    return this.clientesRepository.findOneBy({ id });
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.clientesRepository.update(id, updateClienteDto);
  }

  remove(id: number) {
    return this.clientesRepository.delete(id);
  }
}