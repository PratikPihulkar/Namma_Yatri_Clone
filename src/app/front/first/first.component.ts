import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{
  dataArr: any[] = [
    { "": 1204500 },
    { "Driver Earning": 13235319622 },
    { "Register User": 10728237 },
    { "Completed Tripes": 82119865 },
    { "Enable Drivers": 6060850 }
  ];
  
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  

ngOnInit(){
  console.log(this.dataArr);
}

}
