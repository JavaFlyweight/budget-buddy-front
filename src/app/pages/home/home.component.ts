import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    console.log('Hello Home');
  }
}
