import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoProductoComponent } from './list-tipo-producto.component';

describe('ListTipoProductoComponent', () => {
  let component: ListTipoProductoComponent;
  let fixture: ComponentFixture<ListTipoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTipoProductoComponent]
    });
    fixture = TestBed.createComponent(ListTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
