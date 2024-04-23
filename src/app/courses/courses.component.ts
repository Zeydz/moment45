import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';
import { Course } from '../models/course';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {

  /* Variabler */
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchWord: string = '';
  sortBy: string = '';
  sortDirection: string = 'asc';

  constructor(private httpClient: HttpClientService) {}

  /* Körs direkt */
  ngOnInit() {
    this.httpClient.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
      this.filteredCourses = data;
    });
  }

  /* Sorterings funktion */
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
  
  /* Funktion för att sortera efter sökning */
  filterCourses() {
    const searchWord = this.searchWord.trim().toLowerCase();
    if (!searchWord) {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course =>
        course.code.toLowerCase().includes(searchWord) ||
        course.coursename.toLowerCase().includes(searchWord)
      );
    }
  }
}