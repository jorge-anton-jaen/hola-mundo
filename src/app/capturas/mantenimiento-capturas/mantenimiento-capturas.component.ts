import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Captura } from '../../models/Captura.model';
import { FormularioCapturaComponent } from '../formulario-captura/formulario-captura.component';

@Component({
  selector: 'app-mantenimiento-capturas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormularioCapturaComponent
  ],
  templateUrl: './mantenimiento-capturas.component.html',
  styleUrls: ['./mantenimiento-capturas.component.css']
})
export class MantenimientoCapturasComponent {
  capturas: Captura[] = [];
  capturasFiltradas: Captura[] = [];
  filtroFecha?: Date;
  filtroGato: string = '';
  columnas = ['fecha', 'gatos', 'acciones'];
  mostrarFormularioCaptura = false;
  capturaEditando: any = null;

/*  *** MOCK SERVICIOS ***  */

  servicios = [
    {
      id: 1,
      aviso: 'Captura en Calle Mayor',
      fechaInicio: new Date('2024-07-01'),
      fechaFin: new Date('2024-07-03'),
      direccion: 'Calle Mayor 12',
      poblacion: 'Madrid',
      ubicacion: 'Calle Mayor 12',
      tipoUbicacion: 'Via publica',
      codigoPostal: '28013',
      capturas: []
    },
    {
      id: 2,
      aviso: 'Revisión en taller',
      fechaInicio: new Date('2024-07-05'),
      fechaFin: new Date('2024-07-06'),
      direccion: 'Taller El Gato',
      poblacion: 'Madrid',
      ubicacion: 'Taller El Gato',
      tipoUbicacion: 'Taller',
      codigoPostal: '28014',
      capturas: []
    }
  ];
  serviciosFiltrados = this.servicios;

  constructor() {
    this.capturas = [
      {
        id: 1,
        gatos: [
          { id: 1, nombre: 'Luna', tipo: 'gato', edadAproximada: 2, sexo: 'hembra', color: 'gris', fechaRescate: new Date('2024-07-01'), lugarRescate: 'Calle Mayor', descripcion: 'Gata joven', estadoSalud: 'Saludable', vacunado: true, esterilizado: true, adoptado: false }
        ],
        fechaCaptura: new Date('2024-07-01')
      },
      {
        id: 2,
        gatos: [
          { id: 2, nombre: 'Max', tipo: 'gato', edadAproximada: 3, sexo: 'macho', color: 'negro', fechaRescate: new Date('2024-07-02'), lugarRescate: 'Taller El Gato', descripcion: 'Gato adulto', estadoSalud: 'Herido', vacunado: false, esterilizado: false, adoptado: false }
        ],
        fechaCaptura: new Date('2024-07-02')
      }
    ];
    this.capturasFiltradas = this.capturas;
  }

  filtrar() {
    this.capturasFiltradas = this.capturas.filter(captura => {
      const coincideFecha = this.filtroFecha ?
        new Date(captura.fechaCaptura).toDateString() === new Date(this.filtroFecha).toDateString() : true;
      const coincideGato = this.filtroGato ?
        captura.gatos.some(gato => gato.nombre.toLowerCase().includes(this.filtroGato.toLowerCase())) : true;
      return coincideFecha && coincideGato;
    });
  }

  abrirDialogoNuevaCaptura() {
    this.capturaEditando = null;
    this.mostrarFormularioCaptura = true;
  }

  editarCaptura(captura: any) {
    // Clona la captura para evitar modificar el array original hasta guardar
    this.capturaEditando = { ...captura, gatos: [...captura.gatos] };
    this.mostrarFormularioCaptura = true;
  }

   eliminarCaptura(captura: any) {
    this.capturas = this.capturas.filter(c => c.id !== captura.id);
    this.filtrar();
   }

  cerrarFormularioCaptura() {
    this.mostrarFormularioCaptura = false;
    this.capturaEditando = null;
  }

  guardarCaptura(captura: any) {
    if (captura.id) {
      // Editar existente
      const idx = this.capturas.findIndex(c => c.id === captura.id);
      if (idx > -1) this.capturas[idx] = captura;
    } else {
      // Añadir nueva
      captura.id = Date.now();
      this.capturas.push(captura);
    }
    this.filtrar();
    this.cerrarFormularioCaptura();
  }
}
