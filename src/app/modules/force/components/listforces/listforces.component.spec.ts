// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Http } from '@angular/http';
import { inject, getTestBed, async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListForcesComponent } from './listforces.component';
import { ForceService } from 'app/modules/force/services/force.service';
import { MaterialModule } from 'app/modules/shared/material/material.module';
import { ForceModel } from 'app/modules/force/models/force.model';

describe('ListforcesComponent', () => {
  let component: ListForcesComponent;
  let fixture: ComponentFixture<ListForcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: ListForcesComponent}
        ]),
        MaterialModule
      ],
      declarations: [ ListForcesComponent ],
      providers: [
        ForceService,
        { provide: Http, useValue: null }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListForcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize service onInit of force component', () => {
    let service = getTestBed().get(ForceService);
    expect(service).toBeDefined();
  });

  it('should fetch list from service when initializing', inject([ForceService], (service: ForceService) => {
    component.ngOnInit();
    let mockList= new Array<ForceModel>();
    let spyGetAllForces = spyOn(service, 'getAllForces').and.callFake(()=> { return mockList });
    expect(spyGetAllForces).toHaveBeenCalled();
  }));
});
