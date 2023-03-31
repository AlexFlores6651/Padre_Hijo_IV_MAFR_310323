import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() voto:string;

  @Output() unVoto = new EventEmitter<string>();

  votar(): void{
    this.unVoto.emit(this.voto);
  }

  constructor() { }

  ngOnInit() {
  }

}