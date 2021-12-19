var botaoVerificardor = document.querySelector('#btn');
botaoVerificardor.addEventListener('click', function(e){
    e.preventDefault();
    //alert('Olá Mundo!')

    const requisicao = fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
    .then(response => {
        return response.json(); 
    })
    .then(jsonBody => {
        document.querySelector('#res').innerHTML = jsonBody.OWID_WRL.data[2].total_cases
        console.log(typeof jsonBody)
    })
    
})