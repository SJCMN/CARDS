import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets',
      username: '',
      content: '',
    },
    {
      title: 'Neat Tree',
      imageUrl: '',
      username: '',
      content: '',
    },
    {
      title: 'Neat Tree',
      imageUrl: '',
      username: '',
      content: '',
    },
  ];
}
