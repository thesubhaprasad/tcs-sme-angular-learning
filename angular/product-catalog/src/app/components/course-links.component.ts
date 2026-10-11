import { Component } from '@angular/core';
// This small route provides a working RouterLink/RouterOutlet example.
@Component({ selector: 'app-course-links', standalone: true, template: `
  <section aria-labelledby="courses-heading"><h2 id="courses-heading">Course references</h2>
    <p>Course ID: 75214</p><p>Course ID: 62104</p>
    <p>These IDs were supplied by Subha Prasad. Check details in your internal learning portal.</p>
  </section>` })
export class CourseLinksComponent {}
@Component({ selector: 'app-home-note', standalone: true, template: `<p class="stock-note">Continue practising with the catalog above.</p>` })
export class HomeNoteComponent {}
