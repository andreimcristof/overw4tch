import { TestBed, inject } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ForceService, ForceServiceTest } from './force.service';

describe('ForceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [{provide: ForceService, useClass: ForceServiceTest }]
    });
  });

  it('should be created', inject([ForceService], (service: ForceService) => {
    expect(service).toBeTruthy();
  }));
});
