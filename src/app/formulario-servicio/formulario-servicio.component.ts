import { Component, EventEmitter, Output, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-servicio',
  standalone: true,
  imports: [
    FormsModule
],
  templateUrl: './formulario-servicio.component.html',
  styleUrls: ['./formulario-servicio.component.css']
})
export class FormularioServicioComponent {
  @Input() servicio: any = {
    id: null,
    aviso: '',
    fechaInicio: '',
    fechaFin: '',
    poblacion: '',
    direccion: '',
    ubicacion: '',
    tipoUbicacion: '',
    codigoPostal: '',
    capturas: []
  };

  @Output() guardar = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();

  onGuardar() {
    this.guardar.emit(this.servicio);
  }

  onCancelar() {
    this.cancelar.emit();
  }
}
