import { Component } from '@angular/core';

@Component({
  selector: 'example',
  template: `
  <h1> {{ title }} </h1>
  `
})
export class ExampleComponent {
  title = 'Example';

  onClick(){
  }
}
