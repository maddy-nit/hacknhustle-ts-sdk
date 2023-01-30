/**
 * HackNHustle ION-DIDLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Proof1, proof1Schema } from './proof1';
import {
  VerifiableCredential,
  verifiableCredentialSchema,
} from './verifiableCredential';

export interface JsonFirst {
  context: string[];
  type: string[];
  verifiableCredential: VerifiableCredential[];
  id: string;
  holder: string;
  proof: Proof1;
}

export const jsonFirstSchema: Schema<JsonFirst> = object({
  context: ['@context', array(string())],
  type: ['type', array(string())],
  verifiableCredential: [
    'verifiableCredential',
    array(lazy(() => verifiableCredentialSchema)),
  ],
  id: ['id', string()],
  holder: ['holder', string()],
  proof: ['proof', lazy(() => proof1Schema)],
});
