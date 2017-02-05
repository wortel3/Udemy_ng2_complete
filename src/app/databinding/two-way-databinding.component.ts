import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-databinding',
  template: `
    <p>
     <input type="text" [(ngModel)]= "person.age">
     <input type="text" [(ngModel)]= "person.age">
    </p>
  `,
  styles: []
})
export class TwoWayDatabindingComponent  {
  person = {
      name: 'Gerhard', 
      age: 39
  };


}
