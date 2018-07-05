import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function () {
      localStorage.setItem('test', '1');
      console.log(1);
    }, 3000);
  }

}
