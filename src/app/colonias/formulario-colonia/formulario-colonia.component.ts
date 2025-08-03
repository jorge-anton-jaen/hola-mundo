import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-colonia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './formulario-colonia.component.html',
  styleUrls: ['./formulario-colonia.component.css']
})
export class FormularioColoniaComponent {
  @Input() colonia: any = {
    id: null,
    nombre: '',
    localizacion: '',
    fechaInicio: '',
    fechaRevision: '',
    gatos: []
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
