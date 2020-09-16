import { TestBed } from '@angular/core/testing';

import { LoadmenuService } from './loadmenu.service';

describe('LoadmenuService', () => {
  let service: LoadmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
