import { Animal } from './animal.model';

export interface Captura {
  id: number;
  gatos: Animal[]; // Lista de gatos capturados
  fechaCaptura: Date;
}