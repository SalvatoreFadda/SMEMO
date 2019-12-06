'use strict';

//video 
var intVid = document.getElementById("intentVideo"); 

function playIntVid() { 
  intVid.play(); 
} 



//interactive canvas call response
interactiveCanvas.ready({
  onUpdate(data) {
    // Display the insegnami page.
    if (data.scene === 'insegnami') {
      document.querySelector('#welcome').style.display = 'none';
      document.querySelector('#backHome').style.display = 'block';
      document.querySelector('#impostazioni').style.display = 'block';
      document.querySelector('#tutorial').style.display = 'block';
      document.querySelector('#cards').style.display = 'block';
      document.querySelector('#insegnami').style.display = 'block';
    }
    //Display the chiedimi page
    if (data.scene === 'chiedimi') {
      document.querySelector('#welcome').style.display = 'none';
      document.querySelector('#backHome').style.display = 'block';
      document.querySelector('#impostazioni').style.display = 'block';
      document.querySelector('#tutorial').style.display = 'block';
      document.querySelector('#cards').style.display = 'block';
      document.querySelector('#chiedimi').style.display = 'block';
     }
      //document.querySelector('#chiedimiMessage').innerText = data.message;
     //Timer function --> da usare quando si fa il caricamento del nuovo intento, da inserire dentro l'if della scena
    if (data.scene === 'createIntent') { 
     /*setTimeout(() => {
      document.querySelector('#backHome').style.display = 'none';
      document.querySelector('#impostazioni').style.display = 'none';
      document.querySelector('#tutorial').style.display = 'none';
      document.querySelector('#cards').style.display = 'none';
      document.querySelector('#insegnami').style.display = 'none';
      document.querySelector('#welcome').style.display = 'block';
      //playIntVid();
     }, 500);*/
      //document.querySelector('#intentVideo').style.display = 'none';
      document.querySelector('#welcome').style.display = 'block';
      //document.querySelector('#impostazioni').style.display = 'block';
      //document.querySelector('#tutorial').style.display = 'block';
    }
  }
});

//on click for interactive conversational images
document.querySelectorAll('#smemo img').forEach(img => {
  img.addEventListener('click', elem => {
    interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
  });
});
