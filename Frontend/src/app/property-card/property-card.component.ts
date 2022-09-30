import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  Property: any = {
    "Id": 1,
    "Type": "House",
    "Price": 12000,
    "Name": "Birla House"
  }
}
// export class PropertyCardComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

