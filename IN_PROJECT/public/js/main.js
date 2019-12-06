'use strict';

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
    /*  //Timer function --> da usare quando si fa il caricamento del nuovo intento, da inserire dentro l'if della scena
        setTimeout(() => {
        document.querySelector('#vs').style.display = 'none';
        document.querySelector('#result').style.display = 'block';
        document.querySelector('#message').style.display = 'block';
      }, 5000);  */
  }
});

//on click for interactive conversational images
document.querySelectorAll('#smemo img').forEach(img => {
  img.addEventListener('click', elem => {
    interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
  });
});
