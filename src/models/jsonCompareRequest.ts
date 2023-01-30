/**
 * HackNHustle ION-DIDLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { JsonFirst, jsonFirstSchema } from './jsonFirst';
import { JsonSecond, jsonSecondSchema } from './jsonSecond';

export interface JsonCompareRequest {
  jsonFirst: JsonFirst;
  jsonSecond: JsonSecond;
}

export const jsonCompareRequestSchema: Schema<JsonCompareRequest> = object({
  jsonFirst: ['json_first', lazy(() => jsonFirstSchema)],
  jsonSecond: ['json_second', lazy(() => jsonSecondSchema)],
});
