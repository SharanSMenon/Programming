import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-servers></app-servers>',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created'
  serverName = '';
  serverCreated = false;
  servers = ['Test server','Server 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer(){
    this.serverCreationStatus = "Server was created and name is: " + this.servers.push(this.serverName);
    this.serverCreated = true;
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  

}
