import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-resume-actual',
  templateUrl: './resume-actual.component.html',
  styleUrls: ['./resume-actual.component.css']
})
export class ResumeActualComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }


}
