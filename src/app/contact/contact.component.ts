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
    console.log(this.contact.name);
    console.log(this.contact.email);

    console.log(this.contact.subject);

    if (!this.contact.name || !this.contact.email || !this.contact.subject) {
      alert('Please enter required fields');
    } else {
      alert('Details saved successfully');
    }
    this.contact = new Contact();
  }

}
