import { Component, OnInit } from '@angular/core';
import { GROUPS } from '../../mock-groups';

@Component({
  selector: 'app-groupstage',
  templateUrl: './groupstage.component.html',
  styleUrls: ['./groupstage.component.scss']
})
export class GroupstageComponent implements OnInit {

  groups = GROUPS;

  constructor() { }

  ngOnInit() {
  }

}
