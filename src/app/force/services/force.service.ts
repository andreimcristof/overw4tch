import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ForceModel } from '../models/force.model';
import { Backend, handleError, mapDataItem } from '../../backend';

@Injectable()
export class ForceService {
  constructor(private http: Http) { }

  getAllForces(): Observable<ForceModel[]>{
    return this.http.get(Backend.url + '/forces')
          .map(mapDataItem)
          .catch(handleError);
  }
}
