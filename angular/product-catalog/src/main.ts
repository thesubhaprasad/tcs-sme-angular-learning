import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
// Register HttpClient with dependency injection for the app's product service.
bootstrapApplication(AppComponent, { providers: [provideHttpClient()] }).catch(error => console.error(error));
