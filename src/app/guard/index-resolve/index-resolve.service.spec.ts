import { TestBed, inject } from '@angular/core/testing';

import { IndexResolveService } from './index-resolve.service';

describe('IndexResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexResolveService]
    });
  });

  it('should be created', inject([IndexResolveService], (service: IndexResolveService) => {
    expect(service).toBeTruthy();
  }));
});
