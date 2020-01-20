import { Component, OnInit } from '@angular/core';
import { QUARTERFINALS } from '../../mock-quarterfinals';

@Component({
  selector: 'app-quarter-finals',
  templateUrl: './quarter-finals.component.html',
  styleUrls: ['./quarter-finals.component.scss']
})
export class QuarterFinalsComponent implements OnInit {

  quarterfinals = QUARTERFINALS;

  constructor() { }

  ngOnInit() {
  }

}
