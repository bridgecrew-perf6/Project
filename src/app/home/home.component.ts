import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  information:any[]=[
    {
      id:"123",
      name:"Nayab",
      city:"Islamabad",
      img:"../../assets/avatar.png"
    },
    {
      id:"124",
      name:"Usman",
      city:"Islamabad",
      img:"../../assets/avatar.png"
    },
    {
      id:"125",
      name:"Farhana",
      city:"Islamabad",
      img:"../../assets/avatar.png"
    },
    {
      id:"126",
      name:"Ahmed",
      city:"Islamabad",
      img:"../../assets/avatar.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
