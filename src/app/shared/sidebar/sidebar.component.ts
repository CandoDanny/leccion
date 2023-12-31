import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObraRandom } from 'src/app/models/ObraRandom';
import { AuthService } from 'src/app/services/auth.service';
import { ObrasService } from 'src/app/services/obras.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public menuItems: any[];

  constructor( private sidebarService: SidebarService,
               ) {
    this.menuItems = sidebarService.menu;
  }

  ngOnInit(): void {
  }


  /*obrasRandom:ObraRandom[] = [];


  constructor(
    private obrasService:ObrasService,
    private authService:AuthService,
    private router:Router
  ){
      this.obrasService.getObrasRandom()
            .subscribe((obras:any)=>{
              this.obrasRandom = obras;
            })
  }

  irFavoritas(){
    this.router.navigateByUrl('/app/main/obrasfavoritas');
  }
  irAutores(){
    this.router.navigateByUrl('/app/main');
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }*/
}
