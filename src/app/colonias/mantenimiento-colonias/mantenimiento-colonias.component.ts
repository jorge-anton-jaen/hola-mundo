import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Colonia } from '../../models/colonia.model';

@Component({
  selector: 'app-mantenimiento-colonias',
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
  templateUrl: './mantenimiento-colonias.component.html',
  styleUrls: ['./mantenimiento-colonias.component.css']
})
export class MantenimientoColoniasComponent {
  colonias: Colonia[] = [];
  coloniasFiltradas: Colonia[] = [];
  filtroLocalizacion: string = '';
  columnas = ['localizacion', 'gatos', 'fechaInicio', 'fechaRevision', 'acciones'];

  constructor() {
    this.colonias = [];
    this.coloniasFiltradas = this.colonias;
  }

  filtrar() {
    this.coloniasFiltradas = this.colonias.filter(colonia => {
      return this.filtroLocalizacion
        ? colonia.localizacion.toLowerCase().includes(this.filtroLocalizacion.toLowerCase())
        : true;
    });
  }

  abrirDialogoNuevaColonia() {
    // Lógica para abrir un diálogo/modal para añadir una nueva colonia
  }

  editarColonia(colonia: Colonia) {
    // Lógica para editar la colonia seleccionada
  }

  eliminarColonia(colonia: Colonia) {
    // Lógica para eliminar la colonia seleccionada
  }
}
