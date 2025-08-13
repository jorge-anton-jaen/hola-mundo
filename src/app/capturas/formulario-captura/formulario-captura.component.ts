import { Component, EventEmitter, Output, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-captura',
  standalone: true,
  imports: [
    FormsModule
],
  templateUrl: './formulario-captura.component.html',
  styleUrls: ['./formulario-captura.component.css']
})
export class FormularioCapturaComponent {
  @Input() captura: any = {
    id: null,
    fechaCaptura: '',
    gatos: []
  };

  @Output() guardar = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();

  onGuardar() {
    this.guardar.emit(this.captura);
  }

  onCancelar() {
    this.cancelar.emit();
  }
}
