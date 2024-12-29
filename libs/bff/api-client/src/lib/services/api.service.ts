/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BffApiBaseService } from '../bff-api-base-service';
import { BffApiConfiguration } from '../bff-api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { logger } from '../fn/operations/logger';
import { Logger$Params } from '../fn/operations/logger';
import { login } from '../fn/operations/login';
import { Login$Params } from '../fn/operations/login';
import { refreshToken$Json } from '../fn/operations/refresh-token-json';
import { RefreshToken$Json$Params } from '../fn/operations/refresh-token-json';
import { refreshToken$Plain } from '../fn/operations/refresh-token-plain';
import { RefreshToken$Plain$Params } from '../fn/operations/refresh-token-plain';
import { refreshToken$XWwwFormUrlencoded } from '../fn/operations/refresh-token-x-www-form-urlencoded';
import { RefreshToken$XWwwFormUrlencoded$Params } from '../fn/operations/refresh-token-x-www-form-urlencoded';
import { StatusUp } from '../models/status-up';
import { statusUsingGet } from '../fn/operations/status-using-get';
import { StatusUsingGet$Params } from '../fn/operations/status-using-get';

@Injectable({ providedIn: 'root' })
export class ApiService extends BffApiBaseService {
  constructor(config: BffApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `login()` */
  static readonly LoginPath = '/j_security_check';

  /**
   * Login.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  login$Response(
    params: Login$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return login(this.http, this.rootUrl, params, context);
  }

  /**
   * Login.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  login(params: Login$Params, context?: HttpContext): Observable<void> {
    return this.login$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `refreshToken()` */
  static readonly RefreshTokenPath = '/api-security/refresh';

  /**
   * Refresh Token.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshToken$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  refreshToken$XWwwFormUrlencoded$Response(
    params: RefreshToken$XWwwFormUrlencoded$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return refreshToken$XWwwFormUrlencoded(
      this.http,
      this.rootUrl,
      params,
      context
    );
  }

  /**
   * Refresh Token.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refreshToken$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  refreshToken$XWwwFormUrlencoded(
    params: RefreshToken$XWwwFormUrlencoded$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.refreshToken$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /**
   * Refresh Token.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshToken$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  refreshToken$Json$Response(
    params: RefreshToken$Json$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return refreshToken$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Refresh Token.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refreshToken$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  refreshToken$Json(
    params: RefreshToken$Json$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.refreshToken$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /**
   * Refresh Token.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshToken$Plain()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  refreshToken$Plain$Response(
    params: RefreshToken$Plain$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return refreshToken$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Refresh Token.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refreshToken$Plain$Response()` instead.
   *
   * This method sends `text/plain` and handles request body of type `text/plain`.
   */
  refreshToken$Plain(
    params: RefreshToken$Plain$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.refreshToken$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `logger()` */
  static readonly LoggerPath = '/api-utils/logger';

  /**
   * devolve os logs da aplicação.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logger()` instead.
   *
   * This method sends `application/json;charset=UTF-8` and handles request body of type `application/json;charset=UTF-8`.
   */
  logger$Response(
    params: Logger$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<{}>> {
    return logger(this.http, this.rootUrl, params, context);
  }

  /**
   * devolve os logs da aplicação.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logger$Response()` instead.
   *
   * This method sends `application/json;charset=UTF-8` and handles request body of type `application/json;charset=UTF-8`.
   */
  logger(params: Logger$Params, context?: HttpContext): Observable<{}> {
    return this.logger$Response(params, context).pipe(
      map((r: StrictHttpResponse<{}>): {} => r.body)
    );
  }

  /** Path part for operation `statusUsingGet()` */
  static readonly StatusUsingGetPath = '/api-utils/status';

  /**
   * status.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statusUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  statusUsingGet$Response(
    params?: StatusUsingGet$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<StatusUp>> {
    return statusUsingGet(this.http, this.rootUrl, params, context);
  }

  /**
   * status.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `statusUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statusUsingGet(
    params?: StatusUsingGet$Params,
    context?: HttpContext
  ): Observable<StatusUp> {
    return this.statusUsingGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<StatusUp>): StatusUp => r.body)
    );
  }
}
