'use strict';


//interactive canvas call response
interactiveCanvas.ready({
  onUpdate(data) {
    //visualizzazione pagina dove il bambino insegna a SMEMO
    if (data.scene === 'insegnami') {
      noneSelector();
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#impostazioni').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#robotCentro').style.display = 'block';
      document.querySelector('#insegnami').style.display = 'block';
    }
    if (data.scene === 'domanda') {
      noneSelector();
      document.querySelector('#backHome').style.display = 'inline-block'; 
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#robotCentro').style.display = 'block';
      document.querySelector('#domanda').style.display = 'block';
    }
    if (data.scene === 'risposta') {
      noneSelector();
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#robotCentro').style.display = 'block';
      document.querySelector('#risposta').style.display = 'block';
    } 
    //visualizzazione della card appena creata
    if (data.scene === 'newCard'){
      noneSelector();
      document.querySelector('#intentVideo').style.display = 'block';
      document.getElementById("tada").autoplay = true;
      document.getElementById("tada").load();
      setTimeout(() => {
        document.getElementById("tada").autoplay = false;
        document.querySelector('#intentVideo').style.display = 'none';
        document.querySelector('#impostazioni').style.display = 'inline-block';
        document.querySelector('#tutorial').style.display = 'inline-block';
        document.querySelector('#cards').style.display = 'inline-block';
        document.querySelector('#welcome').style.display = 'block';
      }, 5000);
    }
    //visualizzazione impostazioni, di default parte l'impostazione del nome e del sesso(M/F)
    if (data.scene === 'impostazioni'){
      noneSelector();
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#nome').style.display = 'block';
    }
    //visualizzazione impostazioni per cambio sfondo
    if (data.scene === 'sfondi'){
      noneSelector();
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#sfondi').style.display = 'block';
    }
    //visualizzazione impostazioni per cambio colore del robot
    if (data.scene === 'robotColor'){
      noneSelector();
      document.querySelector('#backHome').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#robotDx').style.display = 'block';
      document.querySelector('#coloreRobot').style.display = 'block';
    }
    //ritorno alla home page(welcome)
    if (data.scene === 'home'){
      noneSelector();
      document.querySelector('#impostazioni').style.display = 'inline-block';
      document.querySelector('#tutorial').style.display = 'inline-block';
      document.querySelector('#cards').style.display = 'inline-block';
      document.querySelector('#welcome').style.display = 'block';
      cambioColore(data.coloreRobot);
      cambioSfondo(data.sfondo);
    }
    if (data.scene === 'tutorial-home'){
      noneSelector();
      document.querySelector('#chiudiHome').style.display = 'block';
      document.querySelector('#aiutoHome').style.display = 'block';
        
    }
    if (data.scene === 'tutorial-insegnare'){
      noneSelector();
      document.querySelector('#chiudiIns').style.display = 'block';
      document.querySelector('#aiutoIns').style.display = 'block';
    }
    if (data.scene === 'tutorial-impostazioni'){
      noneSelector();
      document.querySelector('#chiudiImp').style.display = 'block';
      document.querySelector('#aiutoImp').style.display = 'block';
    }
    //setta lo sfondo dell'applicazione
    if(data.scene === 'bianco' || data.scene === 'spazio' || data.scene === 'dinosauri' || data.scene === 'caramelle'){
    cambioSfondo(data.scene);
    }
    //cambia il colore del robot in blu
    if(data.scene === 'robotBlu' || data.scene === 'robotViola' || data.scene === 'robotVerde'){
    cambioColore(data.scene);   
    }
    //ti porta alla pagina della storia di SMEMO
    if(data.scene === 'laMiaStoria'){
      noneSelector();
      //document.querySelector('#laMiaStoria').style.display = 'block';
    }
  }
});

//funzione che si occupa di nascondere gli elementi non necessari ---> elemento di default sempre on --> #backHome
function noneSelector(){
    document.querySelector('#impostazioni').style.display = 'none';
    document.querySelector('#tutorial').style.display = 'none';
    document.querySelector('#cards').style.display = 'none';
    document.querySelector('#robotDx').style.display = 'none';
    document.querySelector('#robotCentro').style.display = 'none';
    document.querySelector('#welcome').style.display = 'none';
    document.querySelector('#insegnami').style.display = 'none';
    document.querySelector('#domanda').style.display = 'none';
    document.querySelector('#risposta').style.display = 'none';
    document.querySelector('#continua').style.display = 'none';
    document.querySelector('#nome').style.display = 'none';
    document.querySelector('#sfondi').style.display = 'none';
    document.querySelector('#coloreRobot').style.display = 'none';
    document.querySelector('#aiutoHome').style.display = 'none';
    document.querySelector('#aiutoIns').style.display = 'none';
    document.querySelector('#aiutoImp').style.display = 'none';
    document.querySelector('#chiudiIns').style.display = 'none';
    document.querySelector('#chiudiImp').style.display = 'none';
    document.querySelector('#chiudiHome').style.display = 'none';
    //document.querySelector('#laMiaStoria').style.display = 'none';
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
    }
}

//cambia il colore del robot in verde
function cambioColore(colore){
    //cambia il colore del robot in blu
    if(colore === "robotBlu"){
    document.getElementById("robotCentroImg").src = "assets/images/robot.svg"; 
    document.getElementById("robotDxImg").src = "assets/images/robot.svg";
    document.getElementById("robotWow").src = "assets/images/robot.svg";
    //document.querySelector('#user-choice').src = `images/${data.userChoice}.png`;    
    }
    //cambia il colore del robot in viola
    if(colore === "robotViola"){
    document.getElementById("robotCentroImg").src = "assets/images/robotViola.svg"; 
    document.getElementById("robotDxImg").src = "assets/images/robotViola.svg";
    document.getElementById("robotViolaWow").src = "assets/images/robot.svg";
    //document.querySelector('#user-choice').src = `images/${data.userChoice}.png`;    
    }
    //cambia il colore del robot in verde
    if(colore === "robotVerde"){
    document.getElementById("robotCentroImg").src = "assets/images/robotVerde.svg"; 
    document.getElementById("robotDxImg").src = "assets/images/robotVerde.svg";
    document.getElementById("robotVerdeWow").src = "assets/images/robot.svg";
    //document.querySelector('#user-choice').src = `images/${data.userChoice}.png`;    
    }
}



//on click for interactive conversational images
document.querySelectorAll('#smemo img').forEach(img => {
  img.addEventListener('click', elem => {
    interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
  });
});
