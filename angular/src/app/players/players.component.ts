import { Component, OnInit } from '@angular/core';
import { PLAYERS } from '../mock-players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players = PLAYERS;

  constructor() { }

  ngOnInit() {
  }

}
