import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocenteIngresoComponent } from './docente-ingreso/docente-ingreso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    DocenteIngresoComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    
    DocenteIngresoComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
