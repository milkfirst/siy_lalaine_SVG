console.log('JavaScipt is up and running! :D');

const stickerGraphic = document.querySelector('#handMade','#zestyLemonSlice');

function logThisId()    {
    console.log('This element is selected:', this.id);
}

stickerGraphic.addEventListener('click', logThisId);