import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
    console.log('Hello Dashboard');
  }
}
