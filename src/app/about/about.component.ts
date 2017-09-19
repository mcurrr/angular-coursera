import { Component, OnInit } from '@angular/core';

import { Leader } from '../shared/leader';

import { LeadersService } from '../services/leaders.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  selectedLeader: Leader;

  constructor(
    private leadersServices: LeadersService
  ) { }

  ngOnInit() {
    this.leaders = this.leadersServices.getLeaders();
  }

  onSelect(leader: Leader) {
    this.selectedLeader = leader;
  }

}
