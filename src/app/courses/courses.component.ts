import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: any[] = [];
  constructor(private httpClient: HttpClientService) {}

    ngOnInit() {
      this.httpClient.getCourses().subscribe((data) => {
        this.courses = data;
      });
    }
}
