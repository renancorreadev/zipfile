/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BffApiBaseService } from '../bff-api-base-service';
import { BffApiConfiguration } from '../bff-api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ComponenteRepresentation } from '../models/componente-representation';
import { delete$ } from '../fn/mysql/delete';
import { Delete$Params } from '../fn/mysql/delete';
import { list } from '../fn/mysql/list';
import { List$Params } from '../fn/mysql/list';
import { update } from '../fn/mysql/update';
import { Update$Params } from '../fn/mysql/update';

@Injectable({ providedIn: 'root' })
export class MysqlService extends BffApiBaseService {
  constructor(config: BffApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `list()` */
  static readonly ListPath = '/mysql';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `list()` instead.
   *
   * This method doesn't expect any request body.
   */
  list$Response(
    params?: List$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<ComponenteRepresentation>>> {
    return list(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `list$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  list(
    params?: List$Params,
    context?: HttpContext
  ): Observable<Array<ComponenteRepresentation>> {
    return this.list$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<Array<ComponenteRepresentation>>
        ): Array<ComponenteRepresentation> => r.body
      )
    );
  }

  /** Path part for operation `update()` */
  static readonly UpdatePath = '/mysql';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update$Response(
    params: Update$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<ComponenteRepresentation>> {
    return update(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update(
    params: Update$Params,
    context?: HttpContext
  ): Observable<ComponenteRepresentation> {
    return this.update$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<ComponenteRepresentation>
        ): ComponenteRepresentation => r.body
      )
    );
  }

  /** Path part for operation `delete()` */
  static readonly DeletePath = '/mysql';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(
    params: Delete$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    return delete$(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: Delete$Params, context?: HttpContext): Observable<string> {
    return this.delete$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }
}
