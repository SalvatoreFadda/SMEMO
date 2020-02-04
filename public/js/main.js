'use strict';


//interactive canvas call response
interactiveCanvas.ready({
  onUpdate(data) {
    //visualizzazione pagina dove il bambino insegna a SMEMO
    if (data.scene === 'insegnami') {
      noneSelector('insegnami');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#impostazioni').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#robotCentro').style.display = 'block';
      document.querySelector('#insegnami').style.display = 'block';
    }
    if (data.scene === 'domanda') {
      noneSelector('domanda');
      document.querySelector('#backHome').style.display = 'inline-block';
      //document.querySelector('#impostazioni').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#robotCentro').style.display = 'block';
      document.querySelector('#domanda').style.display = 'block';
    }
    if (data.scene === 'risposta') {
      noneSelector('risposta');
      document.querySelector('#backHome').style.display = 'inline-block';
      //document.querySelector('#impostazioni').style.display = 'inline-block';
      //document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#robotCentro').style.display = 'block';
      document.querySelector('#risposta').style.display = 'block';
    }
    if (data.scene === 'continua') {
      noneSelector('continua');
      document.querySelector('#backHome').style.display = 'inline-block';
      //document.querySelector('#impostazioni').style.display = 'inline-block';
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
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#nome').style.display = 'block';
    }
    //visualizzazione impostazioni per cambio sfondo
    if (data.scene === 'sfondi'){
      noneSelector('sfondi');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#sfondi').style.display = 'block';
    }
    //visualizzazione impostazioni per cambio colore del robot
    if (data.scene === 'robotColor'){
      noneSelector('colore');
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#coloreRobot').style.display = 'block';
    }
    //ritorno alla home page(welcome)
    if (data.scene === 'home'){
      noneSelector('home');
      document.querySelector('#impostazioni').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#welcome').style.display = 'block';
      cambioColore(data.coloreRobot);
      cambioSfondo(data.sfondo);
    }
    if (data.scene === 'tutorial-home'){
      document.querySelector('#backHome').style.display = 'none';
    }
    if (data.scene === 'tutorial-insegnami'){
      document.querySelector('#backHome').style.display = 'none';
    }
    if (data.scene === 'tutorial-impostazioni'){
      document.querySelector('#backHome').style.display = 'none';
    }
    //visualizzazione delle cards
    if (data.scene === 'cardsPage'){ //NON PRESENTE NELLA DEMO
      noneSelector('cardsPage');
      document.querySelector('#robotDx').style.display = 'block';
    //capire come far uscire tutte le card del bambino...?
    }
    //setta lo sfondo dell'applicazione
    if(data.scene === 'bianco' || data.scene === 'spazio' || data.scene === 'spazio' || data.scene === 'caramelle'){
    cambioSfondo(data.scene);
    }
    //cambia il colore del robot in blu
    if(data.scene === 'robotBlu' || data.scene === 'robotViola' || data.scene === 'robotVerde'){
    cambioColore(data.scene);   
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
    document.querySelector('#coloreRobot').style.display = 'none';
    document.querySelector('#defaultPage').style.display = 'none';
    }
                        
//setta lo sfondo dell'applicazione
function cambioSfondo(sfondo){
//setta lo sfondo dell'applicazione in bianco  
    if(sfondo === "bianco"){
    document.body.style.backgroundImage = "url('')";    
    }
    //cambio sfondo generale dell'applicazione in spazio
    if(sfondo === "spazio"){
    document.body.style.backgroundImage = "url('assets/images/spazio.svg')";    
    }
      //cambio sfondo generale in dinosauri
    if(sfondo === "dinosauri"){
    document.body.style.backgroundImage = "url('assets/images/dinosauri.svg')";     
    }
    //cambio sfondo generale in caramelle
    if(sfondo === "caramelle"){
    document.body.style.backgroundImage = "url('assets/images/caramelleS.svg')"; 
    //document.querySelector('#user-choice').src = `images/${data.userChoice}.png`;    
    }
}

//cambia il colore del robot in verde
function cambioColore(colore){
    //cambia il colore del robot in blu
    if(colore === "robotBlu"){
    document.getElementById("robotCentroImg").src = "assets/images/robot.svg"; 
    document.getElementById("robotDxImg").src = "assets/images/robot.svg"; 
    //document.querySelector('#user-choice').src = `images/${data.userChoice}.png`;    
    }
    //cambia il colore del robot in viola
    if(colore === "robotViola"){
    document.getElementById("robotCentroImg").src = "assets/images/robotViola.svg"; 
    document.getElementById("robotDxImg").src = "assets/images/robotViola.svg"; 
    //document.querySelector('#user-choice').src = `images/${data.userChoice}.png`;    
    }
    //cambia il colore del robot in verde
    if(colore === "robotVerde"){
    document.getElementById("robotCentroImg").src = "assets/images/robotVerde.svg"; 
    document.getElementById("robotDxImg").src = "assets/images/robotVerde.svg"; 
    //document.querySelector('#user-choice').src = `images/${data.userChoice}.png`;    
    }
}



//on click for interactive conversational images
document.querySelectorAll('#smemo img').forEach(img => {
  img.addEventListener('click', elem => {
    interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
  });
});
