import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
// Register the HTTP and optional routing features alongside standalone bootstrapping.
bootstrapApplication(AppComponent, { providers: [provideHttpClient(), provideRouter(routes, withHashLocation())] })
  .catch(error => console.error(error));
