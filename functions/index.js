
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
  SimpleResponse,
  Image,
  BrowseCarousel,
  BrowseCarouselItem,
  Suggestions,
  LinkOutSuggestion,
  List,
  Button
} = require('actions-on-google');
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const app = dialogflow({
  debug: true
});
const projectId = 'smemo-devi-funzionare';
const sessionId = 'eb79896704bac522258e09db8e61139f45d3b3f6';
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
/*
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
*/

const client = new dialog.IntentsClient();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'ws://smemo-devi-funzionare.firebaseio.com/'
});

const db = admin.firestore();


// ################## INIZIO INTENTI ################################################################

app.fallback((conv) => {
    const intent = conv.intent;
    console.log("sono in: " + intent);
    conv.ask("sono in fallback");
/*
conv.ask(".......", new HtmlResponse({
    data: {
      scene: 'chiedimi',
    }
  }));
*/
});


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
  db.collection('intents').add({
    contesto: `${contestoDatoDaUser}`,
    domanda: `${domandaDatoDaUser}`,
    risposta: `${conv.input.raw}`
  });
  const ssml = '<speak>' +
    'Perfetto ! <break time="0.3s" />. ' +
    'Ho imparato qualcosa di nuovo. <break time="0.3s" />. ' +
    `Se vuoi creare altro in questa categoria dimmi: ${contestoDatoDaUser}. <break time="0.4s" />.` +
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


app.intent('vai alla Home', conv => {
  conv.ask('ok, ti porto subito alla schermata iniziale');
  conv.ask(new HtmlResponse({
    data: {
      scene: 'home',
    }
  }));
  /*conv.ask(new HtmlResponse({
    url: `https://${firebaseConfig.projectId}.firebaseapp.com/`
  }));*/
});


