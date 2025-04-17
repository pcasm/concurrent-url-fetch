import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { JsonPipe } from '@angular/common';
import { UrlConcurrentFetchService } from './services/url-concurrent-fetch.service';
import { MatFormField, MatLabel, MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MatButton, JsonPipe, MatSelect, MatLabel, MatOption, MatFormField],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Concurrent URL Fetch';
  urls: string[] = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];

  maxConcurrency = '2';
  res: any[] = [];
  loading = false;
  error = '';

  constructor(private urlConcurrentFetchService: UrlConcurrentFetchService) {}

  fetch() {
    this.res = [];
    this.error = '';
    this.loading = true;

    this.urlConcurrentFetchService.fetchConcurrent(this.urls, Number(this.maxConcurrency)).subscribe({
      next: (data) => {
        this.res = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error: failed to fetch URLs.';
        this.loading = false;
      }
    });
  }

  resetFlags() {
    this.loading = false;
    this.error = '';
    this.res = [];
  }
}
