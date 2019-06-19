

const ps = document.querySelectorAll('p');




ps.forEach( function (parag) {
    
  if ( parag.textContent.includes('the') ) {
      parag.remove();
  }
    
})