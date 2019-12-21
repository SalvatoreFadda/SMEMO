
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
  BrowseCarousel,
  BrowseCarouselItem,
  Suggestions,
  LinkOutSuggestion,
  Button
} = require('actions-on-google');
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const app = dialogflow({
  debug: true
});
const projectId = 'smemo-devi-funzionare';
const sessionId = '981dbc33-7c54-5419-2cce-edf90efd2170';
const query = 'ciao';
const languageCode = 'it';
const dialog = require('dialogflow');
let privateKey = '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC26tAfIpNdbT6r\niZu6h7m8F+7UohvcHuy/Xi5s8yCLs/p66/9li2CRF7DHlzf3+H4BZ+OW9KryjDrT\nk6iMS/pbcL/818jjesDzrYfzskUcv7f5AlqYhQSJU+o/5FsVYrGHEa99JHc1d5cs\nutH+MzELfVXltg2mWL0KbBSn32qgmHkmIuWSE12CWhbmsjn0S8tguOaSIgqjGYNC\nIG/T/PoLEhJnxbWXavqnLZcwkMfzk0526O/6U9Q732T7hrDUzh8v9AiN9Ce76RqP\njlb7aPtm+yX8hGmL+ZL0PkP57MgQkeb/XHuYlqCHsoUc7MgIZ5zgHIxxTrWxQpgj\nxKWNLHDZAgMBAAECggEADrOt2arKRGqY7GmpiiMJkywrRoznB1i296Smv5wFBCWJ\nnuKkCvHaZ58LVud5GKWw3wUOHl549Pi/a60FEY2zyDC2RajEXUBLDOroL/ampmpk\na4+8X2DlnfIQNGVyyrO9iBksTTcmm7YKgQ5c/Xz41q8Svd1VmIauXw2T1XBYHiMw\nLm96Ciu7oXfkbQAl0B158+PlDwJtBisNGOM9gfnfQvQ0agVyxGT3+E0rshblWesm\ng62Ljr579r8HKJN1o+rCD8rTIfz08zSIQRClD8MNJNF3QheeNiT3kUZcO0KHntvP\nh0Vr9XPo7o3Q05C/R8ANCi4J92B6xm4g/Xyxu0LsQQKBgQDxkq3imAl/VVblWNT1\neOOPZxa5Ys3GChxBdY5yU9jMUD1Qffojq6iJVF+UGsFAQK13+ok/zRZGVXQccktT\nCq+GMaOFm5kz0+VfwO8hgEcgWAKEw8RMQC8LDVOup1G0MZj4JNgnpyNyZxz2pOgy\nbZ09MnmZa0YZnIvz6Ql1NwH8qQKBgQDB114lhinCUXxPRziF3EbqblRMMj70jItH\nAJR/ixs/vplmK4JKqCVG9Jx9J8/+ob3wyWbYYQvA6zThYLGfrDYSihGs6/v91kz+\n/PFJujWdu1NQQFzC76MU7Vv9qSx+jZ6XXqmXxTr64WRthhu5tuns38N0noryfvUe\n3ZrVv57AsQKBgQC6xqz5CJI3SFVCSDeHf6t6IbuZJIJy/zgviGPVk2yJM/TkOjLf\nx4Ysf/bSPQlz004L+MKLeNcjFEkNAXWpxBZIDDMhR1fhkZDEQxjg7xyPLlzsJ6yr\nQ+jbg7dSz31FdB+QpHQX3It0lbL4JDJ/Yu7y9Qa9jwqJHNe8g05TuW8o2QKBgGNJ\nzqaH1yH6nSL6hyBB2W1BQBqbbhXTW4/t4yKFfVqkZWypAp79C8MRjoqo9uglruYE\nM5LH+r5BfB+paLIyAqxyXmVlpvi5aUz/ARTTtZzqk906aolLOAyDHCiNHAZiwgYk\n7deYpgJVqxxSoib5Y076uuIkR2W41BOQTTwJX+axAoGBAM7sLLfRwTJYYq8tDRdj\n8dpTrA5L5iM07MhYZOz+N/5FM89kNZSB7Iaw1NWj3em58Gu2hCDqAa1IV8dxU2ex\n+UvTkNFnBAZmSDThS+BHu84C+rw6zISBus1ui9FkMNkH4gBAfXCfBUhfKVmBineM\nsO9Gd0hYudNMU2i0ssnNUfld\n-----END PRIVATE KEY-----\n';
let clientEmail = "client-access@smemo-devi-funzionare.iam.gserviceaccount.com";
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
  databaseURL: 'ws://smemo-devi-funzionare.firebaseio.com/'
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
    conv.ask(new HtmlResponse({
      data: {
        scene: 'defaultPage',
      }
    }));
  });
});


