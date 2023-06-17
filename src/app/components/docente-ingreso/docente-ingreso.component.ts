import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Docente } from 'src/app/models/Docente';
import { User } from 'src/app/models/users.interface';
import { DocenteService } from 'src/app/services/docente.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-docente-ingreso',
  templateUrl: './docente-ingreso.component.html',
  styleUrls: ['./docente-ingreso.component.css']
})
export class DocenteIngresoComponent implements OnInit {

  @Input("docente")
  public docente!:Docente;

  public hijos = false;

  public form!:FormGroup;



  ngOnInit(): void {
      this.form = this.fb.group({
        nombre : ['',[Validators.required]],

        apellido  : ['',[Validators.required]],

        fechaNacimiento  : ['',[Validators.required]],

        direccion : ['',[Validators.required]],

        fechaIngreso  : [0,[Validators.required]]
      });
  }

  constructor(
    private fb:FormBuilder,
    private docenteService : DocenteService
  ){

  }

  @Output("guardar") guardar = new EventEmitter<string>();
  @Output("cancelar") cancelar = new EventEmitter<string>();

  guardarAction(){
    
    if(this.docenteService.agregarDocente(this.form.value)){
      Swal.fire({
        title : 'Exito',
        text : 'Agregado con éxito',
        icon : 'success'
      })
    }
    
    this.guardar.emit();
  }

  cancelarAction(){
    this.cancelar.emit();
  }


}
