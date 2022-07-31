import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  items!: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig,private jwtHelper: JwtHelperService,private router:Router) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
          label:'Request',
          icon:'pi pi-fw pi-file',
          items:[
           
              {
                  label:'Request',
                  routerLink:"/request",
     
                  icon:'pi pi-fw pi-search'
              },
                 {
                label:'Add',
                routerLink:"/add-request",
   
                icon:'pi pi-fw pi-plus-circle'
            }
             
          ]
      },
      {
        label:'Logout',
        icon:'pi pi-fw pi-sign-out',
        command: (event) => {
          this.logOut();
      }
    }
    
  ];
  }

  logOut(){
 localStorage.removeItem("token");
   localStorage.removeItem("userinfo");
   this.router.navigate(['/login']);


  }
  showMenu(){
    const token = localStorage.getItem("token");

     if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }
}