app.intent('Insegnare(1)', conv => {
  conv.ask('Ok! In quale categoria vuoi insegnarmi ?');
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
  var contestoDatoDaUser = conv.input.raw;
  const parameters = {
    contestoDaUser: contestoDatoDaUser,
  };
  conv.contexts.set('Domanda', 1, parameters);
  conv.ask(new HtmlResponse({
    data: {
      scene: 'domanda',
    }
  }));
});


app.intent('Domanda(3)', conv => {
  conv.ask('Che risposta devo dare ?');
  var contestoDatoDaUser = conv.contexts.input.domanda.parameters.contestoDaUser
  // contestoDatoDaUser = conv.parameters.contestoDaUser;
  const parameters = {
     contestoDatoDaUser: contestoDatoDaUser, domandaDatoDaUser: conv.input.raw
  };
  conv.contexts.set('Risposta', 1, parameters);
  conv.ask(new HtmlResponse({
    data: {
      scene: 'risposta',
    }
  }));
});

app.intent('Risposta(4)', conv => {
  var contestoDatoDaUser = conv.contexts.input.risposta.parameters.contestoDatoDaUser;
  var domandaDatoDaUser = conv.contexts.input.risposta.parameters.domandaDatoDaUser;
  const parameters = {
     contestoDatoDaUser: contestoDatoDaUser
  };
  conv.ask(new HtmlResponse({
    data: {
      scene: 'continua',
    }
  }));
  CreateIntent(contestoDatoDaUser, domandaDatoDaUser, conv.input.raw);
  //conv.ask(`Perfetto ! Ho imparato qualcosa di nuovo. Se vuoi creare altro in questa categoria di: ${contestoDatoDaUser}`);
  const ssml = '<speak>' +
    'Perfetto ! <break time="0.3s" />. ' +
    'Ho imparato qualcosa di nuovo. <break time="0.3s" />. ' +
    `Se vuoi creare altro in questa categoria dimmi: ${contestoDatoDaUser} <break time="0.4s" />.` +
    'Altrimenti dimmi "Ho finito" <break time="0.1s" />.' +

    '</speak>';
  conv.ask(ssml);
  conv.contexts.set('LoopCreazioneIntento', 1, parameters);
});

app.intent('Loop Creazione Intento', conv => {
  // TODO verifica che "conv.contexts.input.loopcreazioneintento.parameters.contestoDatoDaUser" contenga veramente il vecchio contesto
  if(conv.input.raw != conv.contexts.input.loopcreazioneintento.parameters.contestoDatoDaUser) {
    conv.ask(new HtmlResponse({
      data: {
        scene: 'newCard',
      }
    }));
    // TODO far partire stelline e poi home
  }
  else {
    conv.ask(`a quale nuova domanda devo rispondere ?`);
    const parameters = {
      contestoDaUser: conv.input.raw,
    };
    conv.contexts.set('Domanda', 1, parameters);
    conv.ask(new HtmlResponse({
      data: {
        scene: 'domanda', // TODO far vedere schermata con gli intenti creati
      }
    }));
  }
});


