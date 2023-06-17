import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';

import { User } from '../../models/users.interface';

import { Subscription, first, map, of, switchMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Response } from 'src/app/models/response.interface';
import { text } from '@fortawesome/fontawesome-svg-core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Docente } from 'src/app/models/Docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styles: [
  ]
})
export class DocentesComponent implements OnInit{

  public docentes: Docente[] = [];

  public docentesEliminados: Docente[] = [];



  public cargando: boolean = false;

  constructor( private userService: UserService,
              private modalService: NgbModal,
              private docenteService : DocenteService
              ) { }
  

  ngOnInit(): void {
    
    this.docentes = this.docenteService.listarDocentes();

  }

  registrarUsuarios(users:User[]){
    console.log(users);
    this.userService.registerUsers(users)
          .subscribe((resp:any)=>{
            console.log(resp);
            if(resp.estado == 'ok'){
              Swal.fire({
                title : 'Exito',
                text: resp.mensaje ,
                icon : 'success'
              })
            }
            else{
              Swal.fire({
                title : 'Error',
                text: resp.mensaje ,
                icon : 'error'
              })
            }
          });
  }

  eliminarDocente( docente: Docente ) {

    if(this.docenteService.eliminarDocente(docente)){
      Swal.fire({
        title : 'Exito',
        text : 'Eliminado con éxito',
        icon : 'success'
      })
    }

    this.docentes = this.docenteService.listarDocentes();
    this.docentesEliminados = this.docenteService.listarDocentesEliminados();
  }

  agregarDocente(content:any){
    this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } )
      .result.then((result=>{

    }));
    this.docentes = this.docenteService.listarDocentes();

  }

}
