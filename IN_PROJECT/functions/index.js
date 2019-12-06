
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const functions = require('firebase-functions');
const {
  dialogflow,
  HtmlResponse
} = require('actions-on-google');

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

const app = dialogflow({
  debug: true
});

app.intent('Default Welcome Intent', conv => {
  conv.ask('Ciao, bentornato !');
  conv.ask(new HtmlResponse({
    url: `https://${firebaseConfig.projectId}.firebaseapp.com/`
  }));
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
      scene: 'createIntent',
    }
  }));

  //CreateIntent(contestoDatoDaUser, domandaDatoDaUser, conv.input.raw);
});


// TODO: Write your code here.

exports.fulfillment = functions.https.onRequest(app);
