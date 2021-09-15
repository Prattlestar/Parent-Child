import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Parent-Child';

  Name= '';
  Id:number | undefined;
  Dept= '';

  ngOnInit(){
  this.Name='Sagnik';
  this.Id=171717;
  this.Dept='Development'
  this.Name='Shivom';
  this.Id=191919;
  this.Dept='Management'
  }
}