import { Component, OnInit } from '@angular/core';

// interface sideBarObj{
//   title:string,
//   link:string;
// }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideBarObj=[
    {
      title:"Products",
      link:'/products'
    },
    {
      title:"Users",
      link:'/users'
    },
    {
      title:"DashBoard",
      link:'/dashboard'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
