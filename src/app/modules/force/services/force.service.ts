import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ForceModel } from 'app/modules/force/models/force.model';
import { Backend, handleError, mapDataItem } from 'app/backend';

@Injectable()
export class ForceService {
  constructor(private http: Http) { }

  getAllForces(): Promise<ForceModel[]>{
    return this.http.get(Backend.url + '/forces')
          .map(mapDataItem)
          .toPromise()
          .catch(handleError)
  }

  getForce(id: string): Promise<ForceModel> {
    return this.http.get(Backend.url + '/forces/' + id)
          .map(mapDataItem)
          .toPromise()
          .catch(handleError);
  }
}