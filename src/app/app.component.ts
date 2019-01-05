import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hadis-blog';
  
  function f() {
    var message = "Hello, world!";

    return message;
  }
}
