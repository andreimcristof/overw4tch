import { TestBed, inject } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ForceService, MockForceService } from './force.service';

describe('ForceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [{provide: ForceService, useClass: MockForceService }]
    });
  });

  it('should be created', inject([ForceService], (service: ForceService) => {
    expect(service).toBeTruthy();
  }));
});
