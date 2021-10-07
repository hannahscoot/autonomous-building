import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="my-8 text-center text-6xl font-bold">
    <span class="text-green-600">TailwindCSS</span> 
    and 
    <span class="text-red-600">Angular</span> 
    is cool to use!
  </h1>
  <p class="text-center text-3xl">Thanks for reading!</p>
  `,
  styles: []
})
export class AppComponent {
  title = 'autonomous-building';
}
