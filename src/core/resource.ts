// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Cronus } from '../client';

export abstract class APIResource {
  protected _client: Cronus;

  constructor(client: Cronus) {
    this._client = client;
  }
}
