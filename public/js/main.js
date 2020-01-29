'use strict';


//interactive canvas call response
interactiveCanvas.ready({
  onUpdate(data) {
    //visualizzazione pagina dove il bambino insegna a SMEMO
    if (data.scene === 'insegnami') {
      noneSelector('insegnami');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#impostazioni').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#robotCentro').style.display = 'block';
      document.querySelector('#insegnami').style.display = 'block';
    }
    if (data.scene === 'domanda') {
      noneSelector('domanda');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#impostazioni').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#robotCentro').style.display = 'block';
      document.querySelector('#domanda').style.display = 'block';
    }
    if (data.scene === 'risposta') {
      noneSelector('risposta');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#impostazioni').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#robotCentro').style.display = 'block';
      document.querySelector('#risposta').style.display = 'block';
    }
    if (data.scene === 'continua') {
      noneSelector('continua');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#impostazioni').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#continua').style.display = 'block';
    }  
    //visualizzazione pagina della richietsa del bambino a SMEMO
    if (data.scene === 'chiedimi') {
      noneSelector('chiedimi');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#impostazioni').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#robotCentro').style.display = 'block';
      //document.querySelector('#chiedimiMess').innerText = data.message;
      document.querySelector('#chiedimi').style.display = 'block';
     }
    //passaggio dalla creazione degli intenti alla visualizazzione degli intenti creati
    if (data.scene === 'createIntent') {  //NON PRESENTE NELLA DEMO 
      noneSelector('createIntent');
      document.querySelector('#robotDx').style.display = 'block';
     // document.querySelector('#singleCard').style.display = 'block';
    }
    //visualizzazione della card appena creata
    if (data.scene === 'newCard'){
      noneSelector('newCard');
      document.querySelector('#intentVideo').style.display = 'block';
      document.getElementById("tada").autoplay = true;
      document.getElementById("tada").load();
      setTimeout(() => {
        document.getElementById("tada").autoplay = false;
        document.querySelector('#intentVideo').style.display = 'none';
        document.querySelector('#impostazioni').style.display = 'inline-block';
        //document.querySelector('#tutorial').style.display = 'inline-block';
        //document.querySelector('#newCard').style.display = 'block';
        document.querySelector('#cards').style.display = 'inline-block';
        document.querySelector('#welcome').style.display = 'block';
      }, 7000);
    }
    //visualizzazione impostazioni, di default parte l'impostazione del nome e del sesso(M/F)
    if (data.scene === 'impostazioni'){
      noneSelector('impostazioni');
      document.querySelector('#backHome').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#nome').style.display = 'block';
    }
    //visualizzazione impostazioni per cambio sfondo
    if (data.scene === 'sfondi'){
      noneSelector('sfondi');
      document.querySelector('#backHome').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#sfondi').style.display = 'block';
    }
    //visualizzazione impostazioni per cambio colore del robot
    if (data.scene === 'robotColor'){
      noneSelector('colore');
      document.querySelector('#backHome').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#colore').style.display = 'block';
    }
    //ritorno alla home page(welcome)
    if (data.scene === 'home'){
      noneSelector('home');
      document.querySelector('#impostazioni').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#welcome').style.display = 'block';
      document.querySelector('#backHome').style.display = 'none';
    }
    //visualizzazione delle cards
    if (data.scene === 'cardsPage'){ //NON PRESENTE NELLA DEMO
      noneSelector('cardsPage');
      document.querySelector('#robotDx').style.display = 'block';
    //capire come far uscire tutte le card del bambino...?
    }
    //cambio sfondo generale dell'applicazione in spazio
    if(data.scene === 'spazio'){
    document.body.style.background = "#ffffff url('spazio.svg')";    
    }
      //cambio sfondo generale in dinosauri
    if(data.scene === 'dinosauri'){
    document.body.style.background = "#ffffff url('dinosauri.svg')";    
    }
    //cambio sfondo generale in caramelle
    if(data.scene === 'caramelle'){
    document.body.style.background = "#ffffff url('caramelle.svg')";
    //document.querySelector('#user-choice').src = `images/${data.userChoice}.png`;    
    }
    //default page
    if(data.scene === 'default') {
      noneSelector('default');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#defaultPage').style.display = 'block';
    }
  }
});

//funzione che si occupa di nascondere gli elementi non necessari ---> elemento di default sempre on --> #backHome
function noneSelector(scene){
    document.querySelector('#impostazioni').style.display = 'none';
    document.querySelector('#tutorial').style.display = 'none';
    document.querySelector('#cards').style.display = 'none';
    document.querySelector('#robotDx').style.display = 'none';
    document.querySelector('#robotCentro').style.display = 'none';
    document.querySelector('#welcome').style.display = 'none';
    document.querySelector('#insegnami').style.display = 'none';
    document.querySelector('#chiedimi').style.display = 'none';
    document.querySelector('#domanda').style.display = 'none';
    document.querySelector('#risposta').style.display = 'none';
    document.querySelector('#continua').style.display = 'none';
    //document.querySelector('#newCard').style.display = 'none';
    document.querySelector('#nome').style.display = 'none';
    document.querySelector('#sfondi').style.display = 'none';
    document.querySelector('#colore').style.display = 'none';
    document.querySelector('#defaultPage').style.display = 'none';
    }
 




//on click for interactive conversational images
document.querySelectorAll('#smemo img').forEach(img => {
  img.addEventListener('click', elem => {
    interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
  });
});
