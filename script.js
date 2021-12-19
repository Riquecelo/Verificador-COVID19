var botaoVerificardor = document.querySelector('#btn');
botaoVerificardor.addEventListener('click', function(e){
    e.preventDefault();
    //alert('Olá Mundo!')

    let inputVerif1 = document.querySelector('input').value;
    //console.log(inputVerif1)

    const requisicao = fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
    .then(response => {
        return response.json(); 
    })
    .then(jsonBody => {
        let inputVerif2 = inputVerif1;
        document.querySelector('#res').innerHTML = jsonBody.OWID_WRL.data[inputVerif2].total_cases;
        console.log(jsonBody)
    })
    
})