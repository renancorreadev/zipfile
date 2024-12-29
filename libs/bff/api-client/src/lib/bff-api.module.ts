/* eslint-disable */
import {
  NgModule,
  ModuleWithProviders,
  SkipSelf,
  Optional,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BffApiConfiguration,
  BffApiConfigurationParams,
} from './bff-api-configuration';

import { StorageService } from './services/storage.service';
import { MysqlService } from './services/mysql.service';
import { ApiService } from './services/api.service';
import { ApiSecurityService } from './services/api-security.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    StorageService,
    MysqlService,
    ApiService,
    ApiSecurityService,
    BffApiConfiguration,
  ],
})
export class BffApiModule {
  static forRoot(
    params: BffApiConfigurationParams
  ): ModuleWithProviders<BffApiModule> {
    return {
      ngModule: BffApiModule,
      providers: [
        {
          provide: BffApiConfiguration,
          useValue: params,
        },
      ],
    };
  }

  constructor(
    @Optional() @SkipSelf() parentModule: BffApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error(
        'BffApiModule is already loaded. Import in your base AppModule only.'
      );
    }
    if (!http) {
      throw new Error(
        'You need to import the HttpClientModule in your AppModule! \n' +
          'See also https://github.com/angular/angular/issues/20575'
      );
    }
  }
}
