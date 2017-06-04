import { Component, OnInit } from '@angular/core';

import { ForceService } from '../../services/force.service';

@Component({
  selector: 'app-listforces',
  templateUrl: './listforces.component.html',
  styleUrls: ['./listforces.component.css']
})
export class ListForcesComponent implements OnInit {

  constructor(private forceService: ForceService) { }

  ngOnInit() { }

}
