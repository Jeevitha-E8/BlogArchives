import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  blog:{ year: number; month: number; };
  constructor(private homeroute : Router,private root : ActivatedRoute) { }

  ngOnInit(){
    this.blog = {
      year: this.root.snapshot.params['year'],
      month: this.root.snapshot.params['month']
    };
  }
  getRoute()
  { 
    this.homeroute.navigate(['/'])
  }

}
