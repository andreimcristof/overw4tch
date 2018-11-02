import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ForceService } from 'app/modules/force/services/force.service';
import { ForceModel } from 'app/modules/force/models/force.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-force',
  templateUrl: './force.component.html',
  styleUrls: ['./force.component.css']
})
export class ForceComponent implements OnInit {
  force: ForceModel;

  constructor(
    private forceService: ForceService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.forceService.getForce(params.get('id')))
    //   .subscribe(result => this.force = result);
  }

  goBack() {
    this.location.back();
  }
}
