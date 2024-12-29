/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ComponenteRepresentation } from '../../models/componente-representation';
import { Pageable } from '../../models/pageable';

export interface List$Params {
  /**
   * Status UP or DOWN
   */
  status?: 'UP' | 'DOWN';

  /**
   * you can send sort: ['id,DESC'] for sorted
   */
  pageable?: Pageable;
}

export function list(
  http: HttpClient,
  rootUrl: string,
  params?: List$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<Array<ComponenteRepresentation>>> {
  const rb = new RequestBuilder(rootUrl, list.PATH, 'get');
  if (params) {
    rb.query('status', params.status, {});
    rb.query('pageable', params.pageable, {});
  }

  return http
    .request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    )
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ComponenteRepresentation>>;
      })
    );
}

list.PATH = '/mysql';
