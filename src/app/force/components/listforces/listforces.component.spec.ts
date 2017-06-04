import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListForcesComponent } from './listforces.component';

describe('ListforcesComponent', () => {
  let component: ListForcesComponent;
  let fixture: ComponentFixture<ListForcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListForcesComponent ]
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
});
