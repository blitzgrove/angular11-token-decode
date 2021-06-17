import { Component } from '@angular/core';

import { decodeToken, isTokenValid } from './utils/token';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  decodedToken: { [prop: string]: string | number };

  constructor() {
    this.decodedToken = decodeToken(this.token);
    console.log(isTokenValid(this.decodedToken.exp));
  }
}
