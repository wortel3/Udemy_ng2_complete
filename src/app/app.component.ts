import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Inline template</h1> 
    <app-databinding></app-databinding>
    <app-lifecycle></app-lifecycle>
  `,
  styles: [`
    h1{
      color:red; 
    }
  `]
})
export class AppComponent {
  title = 'Now Changed.';
}
