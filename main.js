let inputHTML = document.getElementById('gl-inp');
inputHTML.addEventListener('keydown', (e)=>{
    let input = document.getElementById('gl-inp').value;
    let key = e.key;
    if(key == "Enter" || key == 13 || key == "13"){
        window.location.href = "https://www.google.com/search?q=" + input;
    }
});
let botonBuscar = document.getElementById('buscarConGoogle');
botonBuscar.addEventListener('click', ()=>{
    let input = document.getElementById('gl-inp').value;
    window.location.href = "https://www.google.com/search?q=" + input;
});
