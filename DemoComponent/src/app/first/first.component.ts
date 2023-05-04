import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent 
{

  // Characteristics
  name:string = "Sahil Mahadev Patil";

  // Behaviour
  Display()
  {
      var Ret:string = "Hello " +this.name;
      return Ret;
  }

  Addition(no1:number,no2:number):number
  {
    return no1 + no2;
  }
}

// var obj = FirstComponent 
