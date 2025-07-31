import { Animal } from './animal.model';

export interface Colonia {
  id: number;
  localizacion: string;
  gatos: Animal[];
  fechaInicio: Date;
  fechaRevision: Date;
}