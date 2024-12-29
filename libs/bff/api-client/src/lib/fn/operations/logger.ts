/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LogRepresentation } from '../../models/log-representation';

export interface Logger$Params {
  /**
   * logs
   */
  body: Array<LogRepresentation>;
}

export function logger(
  http: HttpClient,
  rootUrl: string,
  params: Logger$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<{}>> {
  const rb = new RequestBuilder(rootUrl, logger.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json;charset=UTF-8');
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
        return r as StrictHttpResponse<{}>;
      })
    );
}

logger.PATH = '/api-utils/logger';
