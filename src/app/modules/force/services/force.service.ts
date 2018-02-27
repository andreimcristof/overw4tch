import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
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
//
// export class MockForceService: Promise<ForceModel[]> {
//   getAllForces(): Observable<ForceModel[]> {
//     let res: ForceModel[] = [
//       {id: '1', name: '1' },
//       {id: '2', name: '2' }
//     ];
//     return Observable.of(res).map(r => {return r; });
//   }
//
//   getForce(id): Observable<ForceModel> {
//     return Observable.of(null);
//   }
// }
