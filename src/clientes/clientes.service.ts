import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClienteDto) {
    const nuevoCliente = this.clientesRepository.create(createClienteDto);
    return this.clientesRepository.save(nuevoCliente);
  }

  findAll() {
    return this.clientesRepository.find({
        order: { id: 'DESC' } 
    });
  }

  findOne(id: number) {
    return this.clientesRepository.findOneBy({ id });
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}