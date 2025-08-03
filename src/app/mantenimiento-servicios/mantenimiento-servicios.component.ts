import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Servicio, TipoUbicacion } from '../models/servicio.model';
import { FormularioServicioComponent } from '../formulario-servicio/formulario-servicio.component';

@Component({
  selector: 'app-mantenimiento-servicios',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormularioServicioComponent
  ],
  templateUrl: './mantenimiento-servicios.component.html',
  styleUrls: ['./mantenimiento-servicios.component.css']
})
export class MantenimientoServiciosComponent {
  servicios: Servicio[] = []; // Aquí irán tus servicios (puedes cargar desde un servicio)
  serviciosFiltrados: Servicio[] = [];
  filtroAviso: string = '';
  filtroPoblacion: string = '';
  columnas = ['aviso', 'fechaInicio', 'fechaFin', 'poblacion', 'acciones'];
  mostrarFormularioServicio = false;
  servicioEditando: Servicio | null = null;

  constructor() {
    // 6 elementos ficticios para servicios
    this.servicios = [
      {
        id: 1,
        aviso: 'Captura en Calle Mayor',
        fechaInicio: new Date('2024-07-01'),
        fechaFin: new Date('2024-07-03'),
        poblacion: 'Madrid',
        direccion: 'Calle Mayor, 1',
        ubicacion: 'Centro',
        tipoUbicacion: TipoUbicacion.Urbana,
        codigoPostal: '28013',
        capturas: []
      },
      {
        id: 2,
        aviso: 'Revisión en taller',
        fechaInicio: new Date('2024-07-05'),
        fechaFin: new Date('2024-07-06'),
        poblacion: 'Madrid',
        direccion: 'Taller Central, Calle Sol, 10',
        ubicacion: 'Centro',
        tipoUbicacion: TipoUbicacion.Industrial,
        codigoPostal: '28014',
        capturas: []
      },
      {
        id: 3,
        aviso: 'Vacunación en Plaza Norte',
        fechaInicio: new Date('2024-07-10'),
        fechaFin: new Date('2024-07-10'),
        poblacion: 'Alcobendas',
        direccion: 'Plaza Norte, s/n',
        ubicacion: 'Norte',
        tipoUbicacion: TipoUbicacion.Urbana,
        codigoPostal: '28100',
        capturas: []
      },
      {
        id: 4,
        aviso: 'Esterilización en Centro Sur',
        fechaInicio: new Date('2024-07-12'),
        fechaFin: new Date('2024-07-13'),
        poblacion: 'Getafe',
        direccion: 'Centro Sur, Av. Andalucía, 20',
        ubicacion: 'Sur',
        tipoUbicacion: TipoUbicacion.Urbana,
        codigoPostal: '28901',
        capturas: []
      },
      {
        id: 5,
        aviso: 'Revisión anual en Parque Este',
        fechaInicio: new Date('2024-07-15'),
        fechaFin: new Date('2024-07-15'),
        poblacion: 'Leganés',
        direccion: 'Parque Este, Calle Verde, 5',
        ubicacion: 'Este',
        tipoUbicacion: TipoUbicacion.Parque,
        codigoPostal: '28915',
        capturas: []
      },
      {
        id: 6,
        aviso: 'Captura en Calle Luna',
        fechaInicio: new Date('2024-07-18'),
        fechaFin: new Date('2024-07-19'),
        poblacion: 'Fuenlabrada',
        direccion: 'Calle Luna, 8',
        ubicacion: 'Centro',
        tipoUbicacion: TipoUbicacion.Urbana,
        codigoPostal: '28940',
        capturas: []
      }
    ];
    this.serviciosFiltrados = this.servicios;
  }

  filtrar() {
    this.serviciosFiltrados = this.servicios.filter(servicio => {
      const coincideAviso = this.filtroAviso ?
        servicio.aviso.toLowerCase().includes(this.filtroAviso.toLowerCase()) : true;
      const coincidePoblacion = this.filtroPoblacion ?
        servicio.poblacion.toLowerCase().includes(this.filtroPoblacion.toLowerCase()) : true;
      return coincideAviso && coincidePoblacion;
    });
  }

  abrirDialogoNuevoServicio() {
    this.servicioEditando = null;
    this.mostrarFormularioServicio = true;
  }

  editarServicio(servicio: Servicio) {
    // Clona el servicio para evitar modificar el array original hasta guardar
    this.servicioEditando = { ...servicio, capturas: [...servicio.capturas] };
    this.mostrarFormularioServicio = true;
  }

  cerrarFormularioServicio() {
    this.mostrarFormularioServicio = false;
    this.servicioEditando = null;
  }

  guardarServicio(servicio: Servicio) {
  // lógica para guardar el servicio
}

  /*guardarServicio(servicio: Servicio) {
    if (servicio.id) {
      // Editar existente
      const idx = this.servicios.findIndex(s => s.id === servicio.id);
      if (idx > -1) this.servicios[idx] = servicio;
    } else {
      // Añadir nuevo
      servicio.id = Date.now();
      this.servicios.push(servicio);
    }
    this.filtrar();
    this.cerrarFormularioServicio();
  }*/

  eliminarServicio(servicio: Servicio) {
    // Lógica para eliminar el servicio seleccionado
  }
}
