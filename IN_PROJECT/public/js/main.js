'use strict';

//interactive canvas call response
interactiveCanvas.ready({
  onUpdate(data) {
    //visualizzazione pagina dove il bambino insegna a SMEMO
    if (data.scene === 'insegnami') {
      document.querySelector('#welcome').style.display = 'none';
      document.querySelector('#backHome').style.display = 'block';
      document.querySelector('#impostazioni').style.display = 'block';
      document.querySelector('#tutorial').style.display = 'block';
      document.querySelector('#cards').style.display = 'block';
      document.querySelector('#insegnami').style.display = 'block';
    }
    //visualizzazione pagina della richietsa del bambino a SMEMO
    if (data.scene === 'chiedimi') {
      document.querySelector('#welcome').style.display = 'none';
      document.querySelector('#backHome').style.display = 'block';
      document.querySelector('#impostazioni').style.display = 'block';
      document.querySelector('#tutorial').style.display = 'block';
      document.querySelector('#cards').style.display = 'block';
      document.querySelector('#chiedimi').style.display = 'block';
	//document.querySelector('#chiedimiMessage').innerText = data.message;
     }
    //passaggio dalla creazione degli intenti alla visualizazzione degli intenti creati
    if (data.scene === 'createIntent') { 
      document.querySelector('#backHome').style.display = 'none';
      document.querySelector('#impostazioni').style.display = 'none';
      document.querySelector('#tutorial').style.display = 'none';
      document.querySelector('#cards').style.display = 'none';
      document.querySelector('#insegnami').style.display = 'none';
      document.querySelector('#intentVideo').style.display = 'block';
      //document.getElementById("tada").autoplay();
    }
    //visualizzazione impostazioni
    if (data.scene === 'impostazioni'){
    }
    //visualizzazione impostazioni per cambio sfondo
    if (data.scene === 'sfondo'){
    }
    //visualizzazione impostazioni per cambio colore
    if (data.scene === 'colore'){
    }
    //visualizzazione impostazioni per cambio voce
    if (data.scene === 'voce'){
    }
    //visualizzazione nuova card
    if (data.scene === 'newCard'){
    }
    //visualizzazione delle cards
    if (data.scene === 'cardsPage'){
    }
    //visualizzazione pagina della singola card
    if (data.scene === 'singleCard'){
    }
    //ritorno alla home page(welcome)
    if (data.scene === 'home'){
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
