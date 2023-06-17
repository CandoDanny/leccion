import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Docentes',
      icono: 'mdi mdi-account-edit',
      url : 'app/main',
      submenu: [
        { titulo: 'Listado', url: 'ventas' },
      ]
    },
    {
      titulo: 'Datos Autor',
      icono: 'mdi mdi-account-tie-outline',
      url : '/app/main/autor',
      submenu: [
        { titulo: 'Listado', url: 'ventas' },
      ]
    }
  ];

  constructor() { }
}

