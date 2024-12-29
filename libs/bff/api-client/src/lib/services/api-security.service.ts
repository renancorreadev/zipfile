/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BffApiBaseService } from '../bff-api-base-service';
import { BffApiConfiguration } from '../bff-api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { logout } from '../fn/api-security/logout';
import { Logout$Params } from '../fn/api-security/logout';
import { securityInfo } from '../fn/api-security/security-info';
import { SecurityInfo$Params } from '../fn/api-security/security-info';
import { UserRepresentation } from '../models/user-representation';

@Injectable({ providedIn: 'root' })
export class ApiSecurityService extends BffApiBaseService {
  constructor(config: BffApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `securityInfo()` */
  static readonly SecurityInfoPath = '/api-security/me';

  /**
   * Informações de acessos a partir das roles físicas.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityInfo$Response(
    params?: SecurityInfo$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<UserRepresentation>>> {
    return securityInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * Informações de acessos a partir das roles físicas.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityInfo(
    params?: SecurityInfo$Params,
    context?: HttpContext
  ): Observable<Array<UserRepresentation>> {
    return this.securityInfo$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<Array<UserRepresentation>>
        ): Array<UserRepresentation> => r.body
      )
    );
  }

  /** Path part for operation `logout()` */
  static readonly LogoutPath = '/api-security/logout';

  /**
   * Invalida a sessão.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logout()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout$Response(
    params?: Logout$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    return logout(this.http, this.rootUrl, params, context);
  }

  /**
   * Invalida a sessão.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout(params?: Logout$Params, context?: HttpContext): Observable<string> {
    return this.logout$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }
}
