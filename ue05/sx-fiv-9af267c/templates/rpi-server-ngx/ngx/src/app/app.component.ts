import { Component, OnInit } from '@angular/core';
import { ServerService } from './services/server.service';
import { User } from './server/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ngx';
    name = '?';

    constructor (private serverService: ServerService) {

    }

    public async ngOnInit () {
        console.log('init');
        try {
            const res = await this.serverService.httpGetJson('/data/server/about');
            console.log(res);
            const user = <User> await this.serverService.httpGetJson('/user');
            this.name = user.name;
        } catch (err) {
            console.log(err);
        }
    }

}
