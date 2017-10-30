import { TestBed, inject } from '@angular/core/testing';

import { UserInforService } from './user-infor.service';

describe('UserInforService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInforService]
    });
  });

  it('should be created', inject([UserInforService], (service: UserInforService) => {
    expect(service).toBeTruthy();
  }));
});
