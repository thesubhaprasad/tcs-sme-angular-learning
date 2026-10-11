import type { Routes } from '@angular/router';
import { CourseLinksComponent, HomeNoteComponent } from './components/course-links.component';
// First match wins. Keep the wildcard last; an empty-path route uses pathMatch: full.
export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeNoteComponent },
  { path: 'courses', component: CourseLinksComponent },
  { path: '**', redirectTo: '' }
];
