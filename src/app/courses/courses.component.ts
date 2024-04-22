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
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  sortBy: string = '';
  sortDirection: string = 'asc';

  constructor(private httpClient: HttpClientService) {}

  ngOnInit() {
    this.httpClient.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  sortCourses(column: string) {
    /* Kontrollerar vilket håll det sorteras */
    if (this.sortBy === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = column;
      this.sortDirection = 'asc';
    }
  
    /* Sorterar värdena genom att jämföra med varandra. */
    this.courses.sort((a, b) => {
      const valueA = a[column].toLowerCase();
      const valueB = b[column].toLowerCase();
      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
