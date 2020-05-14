import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  texto : string = 'PT. ALaddin Teknologi Solusi';
  lat: number = -6.188323;
  lng: number = -106.824621;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
