import { Component ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClick()">Click me</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked: EventEmitter<String> = new EventEmitter(); 
  onClick(){
      this.clicked.emit('You just clicked the event emitter.'); 
  }

}
