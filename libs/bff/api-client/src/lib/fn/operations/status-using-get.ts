/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StatusUp } from '../../models/status-up';

export interface StatusUsingGet$Params {}

export function statusUsingGet(
  http: HttpClient,
  rootUrl: string,
  params?: StatusUsingGet$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<StatusUp>> {
  const rb = new RequestBuilder(rootUrl, statusUsingGet.PATH, 'get');
  if (params) {
  }

  return http
    .request(
      rb.build({
        responseType: 'json',
        accept: 'application/json;charset=UTF-8',
        context,
      })
    )
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatusUp>;
      })
    );
}

statusUsingGet.PATH = '/api-utils/status';
