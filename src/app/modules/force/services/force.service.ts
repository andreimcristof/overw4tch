import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ForceModel } from 'app/modules/force/models/force.model';
import { Backend } from 'app/backend';
import { Observable } from 'rxjs';

@Injectable()
export class ForceService {
  constructor(private httpClient: HttpClient) { }

  getAllForces(): Observable<ForceModel[]>{
    return this.httpClient
            .get<ForceModel[]>(Backend.url + '/forces');
  }

  getForce(id: string): Observable<ForceModel> {
    console.info("getForce")
    return this.httpClient
            .get<ForceModel>(Backend.url + '/forces/' + id)
  }
}