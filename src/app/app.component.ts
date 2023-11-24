import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend_almacen';
  mostrarContenido: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    // Suscripción al evento NavigationEnd
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects; // Obtener la ruta actual
        if(currentRoute =='/'){
          this.mostrarContenido=true;
        }else{
          this.mostrarContenido=false;
        }
      }
    });

  }
}
