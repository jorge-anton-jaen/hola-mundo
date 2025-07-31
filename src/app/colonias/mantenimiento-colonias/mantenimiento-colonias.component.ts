import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Colonia } from '../../models/colonia.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormularioColoniaComponent } from '../formulario-colonia/formulario-colonia.component';

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
    MatIconModule,
    MatDialogModule,
    FormularioColoniaComponent
  ],
  templateUrl: './mantenimiento-colonias.component.html',
  styleUrls: ['./mantenimiento-colonias.component.css']
})
export class MantenimientoColoniasComponent {
  colonias: Colonia[] = [];
  coloniasFiltradas: Colonia[] = [];
  dialog: MatDialog;
  filtroLocalizacion: string = '';
  columnas = ['localizacion', 'gatos', 'fechaInicio', 'fechaRevision', 'acciones'];
  

  constructor(private dialogParam: MatDialog) {
    this.colonias = [];
    this.coloniasFiltradas = this.colonias;
    this.dialog = dialogParam;
  }

  filtrar() {
    this.coloniasFiltradas = this.colonias.filter(colonia => {
      return this.filtroLocalizacion
        ? colonia.localizacion.toLowerCase().includes(this.filtroLocalizacion.toLowerCase())
        : true;
    });
  }

  abrirDialogoNuevaColonia() {
  const dialogRef = this.dialog.open(FormularioColoniaComponent, {
    width: '400px'
  });
   dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Lógica para guardar la colonia
    }
  });
}

  editarColonia(colonia: Colonia) {
    // Lógica para editar la colonia seleccionada
  }

  eliminarColonia(colonia: Colonia) {
    // Lógica para eliminar la colonia seleccionada
  }
}
