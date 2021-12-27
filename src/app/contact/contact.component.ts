import {Component, OnInit} from '@angular/core';
import {Contact} from '../services/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  name: string;

  constructor() {
  }

  ngOnInit() {
    this.contact = new Contact();
  }

  submitDetails() {
    alert('Details saved successfully');
    this.contact = new Contact();
  }

}
