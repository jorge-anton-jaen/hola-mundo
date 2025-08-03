import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Colonia } from '../../models/colonia.model';
import { FormularioColoniaComponent } from '../formulario-colonia/formulario-colonia.component';


@Component({
  selector: 'app-mantenimiento-colonias',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    
    FormularioColoniaComponent
  ],
  templateUrl: './mantenimiento-colonias.component.html',
  styleUrls: ['./mantenimiento-colonias.component.css']
})
export class MantenimientoColoniasComponent {
  colonias: Colonia[] = [
    {
      id: 1,
      nombre: 'Colonia Parque Central',
      localizacion: 'Parque Central',
      gatos: [
        { id: 1, nombre: 'Luna', tipo: 'gato', edadAproximada: 2, sexo: 'hembra', color: 'gris', fechaRescate: new Date('2024-07-01'), lugarRescate: 'Calle Mayor', descripcion: 'Gata joven', estadoSalud: 'Saludable', vacunado: true, esterilizado: true, adoptado: false }
      ],
      fechaInicio: new Date('2024-06-01'),
      fechaRevision: new Date('2024-07-01')
    },
    {
      id: 2,
      nombre: 'Colonia Calle Mayor',
      localizacion: 'Calle Mayor',
      gatos: [
        { id: 2, nombre: 'Max', tipo: 'gato', edadAproximada: 3, sexo: 'macho', color: 'negro', fechaRescate: new Date('2024-07-02'), lugarRescate: 'Taller El Gato', descripcion: 'Gato adulto', estadoSalud: 'Herido', vacunado: false, esterilizado: false, adoptado: false }
      ],
      fechaInicio: new Date('2024-06-15'),
      fechaRevision: new Date('2024-07-05')
    }
  ];
  coloniasFiltradas: Colonia[] = this.colonias;
  filtroLocalizacion: string = '';
  columnas = ['localizacion', 'gatos', 'fechaInicio', 'fechaRevision', 'acciones'];
  mostrarFormularioColonia = false;
  coloniaEditando: Colonia | null = null;
constructor() {
  }

  filtrar() {
    this.coloniasFiltradas = this.colonias.filter(colonia => {
      return this.filtroLocalizacion
        ? colonia.localizacion.toLowerCase().includes(this.filtroLocalizacion.toLowerCase())
        : true;
    });
  }

  abrirDialogoNuevaColonia() {
    this.coloniaEditando = null;
    this.mostrarFormularioColonia = true;
  }

  editarColonia(colonia: Colonia) {
    // Clona la colonia para evitar modificar el array original hasta guardar
    this.coloniaEditando = { ...colonia, gatos: [...colonia.gatos] };
    this.mostrarFormularioColonia = true;
  }

  cerrarFormularioColonia() {
    this.mostrarFormularioColonia = false;
    this.coloniaEditando = null;
  }

  guardarColonia(colonia: Colonia) {
    if (colonia.id) {
      // Editar existente
      const idx = this.colonias.findIndex(c => c.id === colonia.id);
      if (idx > -1) this.colonias[idx] = colonia;
    } else {
      // Añadir nueva
      colonia.id = Date.now();
      this.colonias.push(colonia);
    }
    this.filtrar();
    this.cerrarFormularioColonia();
  }

   eliminarColonia(colonia: Colonia) {
    this.colonias = this.colonias.filter(c => c.id !== colonia.id);
    this.filtrar();
  }
  

}
