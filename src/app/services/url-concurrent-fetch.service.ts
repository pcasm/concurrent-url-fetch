import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, mergeMap, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlConcurrentFetchService {
  constructor(private http: HttpClient) {}

  fetchConcurrent(urls: string[], maxConcurrency: number) {
    return from(urls).pipe(
      // merge http calls and insert results into an array
      mergeMap(url => this.http.get(url), maxConcurrency),
      toArray()
    );
  }
}
