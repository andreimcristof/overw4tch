import { Http } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ForceService } from './force.service';

describe('ForceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        ForceService,
        { provide: Http, useValue: null }
      ]
    });
  });

  it('should be created', inject([ForceService], (service: ForceService) => {
    expect(service).toBeTruthy();
  }));
});