app.intent('CambioNome', conv => {
  conv.ask(new HtmlResponse({
    data: {
      scene: 'nome',
    }
  }));
  const name = conv.parameters.name;
  conv.ask(`Che bello, da ora ti chiamerò ${name}`);
  return admin.database().ref('data/userName').set(name);

});

app.intent('CambioSesso', conv => {
  conv.ask(new HtmlResponse({
    data: {
      scene: 'impostazioni',
    }
  }));
  const sesso = conv.parameters.sesso;
  conv.ask(`Perfetto`);
  return admin.database().ref('data/sesso').set(sesso);
});


app.intent('#barzelletta', conv => {
  conv.ask(new HtmlResponse({
    data: {
      scene: 'chiedimi',
    }
  }));
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
    'Un bambino chiede al papà: <break time="0.5s" />. ' +
    'È vero che le carote fanno bene alla vista? <break time="0.5s" />. ' +
    'Il papà risponde: <break time="0.5s" />.' +
    'Certo!. Hai mai visto un coniglio con gli occhiali? <break time="0.7s" />.' +

    '</speak>';
  conv.ask(ssml);
});

app.intent('vai alla Home', conv => {
  conv.ask('ok, ti porto subito alla schermata iniziale');
  conv.ask(new HtmlResponse({
    url: `https://${firebaseConfig.projectId}.firebaseapp.com/`
  }));
});

app.intent('Chiedimi', conv => {
  conv.ask(new HtmlResponse({
    data: {
      scene: 'chiedimi',
    }
  }));
  const parameters = {
  };
  conv.contexts.set('chiedimi', 5, parameters);
  conv.ask(`Perfetto, ora chiedimi quello che mi hai insegnato.`);
});

app.intent('vai alle impostazioni', conv => {
  conv.ask(new HtmlResponse({
    data: {
      scene: 'impostazioni',
    }
  }));
  const parameters = {
  };
  conv.contexts.set('impostazioni', 5, parameters);
  conv.ask(`Ok, andiamo nelle impostazioni.`);
});

app.intent('Cards', (conv) => {
  if (!conv.screen
    || !conv.surface.capabilities.has('actions.capability.WEB_BROWSER')) {
    conv.ask('Questo dispositivo non supporta il web browser ');
      conv.ask('Prova sul telefono');
    return;
  }
  conv.ask(`Ok, ti mostro le tue carte.`);
  conv.ask(new BrowseCarousel({
    items: [
      new BrowseCarouselItem({
        title: 'Title of item 1',
        url: 'https://example.com',
        description: 'Description of item 1',
        image: new Image({
          url: 'https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png',
          alt: 'Image alternate text',
        }),
        footer: 'Item 1 footer',
      }),
      new BrowseCarouselItem({
        title: 'Title of item 2',
        url: 'https://example.com',
        description: 'Description of item 2',
        image: new Image({
          url: 'https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png',
          alt: 'Image alternate text',
        }),
        footer: 'Item 2 footer',
      }),
    ],
  }));
  conv.ask(new Suggestions('vai alla Home'));
  conv.ask(new Suggestions('vai a Chiedimi'));

});


//############## FUNZIONI ###################################################################

function CreateIntent(contestoDatoDaUser, domandaDatoDaUser, rispostaDatoDaUser){
// per Create Intent --------
const formattedParent = client.projectAgentPath('smemo-devi-funzionare');
const intent = {
  "displayName": String(domandaDatoDaUser),
  "inputContextNames": [
    "projects/smemo-devi-funzionare/agent/sessions/-/contexts/chiedimi"
  ],
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
  "outputContexts": [
    {
      "name": "projects/smemo-devi-funzionare/agent/sessions/-/contexts/chiedimi",
      "lifespanCount": 5,
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




exports.fulfillment = functions.https.onRequest(app);
