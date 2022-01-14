import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fundme',
  templateUrl: './fundme.component.html',
  styleUrls: ['./fundme.component.css']
})
export class FundmeComponent implements OnInit {

  public fund !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.fund = this.formBuilder.group({
      title: [''],
      amount: [''],
      description: [''],
      image: [''],
      days: [''],
      number: [''],
      address: [''],
      refId: ['']
    })
  }
  submit(){
    this.http.post<any>("http://localhost:3000/fundreqs", this.fund.value)
    .subscribe(res=>{
      alert("Form Submitted Successfully");
      this.fund.reset();
      this.router.navigate(['fundraisers']);
    },err=>{
      alert("Something Went Wrong")
    })
  }
}
