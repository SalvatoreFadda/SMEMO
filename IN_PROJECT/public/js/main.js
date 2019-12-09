'use strict';

//interactive canvas call response
interactiveCanvas.ready({
  onUpdate(data) {
    //visualizzazione pagina dove il bambino insegna a SMEMO
    if (data.scene === 'insegnami') {
      document.querySelector('#welcome').style.display = 'none';
      document.querySelector('#backHome').style.display = 'block';
      document.querySelector('#insegnami').style.display = 'block';
    }
    //visualizzazione pagina della richietsa del bambino a SMEMO
    if (data.scene === 'chiedimi') {
      document.querySelector('#welcome').style.display = 'none';
      document.querySelector('#backHome').style.display = 'block';
      document.querySelector('#chiedimi').style.display = 'block';
	//document.querySelector('#chiedimiMessage').innerText = data.message;
     }
    //passaggio dalla creazione degli intenti alla visualizazzione degli intenti creati
    if (data.scene === 'createIntent') { 
      document.querySelector('#robotCentro').style.display = 'none';
      document.querySelector('#insegnami').style.display = 'none';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#singleCard').style.display = 'block';
    }
    //visualizzazione della card appena creata
    if (data.scene === 'newCard'){
      document.querySelector('#robotDx').style.display = 'none';
      document.querySelector('#singleCard').style.display = 'none';
      document.querySelector('#impostazioni').style.display = 'none';
      document.querySelector('#tutorial').style.display = 'none';
      document.querySelector('#impostazioni').style.display = 'none';
      document.querySelector('#cards').style.display = 'none';
      document.querySelector('#backHome').style.display = 'none';
      document.querySelector('#intentVideo').style.display = 'block';
      document.getElementById("tada").autoplay = true;
      document.getElementById("tada").load();
      setTimeout(() => {
        document.getElementById("tada").autoplay = false;
        document.querySelector('#intentVideo').style.display = 'none';
        document.querySelector('#bottone').style.display = 'block';
        document.querySelector('#backHome').style.display = 'block';
        document.querySelector('#newCard').style.display = 'block';
      }, 5000);
    }
    //visualizzazione impostazioni, di default parte l'impostazione della voce
    if (data.scene === 'impostazioni'){
      //alla fine dello sviluppo scrivere tutti gli id delle pagine da cui può partire a none
      document.querySelector('#backHome').style.display = 'block';
      document.querySelector('#tutorial').style.display = 'block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#voce').style.display = 'block';
      //immagine voce più grnade, altre 2 pù piccole
    }
    //visualizzazione impostazioni per cambio sfondo
    if (data.scene === 'sfondo'){
      //alla fine dello sviluppo scrivere tutti gli id delle pagine da cui può partire a none
      document.querySelector('#backHome').style.display = 'block';
      document.querySelector('#tutorial').style.display = 'block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#sfondo').style.display = 'block';
      //immagine sfondo più grnade, altre 2 pù piccole
    }
    //visualizzazione impostazioni per cambio colore
    if (data.scene === 'colore'){
      //alla fine dello sviluppo scrivere tutti gli id delle pagine da cui può partire a none
      document.querySelector('#backHome').style.display = 'block';
      document.querySelector('#tutorial').style.display = 'block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#colore').style.display = 'block';
      //immagine colore più grnade, altre 2 pù piccole
    }
    //ritorno alla home page(welcome)
    if (data.scene === 'home'){
    //alla fine dello sviluppo scrivere tutti gli id delle pagine da cui può partire a none
      document.querySelector('#impostazioni').style.display = 'block';
      document.querySelector('#tutorial').style.display = 'block';
      document.querySelector('#cards').style.display = 'block';
      document.querySelector('#welcome').style.display = 'block';
    }
    //visualizzazione delle cards  ------------> impossibile entro il 13
    if (data.scene === 'cardsPage'){
    //alla fine dello sviluppo scrivere tutti gli id delle pagine da cui può partire a none
      document.querySelector('#robotDx').style.display = 'block';
    //capire come far uscire tutte le card del bambino...?
    }
    //default page
    else {
    }

  }
});

//on click for interactive conversational images
document.querySelectorAll('#smemo img').forEach(img => {
  img.addEventListener('click', elem => {
    interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
  });
});