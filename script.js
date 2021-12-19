var botaoVerificardor = document.querySelector('#btn');
botaoVerificardor.addEventListener('click', function(e){
    e.preventDefault();
    //alert('Olá Mundo!')

    const requisicao = fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
    .then(response => {
        return response.json(); 
    })
    .then(jsonBody => {
        console.log(jsonBody)
    })
    
})