import { Component } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';
import { filter } from 'rxjs';

interface Course {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {}

  FetchData(): void {
    const request = new HttpRequest('GET', 'https://angular-http-guide.firebaseio.com/courses.json');
    this.httpClient.request<Course[]>(request)
      .pipe(filter(event => event instanceof HttpResponse))
      .subscribe(body => {
        console.log(body);
      }, error => {
        console.log('fall into error callback');
      });
  }
}
