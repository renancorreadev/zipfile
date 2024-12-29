/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BffApiBaseService } from '../bff-api-base-service';
import { BffApiConfiguration } from '../bff-api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { download } from '../fn/storage/download';
import { Download$Params } from '../fn/storage/download';
import { upload } from '../fn/storage/upload';
import { Upload$Params } from '../fn/storage/upload';

@Injectable({ providedIn: 'root' })
export class StorageService extends BffApiBaseService {
  constructor(config: BffApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `download()` */
  static readonly DownloadPath = '/storage';

  /**
   * Download File Storage
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `download()` instead.
   *
   * This method doesn't expect any request body.
   */
  download$Response(
    params: Download$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<Blob>> {
    return download(this.http, this.rootUrl, params, context);
  }

  /**
   * Download File Storage
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `download$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  download(params: Download$Params, context?: HttpContext): Observable<Blob> {
    return this.download$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `upload()` */
  static readonly UploadPath = '/storage';

  /**
   * Upload File Cloud Storage
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `upload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  upload$Response(
    params?: Upload$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    return upload(this.http, this.rootUrl, params, context);
  }

  /**
   * Upload File Cloud Storage
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `upload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  upload(params?: Upload$Params, context?: HttpContext): Observable<string> {
    return this.upload$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }
}
