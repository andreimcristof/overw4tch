import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForceService, MockForceService } from 'app/modules/force/services/force.service';
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
        {provide: ForceService, useClass: MockForceService },
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
