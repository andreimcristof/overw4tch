import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForceService, ForceServiceTest } from 'app/modules/force/services/force.service';
// import { RouterModule, ActivatedRoute } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';

import { ForceComponent } from './force.component';
import { Observable } from 'rxjs/Observable';

describe('ForceComponent', () => {
  let component: ForceComponent;
  let fixture: ComponentFixture<ForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ ForceComponent ],
      providers: [
        // Location,
        {provide: ForceService, useClass: ForceServiceTest },
        // { provide: ActivatedRoute, useValue: { params: Observable.of({id: 1}) } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
