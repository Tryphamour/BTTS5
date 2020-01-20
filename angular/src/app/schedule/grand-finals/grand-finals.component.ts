import { Component, OnInit } from '@angular/core';
import { GRANDFINALS } from '../../mock-grandfinals';

@Component({
  selector: 'app-grand-finals',
  templateUrl: './grand-finals.component.html',
  styleUrls: ['./grand-finals.component.scss']
})
export class GrandFinalsComponent implements OnInit {

  grandfinals = GRANDFINALS;

  constructor() { }

  ngOnInit() {
  }

}
