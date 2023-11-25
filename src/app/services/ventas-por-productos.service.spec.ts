import { TestBed } from '@angular/core/testing';

import { VentasPorProductosService } from './ventas-por-productos.service';

describe('VentasPorProductosService', () => {
  let service: VentasPorProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentasPorProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
