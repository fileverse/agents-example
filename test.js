import { Agent } from "@fileverse/agents";
import dotenv from "dotenv";

dotenv.config();

const agent = new Agent({
  chain: process.env.NETWORK,
  privateKey: process.env.PRIVATE_KEY,
  pinataJWT: process.env.PINATA_JWT,
  pinataGateway: process.env.PINATA_GATEWAY,
  pimlicoAPIKey: process.env.PIMLICO_API_KEY,
  namespace: process.env.NAMESPACE,
});

await agent.setupStorage("llama3.2");

const file = await agent.create("test", "# test");

console.log(file);
