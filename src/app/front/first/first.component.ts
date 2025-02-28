import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{
  dataArr: any[] = [
    { "App Installed": "12,04,500 users" },
    { "Driver Earning": "13,23,53,19,622 ₹"},
    { "Register User": "1,07,28,237" },
    { "Completed Tripes": "8,21,19,865" },
    { "Enable Drivers": "60,60,850" }
  ];
  
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  

ngOnInit(){
  console.log(this.dataArr);
}

}
