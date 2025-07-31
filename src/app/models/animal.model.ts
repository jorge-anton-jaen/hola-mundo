export type AnimalTipo = 'perro' | 'gato';

export interface Animal {
  id: number;
  nombre: string;
  tipo: AnimalTipo; // 'perro' o 'gato'
  edadAproximada: number; // en años
  sexo: 'macho' | 'hembra';
  color: string;
  fechaRescate: Date;
  lugarRescate: string;
  descripcion: string;
  estadoSalud: string;
  vacunado: boolean;
  esterilizado: boolean;
  adoptado: boolean;
  fotoUrl?: string;
}