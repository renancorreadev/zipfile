/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class BffApiConfiguration {
  rootUrl: string = 'http://localhost:8080';
}

/**
 * Parameters for `BffApiModule.forRoot()`
 */
export interface BffApiConfigurationParams {
  rootUrl?: string;
}
