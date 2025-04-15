import { TestBed } from '@angular/core/testing';

import { UrlConcurrentFetchService } from './url-concurrent-fetch.service';

describe('UrlConcurrentFetchService', () => {
  let service: UrlConcurrentFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlConcurrentFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
