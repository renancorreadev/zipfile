/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ComponenteRepresentation } from '../../models/componente-representation';

export interface Update$Params {
  body: ComponenteRepresentation;
}

export function update(
  http: HttpClient,
  rootUrl: string,
  params: Update$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<ComponenteRepresentation>> {
  const rb = new RequestBuilder(rootUrl, update.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http
    .request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    )
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ComponenteRepresentation>;
      })
    );
}

update.PATH = '/mysql';
