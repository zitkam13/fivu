
// Node.js Modul
// import * as http from 'http';

import * as path from 'path';

// Externes Modul
import * as express from 'express'; // framework für web-server
// importiere alles (wegen *) unter namen express voom Modul express

export class Server {

    private _port: number;
    private _server: express.Express;

    public constructor (port: number) {
        this._port = port;
        this._server = express();
        this._server.get('/liste', (req, res, next) => this.handleGetListe(req, res, next));
        this._server.get('/image.png', (req, res, next) => this.sendImage(res));
    }

    public start () {
        this._server.listen(this._port);
        console.log('HTTP server gestartet auf port ' + this._port);
    }
    public get port () {
        return this._port;
    }
    private handleGetListe (req: express.Request, res: express.Response,
                            next: express.NextFunction) {
        const filePath = path.join( __dirname, '..', 'assets', 'liste.html');
        console.log(filePath);
        res.sendFile(filePath);
    }
    private sendImage (res: express.Response) {
        const filePath = path.join(__dirname, '..', 'assets', 'image.png');
        res.sendFile(filePath);
    }
}
