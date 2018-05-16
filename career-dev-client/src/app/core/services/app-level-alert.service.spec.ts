import { TestBed, inject } from '@angular/core/testing';

import { AppLevelAlertService } from './app-level-alert.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppLevelAlertService]
    });
  });

  it('should be created', inject([AppLevelAlertService], (service: AppLevelAlertService) => {
    expect(service).toBeTruthy();
  }));
});
