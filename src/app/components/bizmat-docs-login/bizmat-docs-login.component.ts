import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bizmat-docs-login',
  templateUrl: './bizmat-docs-login.component.html',
  styleUrls: ['./bizmat-docs-login.component.scss']
})
export class BizmatDocsLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login($event: any){
    alert("Username: " + $event.loginData.username + ", Password: " + $event.loginData.password + ", Remember: " + $event.loginData.remember);
  }

}
