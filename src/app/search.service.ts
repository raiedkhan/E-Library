import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  message='messagehere';
  searchtext$=new Subject();
  constructor() { }
}
