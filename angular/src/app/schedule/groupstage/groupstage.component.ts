import { Component, OnInit } from '@angular/core';
import { GROUPS } from '../../mock-groups';

@Component({
  selector: 'app-groupstage',
  templateUrl: './groupstage.component.html',
  styleUrls: ['./groupstage.component.scss']
})
export class GroupstageComponent implements OnInit {

  groups = GROUPS;

  details = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  constructor() { }

  ngOnInit() {
  }

  onclick(i){
    if(this.details[i] === false) {
      this.details[i] = true;
      console.log(this.details);
    } else {
      this.details[i] = false;
      console.log(this.details);
    }
  }

}
