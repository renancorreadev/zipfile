/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface RefreshToken$XWwwFormUrlencoded$Params {
  /**
   * Refresh Token - Back for Front
   */
  body: {
    refresh_token?: string;
  };
}

export function refreshToken$XWwwFormUrlencoded(
  http: HttpClient,
  rootUrl: string,
  params: RefreshToken$XWwwFormUrlencoded$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(
    rootUrl,
    refreshToken$XWwwFormUrlencoded.PATH,
    'post'
  );
  if (params) {
    rb.body(params.body, 'application/x-www-form-urlencoded');
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

refreshToken$XWwwFormUrlencoded.PATH = '/api-security/refresh';
