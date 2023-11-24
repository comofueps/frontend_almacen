import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoProductoComponent } from './add-tipo-producto.component';

describe('AddTipoProductoComponent', () => {
  let component: AddTipoProductoComponent;
  let fixture: ComponentFixture<AddTipoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTipoProductoComponent]
    });
    fixture = TestBed.createComponent(AddTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
