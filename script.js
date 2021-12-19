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
        if(inputVerif2 == 0){
          return window.alert('Insira um número maior que zero')
        }else{
            document.querySelector('#res').innerHTML = jsonBody.OWID_WRL.data[inputVerif2].total_cases;
            document.querySelector('#data').innerHTML = jsonBody.OWID_WRL.data[inputVerif2].date;
            document.querySelector('#nRes').innerHTML = jsonBody.OWID_WRL.data[inputVerif2].new_cases;
            //console.log(jsonBody)
        }
        
    })
    
})

var botaoRefresh = document.querySelector('#refresh');
botaoRefresh.addEventListener('click', () => {
    location.reload();
})