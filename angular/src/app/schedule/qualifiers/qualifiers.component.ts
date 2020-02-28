import { Component, OnInit } from "@angular/core";

import { LOBBIES } from "../../mock-lobbies";

@Component({
  selector: "app-qualifiers",
  templateUrl: "./qualifiers.component.html",
  styleUrls: ["./qualifiers.component.scss"]
})
export class QualifiersComponent implements OnInit {
  lobbies = [];

  constructor() {
    // zip together names and pfp
    this.lobbies = LOBBIES.map(lobby => {
      return {
        players: lobby.pseudo.map((name, i) => ({ name, img: lobby.img[i] })),
        ...lobby
      };
    });
  }

  ngOnInit() {}
}
