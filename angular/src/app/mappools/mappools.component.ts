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
  currentMap = MappoolData[0][0];

  ngOnInit() {}
}
