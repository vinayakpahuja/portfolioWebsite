import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mymodalcomponent',
  templateUrl: './mymodalcomponent.component.html',
  styleUrls: ['./mymodalcomponent.component.css']
})
export class MymodalComponent implements OnInit {

  @Input() title;
  @Input() image;
  @Input() description;
  @Input() contribution;
  @Input() technologiesUsed;



  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
