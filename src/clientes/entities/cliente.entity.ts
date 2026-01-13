import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Causa } from '../../causas/entities/causa.entity'; // <--- Importar

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nombre_completo: string;

  @Column('text', { nullable: true })
  dni_cuit: string;

  @Column('text', { nullable: true })
  telefono: string;

  @Column('text', { nullable: true })
  email: string;

  // Un Cliente tiene Muchas Causas
  @OneToMany(() => Causa, (causa) => causa.cliente)
  causas: Causa[];
}