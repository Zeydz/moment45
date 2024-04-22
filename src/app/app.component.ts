import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moment4';
}
