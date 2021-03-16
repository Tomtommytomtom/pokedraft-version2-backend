import express from "express"
import cors from "cors"
import * as bodyParser  from "body-parser"


const initHttpServer = ( httpPort: number ) => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.get('/',(_,res) => {
      res.send("Hello World!")
  })

  app.listen(httpPort,() => {
    console.log("Started listening on port: " + httpPort);
  })
}

initHttpServer(8000)
