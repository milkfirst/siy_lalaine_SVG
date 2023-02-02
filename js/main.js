+console.log('JavaScipt is up and running! :D');

document.querySelector('.sticker').addEventListener('click', function(event) {
    let selectedImage = event.target;
    if (selectedImage.tagName === 'IMG') {
      selectedImage.classList.toggle('selected');
      console.log(`You selected the sticker, ${selectedImage.id}!`);
    }
  });  