import dotenv from "dotenv";
dotenv.config();

import ollama from 'ollama'
import { Agent } from "@fileverse/agents";

const agent = new Agent({
  chain: process.env.NETWORK,
  privateKey: process.env.PRIVATE_KEY,
  pinataJWT: process.env.PINATA_JWT,
  pinataGateway: process.env.PINATA_GATEWAY,
  pimlicoAPIKey: process.env.PIMLICO_API_KEY,
});

await agent.setupSafe();

await agent.setupStorage("deepseek-r1");

const input = "Why is the sky blue? in short please hello world dadadaadadadada!"
console.log('input: ', input);
// const response = await ollama.chat({
//   model: 'deepseek-r1',
//   messages: [{ role: 'user', content: input }],
// })

// const output = response.message.content;
// console.log('output: ', output);
await agent.update(1, input);

console.log('done');