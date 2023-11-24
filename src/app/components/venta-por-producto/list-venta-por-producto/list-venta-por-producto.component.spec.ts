import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVentaPorProductoComponent } from './list-venta-por-producto.component';

describe('ListVentaPorProductoComponent', () => {
  let component: ListVentaPorProductoComponent;
  let fixture: ComponentFixture<ListVentaPorProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListVentaPorProductoComponent]
    });
    fixture = TestBed.createComponent(ListVentaPorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
