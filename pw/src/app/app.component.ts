import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeletters=false;
  includenumbers=false;
  includeSymbols=false;
  length=0;
  password="";

  OnChangeLength(value:any){
    const parsedvalue = parseInt(value);
    if (!isNaN(parsedvalue)){
      this.length=parsedvalue;
      console.log(this.length)
    }
  }

  OnButtonClick(){
    const numbers="123456789";
    const letters="abcdefghijk";
    const symbols="@#$%^&*(";

    let validchars=" ";
    if (this.includenumbers){
      validchars += numbers;
    }

    if (this.includeSymbols){
      validchars += symbols;
    }

    if (this.includeletters){
      validchars += letters;
    }

    let generatedCharacter=" ";
    for (let i=0;i<=this.length;i++){
      const index=Math.floor(Math.random()*validchars.length)
      generatedCharacter += validchars[index]
    }

   this.password=generatedCharacter;

  }
  
  OnChangeletters(){
    this.includeletters=!this.includeletters;}
   
  OnChangeNumber(){
    this.includenumbers=!this.includenumbers;
    } 
  
  OnChangeSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }

  
}
