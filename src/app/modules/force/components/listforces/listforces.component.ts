import { Component, OnInit } from '@angular/core';

import { ForceService } from '../../services/force.service';
import { ForceModel } from '../../models/force.model';

@Component({
  selector: 'app-listforces',
  templateUrl: './listforces.component.html',
  styleUrls: ['./listforces.component.css']
})

export class ListForcesComponent implements OnInit {
  forces: ForceModel[] = [];
  err: string;
  constructor(private forceService: ForceService) { }

  ngOnInit() {
    this.getAllForces();
  }

  getAllForces() {
    this.forceService.getAllForces()
    .subscribe(
      forces => this.forces = forces,
      err => this.err = <any>err);
  }
}
