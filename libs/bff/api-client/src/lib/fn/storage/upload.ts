/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface Upload$Params {
  bucketName?: string;
  folder?: string;
  body?: {
    file: Blob;
  };
}

export function upload(
  http: HttpClient,
  rootUrl: string,
  params?: Upload$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, upload.PATH, 'post');
  if (params) {
    rb.query('bucketName', params.bucketName, {});
    rb.query('folder', params.folder, {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http
    .request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    )
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
}

upload.PATH = '/storage';
