import { TestBed } from '@angular/core/testing';

import { SpotifyInterceptorService } from './spotify-interceptor.service';

describe('SpotifyInterceptorService', () => {
  let service: SpotifyInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
