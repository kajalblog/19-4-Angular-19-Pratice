import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName:string='Sonal';
  rollNo:number=55;
  isActive:boolean=true;
  newPlaceholder='Enter your name';
  bgClass='bg-primary'

  constructor()
  {

  }

  displayMessage()
  {
    alert("Hii Welcome to Angular PEoject")
  }
  
}
