import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/clientes'
      },

      {
        label: 'Tipo producto',
        icon: 'pi pi-fw pi-book',
        routerLink:'/tipo_producto'
      },
      
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-box',
        routerLink:'/productos'
      },

      {
        label: 'Ventas',
        icon: 'pi pi-fw pi-cart-plus',
        routerLink:'/ventas'
      },
      {
        label: 'Ventas por productos',
        icon: 'pi pi-fw pi-arrow-right-arrow-left',
        routerLink:'ventas_por_productos'
      },


    ]
  }

}
