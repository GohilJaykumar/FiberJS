import { TestBed } from '@angular/core/testing';

import { NgxFiberJSService } from './ngx-fiber-js.service';

describe('NgxFiberJSService', () => {
  let service: NgxFiberJSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFiberJSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
