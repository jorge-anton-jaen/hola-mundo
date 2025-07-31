import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Servicio } from '../models/servicio.model';

@Component({
  selector: 'app-mantenimiento-servicios',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
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

  constructor() {
    // Carga inicial de servicios (puedes reemplazar por llamada a servicio)
    this.servicios = [];
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
    // Lógica para abrir un diálogo/modal para añadir un nuevo servicio
  }

  editarServicio(servicio: Servicio) {
    // Lógica para editar el servicio seleccionado
  }

  eliminarServicio(servicio: Servicio) {
    // Lógica para eliminar el servicio seleccionado
  }
}
