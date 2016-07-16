/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CorredorService } from './corredor.service';

describe('Corredor Service', () => {
  beforeEachProviders(() => [CorredorService]);

  it('should ...',
      inject([CorredorService], (service: CorredorService) => {
    expect(service).toBeTruthy();
  }));
});
