import { Component, OnInit } from '@angular/core';
import { SEMIFINALS } from '../../mock-semifinals';

@Component({
  selector: 'app-semi-finals',
  templateUrl: './semi-finals.component.html',
  styleUrls: ['./semi-finals.component.scss']
})
export class SemiFinalsComponent implements OnInit {

  semifinals = SEMIFINALS;

  constructor() { }

  ngOnInit() {
  }

}
