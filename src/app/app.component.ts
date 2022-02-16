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
      imageUrl: 'assets/tree.jpeg',
      username: 'treebag',
      content: 'This tree is looking like its lonely on this hill',
    },
    {
      title: 'Bunny Hop',
      imageUrl: 'assets/biking.jpeg',
      username: 'singleSpeed',
      content: 'Catch that sweet air!',
    },
    {
      title: 'Magnificent Range',
      imageUrl: 'assets/mountain.jpeg',
      username: 'ba-layon',
      content: 'El Capitan is the third peek on the right',
    },
  ];
}
