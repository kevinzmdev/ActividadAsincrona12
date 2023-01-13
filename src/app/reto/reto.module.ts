import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRetoComponent } from './formulario-reto/formulario-reto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAsincronaComponent } from './form-asincrona/form-asincrona.component';


@NgModule({
  declarations: [
    FormularioRetoComponent,
    FormAsincronaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FormularioRetoComponent,
    FormAsincronaComponent
  ]
})
export class RetoModule { }
