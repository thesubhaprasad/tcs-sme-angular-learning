import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// Standalone bootstrapping starts the component tree. Angular 22 is zoneless by default.
bootstrapApplication(AppComponent).catch(error => console.error(error));
