// npm install assemblyai

import { AssemblyAI } from 'assemblyai';

const client = new AssemblyAI({
  apiKey: 'e8b4753b9fab4d99887d49c8d73ee5d9'
});

const audioUrl = 'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3';

const config = {
  audio_url: audioUrl
};

const run = async () => {
  const transcript = await client.transcripts.transcribe(config);
  console.log(transcript.text);
};

run();
