import { EventEmitter, Inject, Injectable, PLATFORM_ID, Optional } from '@angular/core';
import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Application-Names': ['store', 'auth']
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor() { }
}
