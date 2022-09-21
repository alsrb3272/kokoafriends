import express from "express";
import morgan from "morgan";
import compression from "compression";

//dotenv.config();

const app = express();

const prod: boolean = process.env.NODE_ENV === "production";
const port = prod ? process.env.PORT : 4000;

app.use(morgan("dev"));
app.use(compression());

app.listen(port, (): void =>
  console.log(
    `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`
  )
);
