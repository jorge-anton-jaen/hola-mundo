import { Captura } from './Captura.model';

export type TipoUbicacion = 'Colonia' | 'Taller' | 'Via publica' | 'Domicilio';

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