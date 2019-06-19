
// const p = document.querySelector('p');
// p.remove()
//console.log(p);

const ps = document.querySelectorAll('p')
ps.forEach( element => {
    element.textContent = '************'
    //element.remove();
    //console.log(element.textContent)
});