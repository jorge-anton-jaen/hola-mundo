import { Animal } from './animal.model';

export interface Colonia {
  id: number;
  nombre: string;
  localizacion: string;
  gatos: Animal[];
  fechaInicio: Date;
  fechaRevision: Date;
}