import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fundraisers',
  templateUrl: './fundraisers.component.html',
  styleUrls: ['./fundraisers.component.css']
})
export class FundraisersComponent implements OnInit {

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
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
}
