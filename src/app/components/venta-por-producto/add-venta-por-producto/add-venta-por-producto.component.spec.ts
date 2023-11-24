import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVentaPorProductoComponent } from './add-venta-por-producto.component';

describe('AddVentaPorProductoComponent', () => {
  let component: AddVentaPorProductoComponent;
  let fixture: ComponentFixture<AddVentaPorProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVentaPorProductoComponent]
    });
    fixture = TestBed.createComponent(AddVentaPorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
