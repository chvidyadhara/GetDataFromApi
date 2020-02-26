import { TestBed } from '@angular/core/testing';

import { UserdataserService } from './userdataser.service';

describe('UserdataserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserdataserService = TestBed.get(UserdataserService);
    expect(service).toBeTruthy();
  });
});
