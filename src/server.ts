import fastify from "fastify";
import cors from "@fastify/cors";
import transactionRoutes from "./routes/transactionRoutes";
import { env } from "../env";

const app = fastify();

app.register(cors);
app.register(transactionRoutes, {
  prefix: 'transactions'
});

app.listen({
  port: env.PORT
}, (error, address) => {
  if(error) {
    return console.log(`Fail to connect server! ${error}`);
  }

  console.log(`Server is running on ${address}`);
});