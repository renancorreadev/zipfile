/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface RefreshToken$Json$Params {
  /**
   * Refresh Token - Back for Front
   */
  body: {
    refresh_token?: string;
  };
}

export function refreshToken$Json(
  http: HttpClient,
  rootUrl: string,
  params: RefreshToken$Json$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, refreshToken$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http
    .request(rb.build({ responseType: 'text', accept: '*/*', context }))
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({
          body: undefined,
        }) as StrictHttpResponse<void>;
      })
    );
}

refreshToken$Json.PATH = '/api-security/refresh';
