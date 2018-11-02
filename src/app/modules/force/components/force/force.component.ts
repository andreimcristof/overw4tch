import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ForceService } from 'app/modules/force/services/force.service';
import { ForceModel } from 'app/modules/force/models/force.model';
import { Location } from '@angular/common';
import { switchMap,map } from 'rxjs/operators';

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
    this.route.paramMap.pipe(
      switchMap( (params: ParamMap) => {
        return this.forceService.getForce(params.get('id'))
      })).subscribe(t => this.force = t);
  }

  goBack() {
    this.location.back();
  }
}
