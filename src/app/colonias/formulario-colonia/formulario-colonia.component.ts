import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-formulario-colonia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './formulario-colonia.component.html',
  styleUrls: ['./formulario-colonia.component.css']
})
export class FormularioColoniaComponent {
  colonia = {
    localizacion: '',
    fechaInicio: '',
    fechaRevision: ''
    // gatos: [] // Puedes añadir lógica para gatos si lo necesitas
  };

  @Output() guardar = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();

  onGuardar() {
    this.guardar.emit(this.colonia);
  }

  onCancelar() {
    this.cancelar.emit();
  }
}
