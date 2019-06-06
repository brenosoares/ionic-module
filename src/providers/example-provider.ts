import { Injectable } from '@angular/core';
 
@Injectable()
export class ExampleProvider {
  reasonToJoin() {
    return 'The Ionic Example Module!'
  }
}