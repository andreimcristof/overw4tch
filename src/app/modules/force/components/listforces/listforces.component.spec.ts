import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ListForcesComponent } from './listforces.component';
import { ForceService, ForceServiceTest } from 'app/modules/force/services/force.service';

describe('ListforcesComponent', () => {
  let component: ListForcesComponent;
  let fixture: ComponentFixture<ListForcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ ListForcesComponent ],
      providers: [{provide: ForceService, useClass: ForceServiceTest }]
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
