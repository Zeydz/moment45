import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: 'courses', component: CoursesComponent},
    { path: '', redirectTo: '/courses', pathMatch: 'full'},
    { path: '404', component: NotfoundComponent},
    { path: '**', component: NotfoundComponent}
];
