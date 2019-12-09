
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
const functions = require('firebase-functions');
const {
  dialogflow,
  HtmlResponse,
  BasicCard,
  Image,
  Button
} = require('actions-on-google');
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const app = dialogflow({
  debug: true
});
const projectId = 'smemo-c2001';
const sessionId = '981dbc33-7c54-5419-2cce-edf90efd2170';
const query = 'ciao';
const languageCode = 'it';
const dialog = require('dialogflow');
let privateKey = '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZF7mTCoP7OVK2\n7w5kcWuaam0btHATHuFaDo9Iz12NRSoxP6q2EanVFiD11l7PSRasvP4e+ybk1G2g\nMBw+gFjibUSrl4l4Cut56sTPSU/5MNvxSXXSr/tmGmEWVxJgejNINt9Cyf8OG6U6\nIJJlOPoIGkZBwi4Zb2GMBs/+79mQyrUtMfJldED+9SDIcDba0jWfjucJs8APp5gh\nWBvh715VlhkpGx9SG3v4JSjaWaN/A+eYWVLwFUcuA7g/nBvnDCKEt6O/CNZglXk5\ntUv0Lw5TWt55LubS58k3BCCJ6TF6X6Q3fTtkYunRy+4dwtjO4Ux0LyROUGByUef1\n77LcY8cdAgMBAAECggEAHhN23sO0sD/rUTPCWzEJds2qyw1O/58mGlttB2nPLKy5\n4TPQW0QMMtzLeTOXVAFstkbCsBkcdNRnUauIpjIS3l/EBT/LyEk/AVeAp7Ug8sWN\nmxqRy7wcyLL742PxxFL5utX7TV39y38R/4EWtxZTMX8uX5re1yBCs+sXstqY2kGx\nrUNu3vjzWqbVZ/fIl9SjS/hjmcBTheb4WiBqTLVP344cC7FNRsRyL4MPZqLfK72h\nL8Do7Fz7aV+5la5uPrLMZ5/qSHeRUy8plWSPSVHzGv4Q+dZrr10I9MA9Fxyp1ta2\nQVx8plkZNjJ6mBBgi3zKM1WIv/G2dwHcZTtfdy6oswKBgQD7oGtsh8M9UEQDGAaH\nuLE17MSxhPiQ83HWNTSGYcMxbN26nz/LOhUOQwIheTgJSCasIK2AowoCP2aVzTpr\nswUH7Wz2PidZ1sAezFDRighiw+Dzwjj8kWbPccVELfwIHuhMBjkWzwQgD97pAmM4\ngUP+9ev9VPdVF88vI8jveEh/2wKBgQDc3aadtTU6OTXi6+K5paArpuZ5Ehc/keI1\nGQv1VVOXHFivdv+TFJQ5dnOZfxhjUJHlclbrkgbVuC3DkmzbEhfnyPogSkje566e\ni7oIMtM2w0CRfjwCFknGMWz+LwSitc2Bx1CwhZaDvXOWm6Y1076cOa88pI0fsLkS\nQQlLItviZwKBgQCLI16jacL1EYA6MbvSqrca+WyeOMf15xfIei0sLbzwhKFrA4oU\nB28DLtxrxArPXx07SuqF2iG7snE4Xn5ydVBP3OLGmwHJdK1RmmsKIwiWDHhEcd5v\nErvF88Q/+imGGAkdmMdSrHA8hmodcFuLMDd4MWYn9Ca73+mJyIDgoiN8xwKBgDOC\nLb1R6Vvuw7ZsNK//BF+pyM4rfeiBaTPg530LrTbskXI6Wlg+0GKmUUdW8KUYwS21\ngLfnklh9X47gsypUCecwY8TsDhqOBZdMFtKap895sbE8s1n5QLNMC5Mr+/TGWWsO\nxK6mOPf4UuCo5BZhj253tXp7Fb5yRHcRW81+D7G5AoGBAPLhLf2Bm0dm9QZbw0Ka\ntbO7IVvZTm3baejxgFB5NR31AoL5qmSUfYW7k4DeKHHjH2vfGGWs3VugGvOoPcEC\n7XXsrM5gmuObWlz8Qt1OByrp+QopVVRXVaF2JVERvWlUTnTUoZJOa7f1QyTlTwgi\ntQPBBhK/hOOXUbFVDU408YM8\n-----END PRIVATE KEY-----\n';
let clientEmail = "client-access@smemo-c2001.iam.gserviceaccount.com";
let config = {
  credentials: {
    private_key: privateKey,
    client_email: clientEmail
  }
}
const sessionClient = new dialog.SessionsClient(config);
const sessionPath = sessionClient.sessionPath(projectId, sessionId);
const request = {
  session: sessionPath,
  queryInput: {
    text: {
      text: query,
      languageCode: languageCode,
    },
  },
};
sessionClient
  .detectIntent(request)
  .then(responses => {
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

const client = new dialog.IntentsClient();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'ws://smemo-c2001.firebaseio.com/'
});


