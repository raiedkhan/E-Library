import { TestBed } from '@angular/core/testing';

import { BooklogsService } from './booklogs.service';

describe('BooklogsService', () => {
  let service: BooklogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooklogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
