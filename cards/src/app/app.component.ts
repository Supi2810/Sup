import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {title:'Neat Tree',
    ImageUrl:'../assets/tree.jpeg',
    username:'@nature',
    content:'Saw this tree during my hike'
    },
    {title:'Snowy Mountain',
    ImageUrl:'../assets/mountain.jpeg',
    username:'@mountain',
    content:'Saw this mountain during my hike'
    },
    {title:'Biking',
    ImageUrl:'../assets/biking.jpeg',
    username:'@biking',
    content:'Took this bike during my hike'
    }
  ];
  
}
