import dotenv from "dotenv";
dotenv.config();

import ollama from 'ollama'
import { Agent } from "@fileverse/agents";

const agent = new Agent({
  chain: process.env.NETWORK,
  privateKey: process.env.PRIVATE_KEY,
  pinataJWT: process.env.PINATA_JWT,
  pinataGateway: process.env.PINATA_GATEWAY,
  namespace: process.env.NAMESPACE,
});

await agent.setupStorage("llama3.2");

const input = "Why is the sky blue?"
const response = await ollama.chat({
  model: 'llama3.2',
  messages: [{ role: 'user', content: input }],
})

const output = response.message.content;
await agent.create(output);
