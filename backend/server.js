import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';
import * as Resemble from '@resemble/node'
import { fileURLToPath } from 'url';

// Load environment variables
config();


// Create a web server
const app = express();
app.use(cors());
const port = process.env.PORT || 3034;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import fileUpload from 'express-fileupload';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

app.use(fileUpload());
app.use(express.static('public'));


// route to upload an image
app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')
  }
  let uploadedImg = req.files.image;
  let uploadPath = path.join(__dirname, 'uploads', uploadedImg.name);

  uploadedImg.mv(uploadPath, function(err) {
    if (err) return res.status(500).send(err);
    res.send('Image uploaded!')
  });
});



// // Initialize OpenAI API
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });
  
//   const openai = new OpenAIApi(configuration);

// // Define a route to upload image to OpenAI and receive story as output
// app.get('/ask-me', async (req, res) => {
//   // Call the OpenAI API to generate an answer
//   const completion = await openai.createCompletion({
//     model: 'text-davinci-003',
//     prompt: req.query.question,
//   });
//   res.send(completion.data.choices[0].text);
// });



// // RESEMBLE.AI STUFF

// const apiKey = 'afTnZPh68ttrbhrAlR9i4gtt';

// if (!apiKey) {
//     console.error('Please set the RESEMBLE_API_KEY environment variable.')
//     process.exit(1)
// }

// const setupResembleAI = (apiKey) => {
//     console.log('Setting Resemble API Key...')
//     Resemble.Resemble.setApiKey(apiKey)
// }

// setupResembleAI(apiKey)


// // getting projectUUID
// let page = 1
// let pageSize = 10
  
// // const response = await Resemble.v2.projects.all(page, pageSize)

// const projectUUID = '89b71f00'; // 89b71f00

// // getting project voiceUUID

// const voiceUUID = 'a52c4efc'; //a52c4efc

// // DECLARING PARAMETERS 

// const title = 'Story Time';
// const body = 'this is a test';
// const isPublic = true;
// const isArchived = false;


// const clipArgs = {
//   project_uuid: projectUUID,
//   voice_uuid: voiceUUID,
//   title: title,
//   body: body,
//   public: isPublic,
//   archived: isArchived,
// };

// async function createAudioClip(projectUUID, title, body, voiceUUID, isPublic = false, isArchived = false) {
//   console.log(`Submitting request to Resemble to create audio clip content: ${body}`);

//   try {
//       const response = await Resemble.Resemble.v2.clips.createSync(projectUUID, {
//           title: title,
//           voice_uuid: voiceUUID,
//           body: body,
//           is_public: isPublic,
//           is_archived: isArchived,
//       })

//       if (response.success) {
//           const clip = response.item;
//           const clipUUID = clip.uuid;
//           const clipURL = clip.audio_src;

//           console.log(`Response was successful! ${title} has been created with UUID ${clipUUID}.`);
//           console.log(clipURL);
//       } else {
//           console.log('Response was unsuccessful!');
//           console.log(response);
//       }
//   } catch (error) {
//       console.error('Error creating audio clip:', error);
//   }
// }

// await createAudioClip(projectUUID, title, body, voiceUUID, isPublic, isArchived);
