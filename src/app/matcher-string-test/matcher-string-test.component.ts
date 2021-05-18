import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matcher-string-test',
  templateUrl: './matcher-string-test.component.html',
  styleUrls: ['./matcher-string-test.component.css']
})
export class MatcherStringTestComponent implements OnInit {
  firstStr:string="Hello World";
  constructor() { }

  ngOnInit(): void {
  }

}
