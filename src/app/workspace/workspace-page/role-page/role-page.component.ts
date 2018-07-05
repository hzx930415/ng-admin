import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styleUrls: ['./role-page.component.css']
})
export class RolePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openwindow () {
    console.log(11)
    // window.open('http://www.baidu.com', '隐藏',
    //   'height=300, width=400, top=200,left=200 toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    window.open ('http://www.webcjs.com ', 'newwindow',
      'height=500,width=800,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');
  }
}
