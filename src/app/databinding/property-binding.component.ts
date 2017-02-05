import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    Number is {{result}}. 
  `,
  styles: []
})
export class PropertyBindingComponent  {

  @Input() result: number = 0;



}
