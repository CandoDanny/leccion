import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Docente } from 'src/app/models/Docente';
import { DocenteService } from 'src/app/services/docente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input("docentes")
  public docentes!:Docente[];

  @Input("permitirEliminar")
  public permitirEliminar!:boolean;

  @Input("titulo")
  public titulo!:string;
  
  

  @Output("eliminar") eliminar = new EventEmitter<Docente>();


  constructor(
  ){

  }

  eliminarDocente(docente:Docente){

    this.eliminar.emit(docente);
    
  }
}
