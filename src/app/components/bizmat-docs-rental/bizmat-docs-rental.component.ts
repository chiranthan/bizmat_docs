import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bizmat-docs-rental',
  templateUrl: './bizmat-docs-rental.component.html',
  styleUrls: ['./bizmat-docs-rental.component.scss']
})
export class BizmatDocsRentalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search($event: any){
    alert("Picking up from: " + $event.searchData.pickupLocation 
          + " At: " + $event.searchData.pickupDate.toLocaleString() 
          + ". Dropping off on: " + $event.searchData.dropoffDate.toLocaleString()
          + ($event.searchData.differentDropoffLocation? " at " + $event.searchData.dropoffLocation : ""));
  }

}
