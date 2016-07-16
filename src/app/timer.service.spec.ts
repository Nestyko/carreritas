/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TimerService } from './timer.service';

describe('Timer Service', () => {
  beforeEachProviders(() => [TimerService]);

  it('should ...',
      inject([TimerService], (service: TimerService) => {
    expect(service).toBeTruthy();
  }));
});
