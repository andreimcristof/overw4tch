// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ListForcesComponent } from './listforces.component';
import { ForceService, MockForceService } from 'app/modules/force/services/force.service';
import { MaterialModule } from 'app/modules/shared/material/material.module';

describe('ListforcesComponent', () => {
  let component: ListForcesComponent;
  let fixture: ComponentFixture<ListForcesComponent>;
  let mockForceService: MockForceService;

  let forceServiceSpy: jasmine.Spy;

  beforeEach(async(() => {
    mockForceService = new MockForceService();

    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        MaterialModule
      ],
      declarations: [ ListForcesComponent ],
      providers: [{provide: ForceService, useValue: mockForceService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListForcesComponent); //ctor of component is called
    component = fixture.componentInstance;
    fixture.detectChanges();
    forceServiceSpy = spyOn(mockForceService, 'getAllForces');
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize service onInit of force component', () => {
    expect(mockForceService).toBeDefined();
  });

  it('should fetch list from service when initializing', () => {
    fixture.detectChanges();
    expect(mockForceService.getAllForces).toHaveBeenCalled();
  });
});
