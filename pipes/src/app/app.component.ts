import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name:string="";
  date:string="";
  amount:number=0;

  OnNameChange(value:string){
    this.name=value;
  }

  OnDateChange(value:string){
    this.date=value;
  }
  OnAmountChange(value:string){
    this.amount=parseFloat(value);
  }
}
