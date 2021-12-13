import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs=[
    {year:2017, month:1},
    {year:2017, month:2},
    {year:2017, month:3}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  

}
