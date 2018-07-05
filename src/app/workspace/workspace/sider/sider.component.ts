import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {
  public siderHandler():void {
    console.log(arguments);
  }

  constructor() { }

  ngOnInit() {
    const anim = () => {
      if (localStorage.getItem('test')) {
        console.log(localStorage.getItem('test'));
        localStorage.clear();
      }
      requestAnimationFrame(anim);
    }
    requestAnimationFrame(anim);
  }


}
