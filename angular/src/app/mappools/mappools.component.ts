import { Component, OnInit } from "@angular/core";
import MappoolData from "../../mappools/pools.generated.js";

@Component({
  selector: "app-mappools",
  templateUrl: "./mappools.component.html",
  styleUrls: ["./mappools.component.scss"]
})
export class MappoolsComponent implements OnInit {
  constructor() {}

  pools = MappoolData;
  currentPool = MappoolData[0];
  currentMap = MappoolData[0].maps[0];

  ngOnInit() {}

  selectMap(mapid) {
    this.currentMap = this.currentPool.maps.filter(map => map.id === mapid)[0];
  }

  selectPool(round) {
    this.currentPool = this.pools.filter(pool => pool.round === round)[0];
    this.currentMap = this.currentPool.maps[0];
  }
}