// ################## INIZIO INTENTI ################################################################

app.intent('Default Welcome Intent', conv => {
    return  admin.database().ref('data').once('value').then((snapshot) => {
      const name = snapshot.child('userName').val();
      const sex = snapshot.child('sesso').val();
      if (name != null){
        if (sex == 'maschio'){
          conv.ask(`Bentornato ${name}!`);
        }
        else conv.ask(`Bentornata ${name}!`);
      }
      else conv.ask(`Ciao, è bello rivederti!`);
      conv.ask(new HtmlResponse({
        url: `https://${firebaseConfig.projectId}.firebaseapp.com/`
      }));
    });
});

app.intent('Default Fallback Intent', conv => {
  return admin.database().ref('data').once('value').then((snapshot) => {
    const value = snapshot.child('userName').val();
    if (value != null){
      conv.ask(`Non ho capito ${value}, puoi ripetere?`);
    }
    else conv.ask(`Non ho capito, puoi ripetere?`);
  });
});


app.intent('Insegnare(1)', conv => {
  conv.ask('In quale contesto vuoi insegnarmi ?');
  const parameters = {
  };
  conv.contexts.set('Contesto', 1, parameters);
  conv.ask(new HtmlResponse({
    data: {
      scene: 'insegnami',
    }
  }));
});

app.intent('Contesto(2-new)', conv => {
  conv.ask(`A quale domanda devo rispondere ?`);
  var contestoDatoDaUser = conv.parameters.categoria;
  const parameters = {
    contestoDaUser: contestoDatoDaUser,
  };
  conv.contexts.set('Domanda', 1, parameters);
});

app.intent('Contesto(2)Fallback', conv => {
  conv.ask('Scusa ma non conosco questa categoria, scegline un altra');
});

app.intent('Domanda(3)', conv => {
  conv.ask('Che risposta devo dare ?');
  var contestoDatoDaUser = conv.contexts.input.domanda.parameters.contestoDaUser
  // contestoDatoDaUser = conv.parameters.contestoDaUser;
  const parameters = {
     contestoDatoDaUser: contestoDatoDaUser, domandaDatoDaUser: conv.input.raw
  };
  conv.contexts.set('Risposta', 1, parameters);
});

app.intent('Risposta(4)', conv => {
  conv.ask('Benissimo, ho imparato qualcosa di nuovo !')
  var contestoDatoDaUser = conv.contexts.input.risposta.parameters.contestoDatoDaUser;
  var domandaDatoDaUser = conv.contexts.input.risposta.parameters.domandaDatoDaUser;
  const parameters = {
     contestoDatoDaUser: contestoDatoDaUser, domandaDatoDaUser: domandaDatoDaUser, risposta: conv.input.raw
  };
  conv.contexts.set('CreazioneIntento', 1, parameters);

  conv.ask(new HtmlResponse({
    data: {
      scene: 'newCard',
    }
  }));

  CreateIntent(contestoDatoDaUser, domandaDatoDaUser, conv.input.raw);
});


