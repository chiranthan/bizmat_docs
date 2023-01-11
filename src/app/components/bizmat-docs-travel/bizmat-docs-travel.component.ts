import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bizmat-docs-travel',
  templateUrl: './bizmat-docs-travel.component.html',
  styleUrls: ['./bizmat-docs-travel.component.scss']
})
export class BizmatDocsTravelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search($event: any){
    alert("From: " + $event.searchData.fromLocation + " To: " + $event.searchData.toLocation);
  }
}
