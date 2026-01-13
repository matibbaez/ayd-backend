import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';

@Entity('causas')
export class Causa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  caratula: string; 

  @Column('text', { nullable: true })
  nro_expediente: string;

  @Column('text', { nullable: true })
  juzgado: string;

  @Column('text', { default: 'INICIO' })
  estado: string;

  // Muchas Causas pertenecen a Un Cliente
  @ManyToOne(() => Cliente, (cliente) => cliente.causas)
  @JoinColumn({ name: 'cliente_id' }) // Esto avisa que la columna en la tabla se llama 'cliente_id'
  cliente: Cliente;

  @Column('int')
  cliente_id: number; // Para poder guardar pasando solo el ID sin el objeto entero
}