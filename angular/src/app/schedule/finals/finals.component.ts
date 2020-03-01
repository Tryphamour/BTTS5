import { Component, OnInit } from '@angular/core';
import { FINALS } from '../../mock-finals';

@Component({
  selector: 'app-finals',
  templateUrl: './finals.component.html',
  styleUrls: ['./finals.component.scss']
})
export class FinalsComponent implements OnInit {

  finals = FINALS;

  constructor() { }

  ngOnInit() {
  }

}
