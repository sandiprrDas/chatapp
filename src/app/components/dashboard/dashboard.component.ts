import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vedioList =[
    {
        name:"tab1",
        slug:"link1"
    },
    {
      name:"tab2",
      slug:"link2"
    },
    {
      name:"tab3",
      slug:"link3"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
