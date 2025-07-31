import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
//import { Captura } from '../../models/captura.model';
import { Captura } from '../../models/Captura.model';
import { FormularioCapturaComponent } from '../formulario-captura/formulario-captura.component';

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
    MatDialogModule,
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

  constructor(private dialog: MatDialog) {
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
    const dialogRef = this.dialog.open(FormularioCapturaComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica para guardar la captura
      }
    });
  }

  editarCaptura(captura: Captura) {
    // Lógica para editar la captura seleccionada
  }

  eliminarCaptura(captura: Captura) {
    // Lógica para eliminar la captura seleccionada
  }
}