app.intent('Chiedimi', conv => {
    console.log("sono in chiedimi");
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


const createList = conv => {
  items = conv.user.storage.items;
  conv.ask(new List({
    title: 'Le tue Cards',
    items: items,
  }));
  // SUGGESTION
  conv.ask(new Suggestions('esci dalla lista'));
}

const createSingleList = conv => {
  itemTitle = conv.user.storage.domanda;
  itemText = conv.user.storage.risposta;
  itemContext = conv.user.storage.contesto;
  conv.ask(new SimpleResponse({
        speech: "Ecco qui la card per questa categoria",
        text: "Ecco qui la card per questa categoria",
    }))
  conv.ask(new BasicCard({
   text: `${itemText}  \n`, // Note the two spaces before '\n' required for
                                // a line break to be rendered in the card.
   subtitle: ' ',
   title: `${itemTitle}`,
   image: new Image({
     url: `${cardImage(itemContext)}`,
     alt: 'Image alternate text',
   }),
   display: 'CROPPED',
 }));
  // SUGGESTION
  conv.ask(new Suggestions('esci dalla lista'));
  conv.ask(new Suggestions('elimina questa card'));
}

const createSingleListForContext = conv => {
  itemContext = conv.user.storage.contesto;
  console.log(itemContext);
  console.log(cardImage(itemContext));
  conv.ask(new SimpleResponse({
        speech: "Ecco qui la categoria che hai creato",
        text: "Ecco qui la categoria che hai creato",
    }));
  conv.ask(new BasicCard({
   text: `${itemContext}  \n`, // Note the two spaces before '\n' required for
                                // a line break to be rendered in the card.
   subtitle: ' ',
   title: 'La tua categoria',
   image: new Image({
     url: `${cardImage(itemContext)}`,
     alt: 'Image alternate text',
   }),
   display: 'CROPPED',
 }));
  // SUGGESTION
  conv.ask(new Suggestions('esci dalla lista'));
  conv.ask(new Suggestions('visualizza categoria'));
}


app.intent('Cards', (conv) => {
  // CARD che mostrano i contesti
  if (!conv.screen) {
      conv.ask('Mi dispiace ma questo dispositivo non supporta un interfaccia grafica.');
      return;
    }
  const parameters = {
  };
  conv.contexts.set('cards', 1, parameters);
  var items = {};
  return db.collection('intents').get()
  .then(intents => {
    let mySet = new Set();
    intents.forEach(intent => {
      mySet.add(`${intent.get('contesto')}`);
      // useful only for single card
      conv.user.storage.contesto = intent.get('contesto');
      conv.user.storage.risposta = intent.get('risposta');
      conv.user.storage.domanda = intent.get('domanda');
    });
    for (let x of mySet) {
      var k = `${x}`;
      //items[k] = createContextCards(k);
      items[k] = {
              synonyms: [
                `${k}`,
              ],
              title: `${k}`,
              description: ` `,
              image: new Image({
                url: `${cardImage(k)}`,
                alt: 'Image alternate text',
              }),
            };
    }
    if (mySet.size >= 2) {
      conv.user.storage.items = items;
      createList(conv);
      conv.ask('Ok, ti mostro le tue categorie');
    }
    else {
      if (mySet.size = 1) {
        createSingleListForContext(conv);
      }
      else {
        conv.ask('Mi spiace ma non hai ancora delle Cards, vai alla sezione impariamo e insegnami qualcosa');
      }
    }
    }).catch(err => {
      console.error(err);
    });
});

app.intent('Cards(2)', (conv) => {
  // CARD specifiche per il contesto
  if (!conv.screen) {
      conv.ask('Mi dispiace ma questo dispositivo non supporta un interfaccia grafica.');
      return;
    }
  const parameters = {
  };

  var items = {};
  return db.collection('intents').get()
  .then(intents => {
      var i = 0;
      intents.forEach(intent => {
        if (( conv.input.raw == intent.get('contesto')&&conv.input.raw!='visualizza categoria' || conv.user.storage.contesto == intent.get('contesto')&&conv.input.raw=='visualizza categoria')&& (i <= 28)){
          i = i + 1;
          var k = `${intent.get('domanda')}`;
          //items[k] = createCards(intent.get('contesto'),intent.get('domanda'),intent.get('risposta'))
            items[k] = {
                  synonyms: [
                  ],
                  title: `${intent.get('domanda')}`,
                  description: `${intent.get('risposta')}`,
                  image: new Image({
                    url: `${cardImage(intent.get('contesto'))}`,
                    alt: 'Image alternate text',
                  }),
                };
          // useful only for single card
          conv.user.storage.risposta = intent.get('risposta');
          conv.user.storage.domanda = intent.get('domanda');
          conv.user.storage.contesto = intent.get('contesto');
          }
    });
    if ( i >= 2){
    conv.user.storage.items = items;
    createList(conv);
    conv.contexts.set('cards2', 1, parameters);
    conv.ask('Ecco qui le cards per questa categoria');
    }
    else {
      createSingleList(conv);
      conv.contexts.set('cards2', 1, parameters);
      //conv.ask('Ecco qui la card per questa categoria');
    }
    }).catch(err => {
      console.error(err);
    });
});

app.intent('Cards(3)', conv => {
  conv.ask('Vuoi eliminare la card selezionata ? rispondi "si" oppure "no" ');
  conv.user.storage.intento = `${conv.input.raw}`;
  const parameters = {
  };
  conv.contexts.set('eliminazioneIntento', 1, parameters);
});


app.intent('eliminazione intento si', conv => {
  conv.ask('Perfetto, elimino subito la card ');
  var intento = conv.user.storage.intento;
  myDeleteIntent(intento);
  conv.ask(new HtmlResponse({
    url: `https://${firebaseConfig.projectId}.firebaseapp.com/`
  }));
  return db.collection('intents').get()
  .then(intents => {
    var strs = JSON.stringify(intents);
    console.log(`intents: ${strs}`);
    intents.forEach(intent => {
      if (intent.get('domanda').valueOf() == intento.valueOf()) {
        var id = intent.id ;
        db.collection('intents').doc(id).delete();
      }
    });
    }).catch(err => {
      console.error(err);
    });
});

app.intent('eliminazione intento no', conv => {
  conv.ask('Ok, non elimino la card ');
  conv.ask(new HtmlResponse({
    url: `https://${firebaseConfig.projectId}.firebaseapp.com/`
  }));
});

app.intent('esci dalla lista', conv => {
  conv.ask('ok, ti porto subito alla schermata iniziale');
  conv.ask(new HtmlResponse({
    url: `https://${firebaseConfig.projectId}.firebaseapp.com/`
  }));
});

app.intent('esci dalla lista 2', conv => {
  conv.ask('ok, ti porto subito alla schermata iniziale');
  conv.ask(new HtmlResponse({
    url: `https://${firebaseConfig.projectId}.firebaseapp.com/`
  }));
});

app.intent('elimina singola card', conv => {
  conv.ask('Vuoi eliminare la card selezionata ? rispondi "si" oppure "no"');
  conv.user.storage.intento = conv.user.storage.domanda;
  const parameters = {
  };
  conv.contexts.set('eliminazioneIntento', 1, parameters);
});



//############## FUNZIONI ###################################################################

async function cards() {
  const projectAgentPath = client.projectAgentPath(projectId);
  const [response] = await client.listIntents({parent: projectAgentPath}, {autoPaginate: false});
    var i = 0;
    intents = [];
    response.forEach(intent => {
    console.log('====================');
    console.log(`Intent name: ${intent.name}`);
    console.log(`Intent display name: ${intent.displayName}`);
    console.log(`Action: ${intent.action}`);
    console.log(`Root folowup intent: ${intent.rootFollowupIntentName}`);
    console.log(`Parent followup intent: ${intent.parentFollowupIntentName}`);

    console.log('Input contexts:');
    intent.inputContextNames.forEach(inputContextName => {
      console.log(`\tName: ${inputContextName}`);
    });

    console.log('Output contexts:');
    intent.outputContexts.forEach(outputContext => {
      console.log(`\tName: ${outputContext.name}`);
    });

  });
}

function myDeleteIntent(intento) {
  const formattedParent = client.projectAgentPath('smemo-devi-funzionare');
  client.listIntents({parent: formattedParent}, {autoPaginate: false})
    .then(responses => {
      const resources = responses[0];
      for (const resource of resources) {
        if (resource.displayName == intento) {
          const formattedName = resource.name;
          console.log(`formatted name: ${formattedName}`);
          client.deleteIntent({name: formattedName}).catch(err => {
          console.error(err);
        });
        }
      }
    })
    .catch(err => {
      console.error(err);
    });
}

function cards3() {
const formattedParent = client.projectAgentPath('smemo-devi-funzionare');
  client.listIntentsStream({parent: formattedParent})
    .on('data', element => {
      // doThingsWith(element)
      console.log('====================');
      console.log(`Intent name: ${element.name}`);
      console.log(`Intent display name: ${element.displayName}`);
    }).on('error', err => {
      console.log(err);
    });
}


function CreateIntent(contestoDatoDaUser, domandaDatoDaUser, rispostaDatoDaUser){
// per Create Intent --------
const formattedParent = client.projectAgentPath('smemo-devi-funzionare');
const intent = {
  "displayName": String(domandaDatoDaUser),
  "webhookState": "WEBHOOK_STATE_ENABLED",
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
      "lifespanCount": 1,
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

function cardImage(contesto){
  var urlImage;
  switch (contesto) {
    case "mate":
    case "matematica":
      urlImage = 'https://firebasestorage.googleapis.com/v0/b/smemo-devi-funzionare.appspot.com/o/matematica.svg?alt=media&token=4bb6fc3b-3264-418c-bbe0-55142f4acd22';
      break;
    case 'Mucca':
    case 'Giraffa':
    case 'Cane':
    case 'Maiale':
    case "animali":
      urlImage = 'https://firebasestorage.googleapis.com/v0/b/smemo-devi-funzionare.appspot.com/o/animali.svg?alt=media&token=86ca9ff7-5b29-4389-818f-8fb12841f7d8';
      break;
    case "barzellette":
    case "barzelletta":
      urlImage = 'https://firebasestorage.googleapis.com/v0/b/smemo-devi-funzionare.appspot.com/o/jokes.svg?alt=media&token=e7cd1ffe-4845-4674-a9d0-807b7499eea8';
      break;
    default:
      urlImage = 'https://firebasestorage.googleapis.com/v0/b/smemo-devi-funzionare.appspot.com/o/robotDefault.svg?alt=media&token=a352ef1d-6b16-4aaa-8d5d-2739bd9ff53b';
      break;
  }
  return urlImage
}

exports.fulfillment = functions.https.onRequest(app);
