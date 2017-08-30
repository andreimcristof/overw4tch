import { Component, OnInit } from '@angular/core';
import { TestModel } from './test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tests = ['0', '1', '2', '3', '4'];
  model = new TestModel(1, '', this.tests[0]);
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.clear(); }

  clear() { this.model = new TestModel(1, '', this.tests[0]); }
}
