import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //isMenuOpen:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  // openMenu(){
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
}
