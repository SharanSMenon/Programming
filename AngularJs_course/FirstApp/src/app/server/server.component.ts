import { Component } from "@angular/core";
@Component({
    // .app-server can be used.
    // Selecting by id does not work.
    // [] - attribute
    // Making it an element is the proper way
    selector: 'app-server',
    templateUrl: './server.component.html',
    // styles: [`
    //     p{
    //         color:darkgoldenrod;
    //         font-size:18px;
    //     }
    // `]
})
export class ServerComponent {
    serverId: number = 1;
    serverStatus: string = "Offline";


	constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online':'offline'
	}
    

    getServerStatus() {
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === "online" ? 'green':'red'
    }
}