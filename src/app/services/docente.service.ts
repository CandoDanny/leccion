import { Injectable } from '@angular/core';
import { Docente } from '../models/Docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  public docentes:Docente[] = [];
  public docentesEliminados:Docente[] = [];

  constructor() { }

  agregarDocente(docente:Docente){
    docente.id = this.docentes.length;
    this.docentes.push(docente);
    return true;
  }

  eliminarDocente(docente:Docente){
    let docenteBusqueda = this.docentes
              .find((doc)=>doc.id == docente.id);

    console.log(docenteBusqueda);
    
    if(docenteBusqueda !== undefined){
      this.docentesEliminados.push(docente);
      this.docentes = this.docentes.filter((doc)=>doc.id !== docenteBusqueda?.id)
      return true;
    } 
    return false;
  }

  listarDocentes(){
    return this.docentes;
  }

  listarDocentesEliminados(){
    return this.docentesEliminados;
  }



}
