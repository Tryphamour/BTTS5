import { Component, OnInit } from '@angular/core';

import { LOBBIES } from '../../mock-lobbies';

@Component({
  selector: 'app-qualifiers',
  templateUrl: './qualifiers.component.html',
  styleUrls: ['./qualifiers.component.scss']
})
export class QualifiersComponent implements OnInit {

  lobbies = LOBBIES;

  constructor() { }

  ngOnInit() {
  }

}
