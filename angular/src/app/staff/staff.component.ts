import { Component, OnInit } from '@angular/core';
import { COMMENTATORS } from '../mock-commentators';
import { REFEREES } from '../mock-referees';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  commentators = COMMENTATORS;
  referees = REFEREES;

  constructor() { }

  ngOnInit() {
  }

  

}
