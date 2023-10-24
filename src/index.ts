import "dotenv/config";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

import routes from "./routes/index.routes";
import connection from "./database/database";

const app = express();
const port = process.env.PORT || 8080;

//config static file
app.use(express.static(path.join(__filename, "public")));

//config req
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//route
app.use("/api/v1", routes);

// connect database
(async () => {
  try {
    await connection();

    app.listen(port, () => {
      console.log(`Server running is port ${port}`);
    });
  } catch (error) {
    console.log("Error connect to db: ", error);
  }
})();
