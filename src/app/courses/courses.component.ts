import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: Course[] = [];
  constructor(private httpClient: HttpClientService) {}

    ngOnInit() {
      this.httpClient.getCourses().subscribe((data) => {
        this.courses = data;
      });
    }
}
