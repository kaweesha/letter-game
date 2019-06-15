import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  userName: string ="Click to get your name";
  inputValue: string='TestName';

  onAddServer(){
    this.userName=this.inputValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
