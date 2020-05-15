import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  username: string;
  password: string;
  showSpinner;

login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     console.log('logged in');
    }else {
      alert("Invalid credentials");
    }
  }
}
