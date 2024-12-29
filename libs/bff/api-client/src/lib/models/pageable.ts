/* eslint-disable */

/**
 * minimal Pageable query parameters
 */
export interface Pageable {
  direction?: 'ASC' | 'DESC';
  page?: number;
  properties?: string;
  size?: number;
}
