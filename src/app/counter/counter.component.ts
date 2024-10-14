import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {
  //event binding example using counter app
count=0;

increment(){
this.count++;
}
decrement(){
  if(this.count>0){
    this.count--;
  }
}
//data binding
title: string = 'Data Binding example';
inputValue: string = '';

// Method to handle button click
onButtonClick() {
  alert(`Input value: ${this.inputValue}`);
}

// Method to handle input change
onInputChange(event: Event) {
  const target = event.target as HTMLInputElement; // Cast to HTMLInputElement
  this.inputValue = target.value; // Update inputValue
}
}