function CreateIntent(contestoDatoDaUser, domandaDatoDaUser, rispostaDatoDaUser){

// per Create Intent --------

const formattedParent = client.projectAgentPath('smemo-c2001');
const intent = {
  "displayName": String(domandaDatoDaUser),
  "trainingPhrases": [
    {
      "type": "TYPE_UNSPECIFIED",
      "parts": [
        {
          "text": String(domandaDatoDaUser)
        }
      ],
      "timesAddedCount": 0
    }
  ],
  "parameters": [
    {
      "displayName": "categoria",
      "value": String(contestoDatoDaUser)
    }
  ],
  "messages": [
    {
      "text": {
        "text": [
          rispostaDatoDaUser
        ]
      }
    }
    ]};
const req = {
  parent: formattedParent,
  intent: intent,
};

// create intent
client.createIntent(req)
.then(responses => {
const response = responses[0];
// doThingsWith(response)
})
.catch(err => {
console.error(err);
});
}

app.intent('CambioNome', conv => {
  const name = conv.parameters.name;
  conv.ask(`Da ora ti chiamerò ${name}`);
  return admin.database().ref('data/userName').set(name);
});

app.intent('CambioSesso', conv => {
  const sesso = conv.parameters.sesso;
  conv.ask(`Perfetto`);
  return admin.database().ref('data/sesso').set(sesso);
});


app.intent('#barzelletta', conv => {
  const ssml = '<speak>' +
    /*'Here are <say-as interpret-as="characters">SSML</say-as> samples. ' +
    'I can pause <break time="3" />. ' +
    'I can play a sound <audio src="https://www.example.com/MY_WAVE_FILE.wav">your wave file</audio>. ' +
    'I can speak in cardinals. Your position is <say-as interpret-as="cardinal">10</say-as> in line. ' +
    'Or I can speak in ordinals. You are <say-as interpret-as="ordinal">10</say-as> in line. ' +
    'Or I can even speak in digits. Your position in line is <say-as interpret-as="digits">10</say-as>. ' +
    'I can also substitute phrases, like the <sub alias="World Wide Web Consortium">W3C</sub>. ' +
    'Finally, I can speak a paragraph with two sentences. ' +
    '<p><s>This is sentence one.</s><s>This is sentence two.</s></p>' +
    */
    'Una bambina torna a casa dopo il primo giorno di scuola. <break time="1s" />. ' +
    'La madre le chiede: <break time="0.5s" />. ' +
    'Cosa hai imparato oggi? <break time="0.5s" />.' +
    'La bambina risponde: <break time="0.7s" />.' +
    '“Non abbastanza, vogliono che torni anche domani” <break time="0.5s" />.' +

    '</speak>';
  conv.ask(ssml);
});

app.intent('vai alla Home', conv => {
  conv.ask('ok, ti porto subito alla schermata iniziale');
  conv.ask(new HtmlResponse({
    data: {
      scene: 'home',
    }
  }));
});

app.intent('mostra carta', conv => {
  conv.ask(`questo è un esempio`);
    conv.ask(new BasicCard({
      text: `Ecco l'esempio di carta  \nbreaks`, // Note the two spaces before '\n' required for
                                   // a line break to be rendered in the card.
      subtitle: 'This is a subtitle',
      title: 'Title: this is a title',
      buttons: new Button({
        title: 'This is a button',
        url: 'https://assistant.google.com/',
      }),
      image: new Image({
        url: 'https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png',
        alt: 'Image alternate text',
      }),
      display: 'CROPPED',
    }));
    conv.ask('Which response would you like to see next?');
});



exports.fulfillment = functions.https.onRequest(app);
