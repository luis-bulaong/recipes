import express from 'express';
import path from 'path';
import serverConfig from '../config/server';
import Route from '../config/routes';

class Server
{
  constructor() {
    this.app = express();
    this.route = new Route(this.app);
  }

  init() {
    this.app.use('/public', express.static(`${__dirname}/public`));

    this.app.listen(serverConfig.port, serverConfig.host);
    process.stdout.write(`Server up.\n`);
  }
}

export default new Server();