import { Component, OnInit } from '@angular/core';
import { ROUNDS16 } from '../../mock-rounds16';

@Component({
  selector: 'app-round16',
  templateUrl: './round16.component.html',
  styleUrls: ['./round16.component.scss']
})
export class Round16Component implements OnInit {

  rounds16 = ROUNDS16;

  constructor() { }

  ngOnInit() {
  }

}
