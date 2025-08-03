import { Captura } from './Captura.model';

export enum TipoUbicacion {
  Urbana = 'Urbana',
  Industrial = 'Industrial',
  Parque = 'Parque'
}

export interface Servicio {
  id: number;
  aviso: string;
  fechaInicio: Date;
  fechaFin: Date;
  direccion: string;
  poblacion: string;
  ubicacion: string;
  tipoUbicacion: TipoUbicacion;
  codigoPostal: string;
  capturas: Captura[];
}