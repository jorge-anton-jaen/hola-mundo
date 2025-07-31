import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Captura } from '../../models/Captura.model';

@Component({
  selector: 'app-mantenimiento-capturas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './mantenimiento-capturas.component.html',
  styleUrls: ['./mantenimiento-capturas.component.css']
})
export class MantenimientoCapturasComponent {
   capturas: Captura[] = []; // Aquí irán tus capturas (puedes cargar desde un servicio)
  capturasFiltradas: Captura[] = [];
  filtroFecha?: Date;
  filtroGato: string = '';
  columnas = ['fecha', 'gatos', 'acciones'];

  constructor() {
    // Carga inicial de capturas (puedes reemplazar por llamada a servicio)
    this.capturas = [];
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
    // Lógica para abrir un diálogo/modal para añadir una nueva captura
  }

  editarCaptura(captura: Captura) {
    // Lógica para editar la captura seleccionada
  }

  eliminarCaptura(captura: Captura) {
    // Lógica para eliminar la captura seleccionada
  }

}
