'use strict';


//interactive canvas call response
interactiveCanvas.ready({
  onUpdate(data) {
    //visualizzazione pagina dove il bambino insegna a SMEMO
    if (data.scene === 'insegnami') {
      noneSelector('insegnami');
      document.querySelector('#impostazioni').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#bottone').style.display = 'block';
      document.querySelector('#robotCentro').style.display = 'block';
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#insegnami').style.display = 'block';
    }
    //visualizzazione pagina della richietsa del bambino a SMEMO
    if (data.scene === 'chiedimi') {
      noneSelector('chiedimi');
      document.querySelector('#impostazioni').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#bottone').style.display = 'block';
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#robotCentro').style.display = 'block';
      //document.querySelector('#chiedimiMess').innerText = data.message;
      document.querySelector('#chiedimi').style.display = 'block';
     }
    //passaggio dalla creazione degli intenti alla visualizazzione degli intenti creati
    if (data.scene === 'createIntent') {  //NON PRESENTE NELLA DEMO 
      noneSelector('createIntent');
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#bottone').style.display = 'block';
      document.querySelector('#singleCard').style.display = 'block';
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
        document.querySelector('#bottone').style.display = 'block';
        document.querySelector('#backHome').style.display = 'inline-block';
        document.querySelector('#newCard').style.display = 'block';
      }, 7000);
    }
    //visualizzazione impostazioni, di default parte l'impostazione della voce(che si occupa di cambiare anche il colore del robot)
    if (data.scene === 'impostazioni'){
      noneSelector('impostazioni');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#bottone').style.display = 'block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#voce').style.display = 'block';
      //immagine voce più grnade, altre 2 pù piccole
    }
    //visualizzazione impostazioni per cambio sfondo
    if (data.scene === 'sfondi'){
      noneSelector('sfondi');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#bottone').style.display = 'block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#sfondi').style.display = 'block';
      //immagine sfondo più grnade, altre 2 pù piccole
    }
    //visualizzazione impostazioni per cambio nome
    if (data.scene === 'nome'){
      noneSelector('nome');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#bottone').style.display = 'block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#nome').style.display = 'block';
      //immagine nome più grnade, altre 2 pù piccole
    }
    //ritorno alla home page(welcome)
    if (data.scene === 'home'){
      noneSelector('home');
      //document.querySelector('#impostazioni').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#bottone').style.display = 'block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#welcome').style.display = 'block';
    }
    //visualizzazione delle cards
    if (data.scene === 'cardsPage'){ //NON PRESENTE NELLA DEMO
      noneSelector('cardsPage');
      document.querySelector('#robotDx').style.display = 'block';
    //capire come far uscire tutte le card del bambino...?
    }
    //default page
    else {
      noneSelector('default');
      document.querySelector('#bottone').style.display = 'block';
      document.querySelector('#defaultPage').style.display = 'block';    
    }

  }
});

//funzione che si occupa di nascondere gli elementi non necessari
function noneSelector(scene){
    document.querySelector('#defaultPage').style.display = 'none';
    document.querySelector('#robotDx').style.display = 'none';
    document.querySelector('#backHome').style.display = 'none';
    document.querySelector('#impostazioni').style.display = 'none';
    document.querySelector('#tutorial').style.display = 'none';
    document.querySelector('#robotCentro').style.display = 'none';
    document.querySelector('#bottone').style.display = 'none';
    document.querySelector('#cards').style.display = 'none';
    document.querySelector('#welcome').style.display = 'none';
    document.querySelector('#insegnami').style.display = 'none';
    document.querySelector('#chiedimi').style.display = 'none';
    document.querySelector('#tutorial').style.display = 'none';
    document.querySelector('#domanda').style.display = 'none';
    document.querySelector('#risposta').style.display = 'none';
    document.querySelector('#continua').style.display = 'none';
    document.querySelector('#newCard').style.display = 'none';
    document.querySelector('#voce').style.display = 'none';
    document.querySelector('#sfondi').style.display = 'none';
    document.querySelector('#nome').style.display = 'none';
    //....
    
}





//on click for interactive conversational images
document.querySelectorAll('#smemo img').forEach(img => {
  img.addEventListener('click', elem => {
    interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
  });
});
