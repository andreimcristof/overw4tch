import { ConnectionBackend, Http, BaseRequestOptions, RequestOptions } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ForceService } from 'app/modules/force/services/force.service';
import { RouterTestingModule } from '@angular/router/testing';

import { ForceComponent } from './force.component';

describe('ForceComponent', () => {
  let component: ForceComponent;
  let fixture: ComponentFixture<ForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ ForceComponent ]
    })
    .compileComponents();
  }));


  //TODO refactor
  beforeEach(() => {
    this.injector = Injector.create(
       [
          { provide: ConnectionBackend, useClass: MockBackend, useFactory: MockBackend },
          { provide: RequestOptions, useClass: BaseRequestOptions, useFactory: BaseRequestOptions },
          { provide: Http, useClass: Http, useFactory: Http },
          { provide: ForceService, useClass: ForceService, useFactory: ForceService }
      ]
    );
    this.forceService = this.injector.get(ForceService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((conn)=> { this.lastConnection = conn });

    fixture = TestBed.createComponent(ForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
