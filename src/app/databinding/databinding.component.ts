import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent{
  stringInterpolation = 'This is a string.'; 
  numberInterpolation = 8; 
  onTest(){
    return false;
  }
  onClick(value:string){
    alert(value); 
  }
} 


