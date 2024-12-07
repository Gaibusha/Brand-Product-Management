const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('@google-cloud/dialogflow');
const admin = require('firebase-admin');
const uuid = require('uuid');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Initialize Firebase Admin SDK
const serviceAccount = require('./config/syncgenie-k9n9.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://syncgenie-k9n9.firebaseio.com" // Ensure this matches your Firebase project
});

const db = admin.firestore(); // Example Firestore usage
const projectId = 'syncgenie-k9n9';  // Ensure the projectId is a string
const sessionClient = new dialogflow.SessionsClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS 
});

app.post('/dialogflow', async (req, res) => {
  const sessionId = uuid.v4();
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: req.body.query,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    res.json({ response: result.fulfillmentText });
  } catch (error) {
    console.error('ERROR:', error.message);
    console.error('Stack:', error.stack);  // Added detailed error stack logging
    res.status(500).send('Dialogflow request error');
  }
});

app.get('/test', (req, res) => { 
  res.send('Server is running!'); 
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
