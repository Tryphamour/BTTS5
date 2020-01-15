import { Component, OnInit } from '@angular/core';
import { ROUNDS32 } from '../../mock-rounds32';

@Component({
  selector: 'app-round32',
  templateUrl: './round32.component.html',
  styleUrls: ['./round32.component.scss']
})
export class Round32Component implements OnInit {

  rounds32 = ROUNDS32;

  constructor() { }

  ngOnInit() {
  }

}
