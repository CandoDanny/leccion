import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { AuthGuard } from '../guards/auth.guard';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { DocentesComponent } from './docentes/docentes.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DatosAutorComponent } from './datos-autor/datos-autor.component';

const routes:Route[] = [
  {
    path:'main',
    canActivate : [AuthGuard],
    component:MainComponent,
    children:[
      {
        path:'',
        component:DocentesComponent
      },
      {
        path:'autor',
        component : DatosAutorComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    MainComponent,
    DocentesComponent,
    DatosAutorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    SharedModule,
    NgbModalModule 
  ]
})
export class PagesModule { }
