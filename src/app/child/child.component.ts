import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  
  @Input() name='';
  @Input() id: number | undefined;
  @Input() dept='';

  ngOnInit(): void {
  
  }

}
