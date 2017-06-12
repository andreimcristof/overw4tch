import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export const Backend = {
  url:  'https://data.police.uk/api'
}

export function handleError(error: Response | any){
    let errMsg: string;
    if(error instanceof Response){
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = err;
    }else{
      errMsg = error.message ? error.message : error.toString();
      console.error(errMsg);
    }

    return Observable.throw(errMsg);
}

export function mapDataItem(response: Response){
  let responseItem = response.json();
  return responseItem || { };
}
